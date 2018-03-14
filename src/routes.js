import React from 'react';
import { Switch, Route } from 'react-router-native';
import PrivateRoute from './components/connected/PrivateRoute';

// Screen
import Dashboard from './components/connected/screens/Dashboard';

import Onboard from './components/connected/screens/Onboard';
import OnboardMeasurementSystem from './components/connected/screens/OnboardMeasurementSystem';
import OnboardBench from './components/connected/screens/OnboardBench';
import OnboardSquat from './components/connected/screens/OnboardSquat';
import OnboardOverhead from './components/connected/screens/OnboardOverhead';
import OnboardDeadlift from './components/connected/screens/OnboardDeadlift';

import WeekScreen from './components/connected/screens/WeekScreen';
import ExerciseScreen from './components/connected/screens/ExerciseScreen';
import SettingsScreen from './components/connected/screens/SettingsScreen';
import ExerciseSettingsScreen from './components/connected/screens/ExerciseSettingsScreen';
import { EXERCISES } from './constants';
import ArchivedCycle from './components/connected/screens/ArchivedCycle';


export default () => (
  <Switch>
    <PrivateRoute exact path={'/'} component={Dashboard} />

    <Route exact path={'/onboard'} component={Onboard} />
    <Route path={'/onboard/units'} component={OnboardMeasurementSystem} />
    <Route path={`/onboard/${EXERCISES.BENCH}`} component={OnboardBench} />
    <Route path={`/onboard/${EXERCISES.SQUAT}`} component={OnboardSquat} />
    <Route path={`/onboard/${EXERCISES.OVERHEAD}`} component={OnboardOverhead} />
    <Route path={`/onboard/${EXERCISES.DEADLIFT}`} component={OnboardDeadlift} />

    <PrivateRoute exact path={'/week/:week'} component={WeekScreen} />
    <PrivateRoute path={'/week/:week/exercise/:exercise'} component={ExerciseScreen} />

    <PrivateRoute exact path={'/history/:cycleId'} component={ArchivedCycle} />
    <PrivateRoute exact path={'/history/:cycleId/week/:week'} component={WeekScreen} />
    <PrivateRoute path={'/history/:cycleId/week/:week/exercise/:exercise'} component={ExerciseScreen} />

    <PrivateRoute exact path={'/settings'} component={SettingsScreen} />
    <PrivateRoute path={'/settings/exercise/:exercise'} component={ExerciseSettingsScreen} />
    <PrivateRoute path={'/settings/timer'} />
  </Switch>
);
