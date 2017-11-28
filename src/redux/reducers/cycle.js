// Action Types
import {EXERCISES, WEEKS} from '../../constants';

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
})

export const cancelCycle = () => ({
  type: types.CANCEL_CYCLE,
});

export const completeSet = () => ({
  type: types.COMPLETE_SET,
});

// Reducer
const initialExerciseState = {};

const exercise = (state = initialExerciseState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
    case types.COMPLETE_CYCLE:
    case types.CANCEL_CYCLE:
    case types.COMPLETE_SET:
    default:
      return state;
  }
}

const initialWeekState = {
  [EXERCISES.BENCH]: initialExerciseState,
  [EXERCISES.SQUAT]: initialExerciseState,
  [EXERCISES.OVERHEAD]: initialExerciseState,
  [EXERCISES.DEADLIFT]: initialExerciseState,
};

const week = (state = initialWeekState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
    case types.COMPLETE_CYCLE:
    case types.CANCEL_CYCLE:
    case types.COMPLETE_SET:
      return {
        ...state,
        [EXERCISES.BENCH]: exercise(state[EXERCISES.BENCH], action),
        [EXERCISES.SQUAT]: exercise(state[EXERCISES.SQUAT], action),
        [EXERCISES.OVERHEAD]: exercise(state[EXERCISES.OVERHEAD], action),
        [EXERCISES.DEADLIFT]: exercise(state[EXERCISES.DEADLIFT], action),
      }
    default:
      return state;
  }
};

const initialCycleState = {
  [WEEKS.ONE]: initialWeekState,
  [WEEKS.TWO]: initialWeekState,
  [WEEKS.THREE]: initialWeekState,
  [WEEKS.FOUR]: initialWeekState,
  completed: false,
  active: false,
};

const cycle = (state = initialCycleState, action) => {
  switch (action.type) {
    case types.START_CYCLE:
      return {
        ...state,
        [WEEKS.ONE]: week(state[WEEKS.ONE], action),
        [WEEKS.TWO]: week(state[WEEKS.TWO], action),
        [WEEKS.THREE]: week(state[WEEKS.THREE], action),
        [WEEKS.FOUR]: week(state[WEEKS.FOUR], action),
        active: true,
      }
    case types.COMPLETE_CYCLE:
      return {
        ...state,
        [WEEKS.ONE]: week(state[WEEKS.ONE], action),
        [WEEKS.TWO]: week(state[WEEKS.TWO], action),
        [WEEKS.THREE]: week(state[WEEKS.THREE], action),
        [WEEKS.FOUR]: week(state[WEEKS.FOUR], action),
        complete: true,
        active: false,
      }
    case types.CANCEL_CYCLE:
      return {
        ...state,
        [WEEKS.ONE]: week(state[WEEKS.ONE], action),
        [WEEKS.TWO]: week(state[WEEKS.TWO], action),
        [WEEKS.THREE]: week(state[WEEKS.THREE], action),
        [WEEKS.FOUR]: week(state[WEEKS.FOUR], action),
        complete: false,
        active: false,
      }
    case types.COMPLETE_SET:
      return {
        ...state,
        [WEEKS.ONE]: week(state[WEEKS.ONE], action),
        [WEEKS.TWO]: week(state[WEEKS.TWO], action),
        [WEEKS.THREE]: week(state[WEEKS.THREE], action),
        [WEEKS.FOUR]: week(state[WEEKS.FOUR], action),
      }
    default:
      return state;
  }
}

const initialState = {
  cycle: initialCycleState,
  history: {},
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
      }
    default:
      return state;
  }
}
