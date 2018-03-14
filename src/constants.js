export const ROUTE_MAP = {
  '/onboard': 'fivethreeone',
  '/onboard/bench': 'Bench',
  '/onboard/squat': 'Squat',
  '/onboard/overhead': 'Overhead',
  '/onboard/deadlift': 'Deadlift',
  '/': 'fivethreeone',

  '/week/1': 'Week One',
  '/week/1/exercise/bench': 'Bench',
  '/week/1/exercise/squat': 'Squat',
  '/week/1/exercise/overhead': 'Overheard',
  '/week/1/exercise/deadlift': 'Deadlift',

  '/week/2': 'Week Two',
  '/week/2/exercise/bench': 'Bench',
  '/week/2/exercise/squat': 'Squat',
  '/week/2/exercise/overhead': 'Overheard',
  '/week/2/exercise/deadlift': 'Deadlift',

  '/week/3': 'Week Three',
  '/week/3/exercise/bench': 'Bench',
  '/week/3/exercise/squat': 'Squat',
  '/week/3/exercise/overhead': 'Overheard',
  '/week/3/exercise/deadlift': 'Deadlift',

  '/week/4': 'Deload Week',
  '/week/4/exercise/bench': 'Bench',
  '/week/4/exercise/squat': 'Squat',
  '/week/4/exercise/overhead': 'Overheard',
  '/week/4/exercise/deadlift': 'Deadlift',

  '/settings': 'Settings',
  '/settings/exercise/bench': 'Bench',
  '/settings/exercise/squat': 'Squat',
  '/settings/exercise/overhead': 'Overhead',
  '/settings/exercise/deadlift': 'Deadlift',

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
  [SETS.WARM_UP_THREE]: 3,
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

export const MEASUREMENT_SYSTEMS = {
  IMPERIAL: 'IMPERIAL',
  METRIC: 'METRIC',
}

export const SYSTEM_CONVERSIONS = {
  [MEASUREMENT_SYSTEMS.IMPERIAL]: value => value,
  [MEASUREMENT_SYSTEMS.METRIC]: value => value,
}
