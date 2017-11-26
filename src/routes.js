import React from 'react';
import { Switch, Route } from 'react-router-native';
import PrivateRoute from './components/connected/PrivateRoute';

// Screen
import Onboard from './components/connected/screens/Onboard';
import OnboardBench from './components/connected/screens/OnboardBench';
import OnboardSquat from './components/connected/screens/OnboardSquat';
import OnboardOverhead from './components/connected/screens/OnboardOverhead';
import OnboardDeadlift from './components/connected/screens/OnboardDeadlift';


export default () => (
  <Switch>
    <PrivateRoute path={'/'} exact component={Onboard} />

    <Route exact path={'/onboard'} component={Onboard} />
    <Route path={'/onboard/bench'} component={OnboardBench} />
    <Route path={'/onboard/squat'} component={OnboardSquat} />
    <Route path={'/onboard/overhead'} component={OnboardOverhead} />
    <Route path={'/onboard/deadlift'} component={OnboardDeadlift} />

    <PrivateRoute path={'/week/:week'} />
    <PrivateRoute path={'/week/:week/:exercise'} />

    <PrivateRoute path={'/history/:cycleId'} />
    <PrivateRoute path={'/history/:cycleId/week/:week'} />
    <PrivateRoute path={'/history/:cycleId/week/:exercise'} />

    <PrivateRoute path={'/settings'} />
  </Switch>
);
