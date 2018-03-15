
import md5 from 'md5';
import moment from 'moment';
import { EXERCISES, SET_MODIFIER, SET_REPS, SETS, WEEKS, SYSTEM_CONVERSIONS } from '../../constants';
import { types as settingsActionTypes } from './settings';


// Action Types
export const types = {
  START_CYCLE: 'app/cycle/start',
  COMPLETE_CYCLE: 'app/cycle/complete',
  CANCEL_CYCLE: 'app/cycle/cancel',
  TOGGLE_SET: 'app/set/complete',
  COMPLETE_EXERCISE: 'app/exercise/complete',
  COMPLETE_WEEK: 'app/week/complete',
};

export const completeWeek = week => ({
  type: types.COMPLETE_WEEK,
  week,
});

// Actions Creators
export const startCycle = settings => ({
  type: types.START_CYCLE,
  settings,
});

export const completeCycle = cycle => ({
  type: types.COMPLETE_CYCLE,
  cycle,
});

export const cancelCycle = () => ({
  type: types.CANCEL_CYCLE,
});

export const toggleSet = (week, exercise, set) => ({
  type: types.TOGGLE_SET,
  week,
  exercise,
  set,
});

export const completeExercise = (week, exercise) => ({
  type: types.COMPLETE_EXERCISE,
  week,
  exercise,
});

// Reducer
const initialSetState = {
  reps: 0,
  weight: 0,
  repsCompleted: 0,
  setCompleted: false,
};

/**
 *
 * @param weight
 * @param modifier
 * @returns {*}
 */
const calculateWeight = (weight, modifier) => {
  const roundingFactor = 2.5;
  const rawNumber = (parseFloat(weight) * parseFloat(modifier));
  const rawFactorial = rawNumber / roundingFactor;
  const percentageOfNextRound = parseFloat(rawFactorial - Math.floor(rawFactorial)).toFixed(3);
  let result;
  let fill;

  if (percentageOfNextRound >= 0.5) {
    fill = ((1 - percentageOfNextRound) * roundingFactor);
    result = (rawNumber + fill).toFixed(1);
  } else {
    fill = (percentageOfNextRound * roundingFactor);
    result = (rawNumber - fill).toFixed(1);
  }

  if (result.slice('-1') === '0') {
    return result.substring(0, result.length - 2);
  }

  return result;
};

/**
 * Creates a set reducer with context of its week and exercise
 *
 * @param week
 * @param exersise
 * @param set
 * @returns {function(*=, *)}
 */
const createSetReducer = (week, exersise, set) => ((state = initialSetState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
      return {
        reps: SET_REPS[week][set],
        weight: calculateWeight(action.settings[exersise].workingMax, SET_MODIFIER[week][set]),
        repsCompleted: 0,
        setCompleted: false,
      };
    case settingsActionTypes.UPDATE_MEASUREMENT_SYSTEM:
      return {
        ...state,
        weight: SYSTEM_CONVERSIONS[action.system](state.weight),
      };
    case types.TOGGLE_SET:
      return {
        ...state,
        setCompleted: !state.setCompleted,
      };
    default:
      return state;
  }
});

const initialExerciseState = {
  [SETS.WARM_UP_ONE]: initialSetState,
  [SETS.WARM_UP_TWO]: initialSetState,
  [SETS.WARM_UP_THREE]: initialSetState,
  [SETS.ONE]: initialSetState,
  [SETS.TWO]: initialSetState,
  [SETS.THREE]: initialSetState,
  exerciseCompleted: false,
};

/**
 * Makes it easier to pass the state and action to the substate... kinda... kinda
 *
 * @param state
 * @param action
 * @param week
 * @param exercise
 * @returns {{}}
 */
const reduceAllSets = (state, action, week, exercise) => ({
  [SETS.WARM_UP_ONE]: createSetReducer(week, exercise, SETS.WARM_UP_ONE)(state[SETS.WARM_UP_ONE], action),
  [SETS.WARM_UP_TWO]: createSetReducer(week, exercise, SETS.WARM_UP_TWO)(state[SETS.WARM_UP_TWO], action),
  [SETS.WARM_UP_THREE]: createSetReducer(week, exercise, SETS.WARM_UP_THREE)(state[SETS.WARM_UP_THREE], action),
  [SETS.ONE]: createSetReducer(week, exercise, SETS.ONE)(state[SETS.ONE], action),
  [SETS.TWO]: createSetReducer(week, exercise, SETS.TWO)(state[SETS.TWO], action),
  [SETS.THREE]: createSetReducer(week, exercise, SETS.THREE)(state[SETS.THREE], action),
});

/**
 * Creates the reducer for an exercise in the context of a week
 *
 * @param week
 * @param exercise
 * @returns {function(*=, *=)}
 */
const createExerciseReducer = (week, exercise) => ((state = initialExerciseState, action) => {
  switch (action.type) {
    case types.COMPLETE_EXERCISE:
      return {
        ...state,
        exerciseCompleted: true,
      };
    case types.TOGGLE_SET:
      return {
        ...state,
        [action.set]: createSetReducer(week, exercise, action.set)(state[action.set], action),
      };
    case settingsActionTypes.UPDATE_MEASUREMENT_SYSTEM:
      return {
        ...state,
        ...reduceAllSets(state, action, week, exercise),
      };
    case types.START_CYCLE:
      return {
        ...reduceAllSets(state, action, week, exercise),
        exerciseCompleted: false,
      };
    default:
      return state;
  }
});

