// Action Types
import {EXERCISES, SET_MODIFIER, SET_REPS, SETS, WEEKS} from '../../constants';

const types = {
  START_CYCLE: 'app/cycle/start',
  COMPLETE_CYCLE: 'app/cycle/complete',
  CANCEL_CYCLE: 'app/cycle/cancel',
  COMPLETE_SET: 'app/set/complete',
};

// Actions Creators
export const startCycle = settings => ({
  type: types.START_CYCLE,
  settings,
});

export const completeCycle = () => ({
  type: types.COMPLETE_CYCLE
});

export const cancelCycle = () => ({
  type: types.CANCEL_CYCLE,
});

export const completeSet = () => ({
  type: types.COMPLETE_SET,
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
    case types.COMPLETE_SET:
      return {
        ...state,
        setCompleted: true,
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
    case types.COMPLETE_SET:
      return {
        ...state,
        [state[action.set]]: createSetReducer(week, exercise, action.set)(state[action.set], action),
      };
    case types.START_CYCLE:
      return {
        ...reduceAllSets(state, action, week, exercise),
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
  complete: false,
};

/**
 * Creates a reducer for a week, passing the context of the week down.
 *
 * @param week
 * @returns {function(*=, *=)}
 */
const createWeekReducer = week => ((state = initialWeekState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
      return {
        ...state,
        ...reduceAllExercises(state, action, week)
      };
    case types.COMPLETE_SET:
      return {
        ...state,
        [state[action.exercise]]: createExerciseReducer(action.week, action.exercise)(state[action.exercise], action),
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
        startDate: '',
        cycleId: '',
      };
    case types.COMPLETE_CYCLE:
      return {
        ...state,
        ...reduceAllWeeks(state, action),
        complete: true,
        active: false,
        finishDate: '',
      };
    case types.CANCEL_CYCLE:
      return initialCycleState;
    case types.COMPLETE_SET:
      return {
        ...state,
        [state[action.week]]: createWeekReducer(action.week)(state[action.week], action),
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
        [action.cycle.cycleId]: action.cycle,
      };
    default:
      return state;
  }
};

const initialState = {
  cycle: initialCycleState,
  history: initialHistoryState
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
    case types.COMPLETE_CYCLE:
    case types.CANCEL_CYCLE:
    case types.COMPLETE_SET:
      return {
        ...state,
        cycle: cycle(state[cycle], action),
        history: history(state.history, action),
      };
    default:
      return state;
  }
};
