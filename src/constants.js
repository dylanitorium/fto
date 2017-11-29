export const ROUTE_MAP = {
  '/onboard': 'fivethreeone',
  '/onboard/bench': 'Bench',
  '/onboard/squat': 'Squat',
  '/onboard/overhead': 'Overhead',
  '/onboard/deadlift': 'Deadlift',
  '/week/1': 'Week One',
  '/week/2': 'Week Two',
  '/week/3': 'Week Three',
  '/week/4': 'Deload Week',
};

export const EXERCISES = {
  BENCH: 'bench',
  SQUAT: 'squat',
  OVERHEAD: 'overhead',
  DEADLIFT: 'deadlift',
};

export const WEEKS = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
};

export const SETS = {
  WARM_UP_ONE: 'warmUpSetOne',
  WARM_UP_TWO: 'warmUpSetTwo',
  WARM_UP_THREE: 'warmUpSetThree',
  ONE: 'setOne',
  TWO: 'setTwo',
  THREE: 'setThree',
};

export const WARM_UP_REPS = {
  [SETS.WARM_UP_ONE]: 5,
  [SETS.WARM_UP_TWO]: 5,
  [SETS.WARM_UP_THREE]: 5,
};

export const WARM_UP_MODIFIER = {
  [SETS.WARM_UP_ONE]: 0.4,
  [SETS.WARM_UP_TWO]: 0.5,
  [SETS.WARM_UP_THREE]: 0.6,
};

export const SET_REPS = {
  [WEEKS.ONE]: {
    ...WARM_UP_REPS,
    [SETS.ONE]: 5,
    [SETS.TWO]: 5,
    [SETS.THREE]: 5,
  },
  [WEEKS.TWO]: {
    ...WARM_UP_REPS,
    [SETS.ONE]: 3,
    [SETS.TWO]: 3,
    [SETS.THREE]: 3,
  },
  [WEEKS.THREE]: {
    ...WARM_UP_REPS,
    [SETS.ONE]: 5,
    [SETS.TWO]: 3,
    [SETS.THREE]: 1,
  },
  [WEEKS.FOUR]: {
    ...WARM_UP_REPS,
    [SETS.ONE]: 5,
    [SETS.TWO]: 5,
    [SETS.THREE]: 5,
  },
};

export const SET_MODIFIER = {
  [WEEKS.ONE]: {
    ...WARM_UP_MODIFIER,
    [SETS.ONE]: 0.65,
    [SETS.TWO]: 0.75,
    [SETS.THREE]: 0.85,
  },
  [WEEKS.TWO]: {
    ...WARM_UP_MODIFIER,
    [SETS.ONE]: 0.7,
    [SETS.TWO]: 0.8,
    [SETS.THREE]: 0.9,
  },
  [WEEKS.THREE]: {
    ...WARM_UP_MODIFIER,
    [SETS.ONE]: 0.75,
    [SETS.TWO]: 0.85,
    [SETS.THREE]: 0.95,
  },
  [WEEKS.FOUR]: {
    ...WARM_UP_MODIFIER,
    [SETS.ONE]: 0.6,
    [SETS.TWO]: 0.6,
    [SETS.THREE]: 0.6,
  },
};

