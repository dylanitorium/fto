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

export const WARM_UP_REPS = [5, 5, 5];

export const WARM_UP_MODIFIER = [0.4, 0.5, 0.6];

export const SET_REPS = {
  [WEEKS.ONE]: [5, 5, 5],
  [WEEKS.TWO]: [3, 3, 3],
  [WEEKS.THREE]: [5, 3, 1],
  [WEEKS.FOUR]: [5, 5, 5],
}

export const SET_MODIFIER = {
  [WEEKS.ONE]: [0.65, 0.75, 0.85],
  [WEEKS.TWO]: [0.7, 0.8, 0.9],
  [WEEKS.THREE]: [0.75, 0.85, 0.95],
  [WEEKS.FOUR]: [0.6, 0.6, 0.6],
}

