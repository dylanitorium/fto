import React from 'react';
import { Switch, Route } from 'react-router-native';
import PrivateRoute from './components/connected/PrivateRoute';

// Screen
import Dashboard from './components/connected/screens/Dashboard';

import Onboard from './components/connected/screens/Onboard';
import OnboardBench from './components/connected/screens/OnboardBench';
import OnboardSquat from './components/connected/screens/OnboardSquat';
import OnboardOverhead from './components/connected/screens/OnboardOverhead';
import OnboardDeadlift from './components/connected/screens/OnboardDeadlift';

import WeekScreen from './components/connected/screens/WeekScreen';
import ExerciseScreen from './components/connected/screens/ExerciseScreen';


export default () => (
  <Switch>
    <PrivateRoute exact path={'/'} component={Dashboard} />

    <Route exact path={'/onboard'} component={Onboard} />
    <Route path={'/onboard/bench'} component={OnboardBench} />
    <Route path={'/onboard/squat'} component={OnboardSquat} />
    <Route path={'/onboard/overhead'} component={OnboardOverhead} />
    <Route path={'/onboard/deadlift'} component={OnboardDeadlift} />


    <PrivateRoute exact path={'/week/:week'} component={WeekScreen} />
    <PrivateRoute path={'/week/:week/exercise/:exercise'} component={ExerciseScreen} />


    <PrivateRoute path={'/history/:cycleId'} />
    <PrivateRoute path={'/history/:cycleId/week/:week'} component={WeekScreen} />
    <PrivateRoute path={'/history/:cycleId/week/:week/exercise/:exercise'} />


    <PrivateRoute path={'/settings'} />
  </Switch>
);