/**
 * Makes it easier to pass the state and action to the substate... kinda
 *
 * @param state
 * @param action
 * @param week
 * @returns {{}}
 */
const reduceAllExercises = (state, action, week) => ({
  [EXERCISES.BENCH]: createExerciseReducer(week, EXERCISES.BENCH)(state[EXERCISES.BENCH], action),
  [EXERCISES.SQUAT]: createExerciseReducer(week, EXERCISES.SQUAT)(state[EXERCISES.SQUAT], action),
  [EXERCISES.OVERHEAD]: createExerciseReducer(week, EXERCISES.OVERHEAD)(state[EXERCISES.OVERHEAD], action),
  [EXERCISES.DEADLIFT]: createExerciseReducer(week, EXERCISES.DEADLIFT)(state[EXERCISES.DEADLIFT], action),
});

/**
 *
 * @type {{complete: boolean}}
 */
const initialWeekState = {
  [EXERCISES.BENCH]: initialExerciseState,
  [EXERCISES.SQUAT]: initialExerciseState,
  [EXERCISES.OVERHEAD]: initialExerciseState,
  [EXERCISES.DEADLIFT]: initialExerciseState,
  weekCompleted: false,
};

/**
 * Creates a reducer for a week, passing the context of the week down.
 *
 * @param week
 * @returns {function(*=, *=)}
 */
const createWeekReducer = week => ((state = initialWeekState, action) => {
  switch (action.type) {
    case types.COMPLETE_WEEK:
      return {
        ...state,
        weekCompleted: true,
      };
    case types.START_CYCLE:
      return {
        ...state,
        ...reduceAllExercises(state, action, week),
        weekCompleted: false,
      };
    case types.TOGGLE_SET:
    case types.COMPLETE_EXERCISE:
      return {
        ...state,
        [action.exercise]: createExerciseReducer(action.week, action.exercise)(state[action.exercise], action),
      };
    case settingsActionTypes.UPDATE_MEASUREMENT_SYSTEM:
      return {
        ...state,
        ...reduceAllExercises(state, action, week),
      }
    default:
      return state;
  }
});


/**
 * Makes it easier to pass the state and action to the substate.
 *
 * @param state
 * @param action
 * @returns {{}}
 */
const reduceAllWeeks = (state, action) => ({
  [WEEKS.ONE]: createWeekReducer(WEEKS.ONE)(state[WEEKS.ONE], action),
  [WEEKS.TWO]: createWeekReducer(WEEKS.TWO)(state[WEEKS.TWO], action),
  [WEEKS.THREE]: createWeekReducer(WEEKS.THREE)(state[WEEKS.THREE], action),
  [WEEKS.FOUR]: createWeekReducer(WEEKS.FOUR)(state[WEEKS.FOUR], action),
});

/**
 * Initial state for a cycle
 * @type {{completed: boolean, active: boolean}}
 */
const initialCycleState = {
  [WEEKS.ONE]: initialWeekState,
  [WEEKS.TWO]: initialWeekState,
  [WEEKS.THREE]: initialWeekState,
  [WEEKS.FOUR]: initialWeekState,
  completed: false,
  startDate: null,
  finishDate: null,
  cycleId: null,
  active: false,
};

/**
 * Cycle reducer
 *
 * @param state
 * @param action
 * @returns {*}
 */
const cycle = (state = initialCycleState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
      return {
        ...state,
        ...reduceAllWeeks(state, action),
        active: true,
        startDate: moment(),
        cycleId: md5(moment() + JSON.stringify(action.settings)),
      };
    case types.COMPLETE_CYCLE:
      return {
        ...state,
        ...reduceAllWeeks(state, action),
        complete: true,
        active: false,
      };
    case types.CANCEL_CYCLE:
      return initialCycleState;
    case types.TOGGLE_SET:
    case types.COMPLETE_WEEK:
    case types.COMPLETE_EXERCISE:
      return {
        ...state,
        [action.week]: createWeekReducer(action.week)(state[action.week], action),
      };
    case settingsActionTypes.UPDATE_MEASUREMENT_SYSTEM:
      return {
        ...state,
        ...reduceAllWeeks(state, action),
      };
    default:
      return state;
  }
};

const initialHistoryState = {};

/**
 * History reducer
 *
 * @param state
 * @param action
 * @returns {{}}
 */
const history = (state = initialHistoryState, action) => {
  switch (action.type) {
    case types.COMPLETE_CYCLE:
      return {
        ...state,
        [action.cycle.cycleId]: {
          ...action.cycle,
          finishDate: moment(),
        }
      };
    default:
      return state;
  }
};

const initialState = {
  cycle: initialCycleState,
  history: initialHistoryState
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
    case types.COMPLETE_CYCLE:
    case types.CANCEL_CYCLE:
    case types.TOGGLE_SET:
    case types.COMPLETE_WEEK:
    case types.COMPLETE_EXERCISE:
    case settingsActionTypes.UPDATE_MEASUREMENT_SYSTEM:
      return {
        ...state,
        cycle: cycle(state.cycle, action),
        history: history(state.history, action),
      };
    default:
      return state;
  }
};
