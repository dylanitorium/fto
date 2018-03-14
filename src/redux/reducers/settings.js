// Action Types
import { EXERCISES, MEASUREMENT_SYSTEMS, SYSTEM_CONVERSIONS } from '../../constants';
import { types as cycleTypes } from './cycles';

const types = {
  UPDATE_MAX: 'app/settings/updateMax',
  UPDATE_INCREMENT: 'app/settings/updateIncrement',
  UPDATE_MEASUREMENT_SYSTEM: 'app/settings/updateMeasurementSystem',
};

// Action Creators
export const updateMax = (exercise, value) => ({
  type: types.UPDATE_MAX,
  exercise,
  value
});

export const updateMeasurementSystem = system => ({
  type: types.UPDATE_MEASUREMENT_SYSTEM,
  system
});

export const updateIncrement = (exercise, value) => ({
  type: types.UPDATE_INCREMENT,
  exercise,
  value
});

// Reducer
const calculateWorkingMax = (max) => {
  let value = max;
  if (typeof value !== 'number') {
    value = parseFloat(max);
  }
  if (isNaN(value)) {
    return 0;
  }
  return value * 0.9;
};

const initialExerciseState = {
  max: 0,
  workingMax: calculateWorkingMax(0),
  increment: 2.5,
};

const exerciseReducer = (state = initialExerciseState, action) => {
  let max;
  switch (action.type) {
    case types.UPDATE_MEASUREMENT_SYSTEM:

      return {
        max: SYSTEM_CONVERSIONS[action.system](state.max),
        workingMax: calculateWorkingMax(SYSTEM_CONVERSIONS[action.system](state.workingMax)),
        increment: SYSTEM_CONVERSIONS[action.system](state.increment)
      };
    case types.UPDATE_MAX:
      return {
        ...state,
        max: action.value,
        workingMax: calculateWorkingMax(action.value),
      };
    case types.UPDATE_INCREMENT:
      return {
        ...state,
        increment: action.value,
      };
    case cycleTypes.COMPLETE_CYCLE:
      max = parseFloat(state.max, 10) + parseFloat(state.increment, 10);
      return {
        ...state,
        max,
        workingMax: calculateWorkingMax(max),
      };
    default:
      return state;
  }
};

const initialState = {
  measurementSystem: MEASUREMENT_SYSTEMS.METRIC,
  [EXERCISES.BENCH]: initialExerciseState,
  [EXERCISES.SQUAT]: initialExerciseState,
  [EXERCISES.OVERHEAD]: initialExerciseState,
  [EXERCISES.DEADLIFT]: initialExerciseState,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MEASUREMENT_SYSTEM:
      return {
        ...state,
        measurementSystem: action.system,
        [EXERCISES.BENCH]: exerciseReducer(state[EXERCISES.BENCH], action),
        [EXERCISES.SQUAT]: exerciseReducer(state[EXERCISES.SQUAT], action),
        [EXERCISES.OVERHEAD]: exerciseReducer(state[EXERCISES.OVERHEAD], action),
        [EXERCISES.DEADLIFT]: exerciseReducer(state[EXERCISES.DEADLIFT], action),
      };
    case types.UPDATE_INCREMENT:
    case types.UPDATE_MAX:
      return {
        ...state,
        [action.exercise]: exerciseReducer(state[action.exercise], action)
      };
    case cycleTypes.COMPLETE_CYCLE:
      return {
        ...state,
        [EXERCISES.BENCH]: exerciseReducer(state[EXERCISES.BENCH], action),
        [EXERCISES.SQUAT]: exerciseReducer(state[EXERCISES.SQUAT], action),
        [EXERCISES.OVERHEAD]: exerciseReducer(state[EXERCISES.OVERHEAD], action),
        [EXERCISES.DEADLIFT]: exerciseReducer(state[EXERCISES.DEADLIFT], action),
      };
    default:
      return state;
  }
};

export default reducer;
