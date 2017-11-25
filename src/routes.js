import React from 'react';
import { Switch, Route } from 'react-router-native';
import PrivateRoute from './components/connected/PrivateRoute';

// Screen
import Onboard from './components/connected/screens/Onboard';
import OnboardBench from './components/screens/OnboardBench';


export default () => (
  <Switch>
    <PrivateRoute path={'/'} exact component={Onboard} />

    <Route path={'/onboard'} component={Onboard} />
    <Route path={'/onboard/bench'} component={OnboardBench} />
    <Route path={'/onboard/squat'} />
    <Route path={'/onboard/overhead'} />
    <Route path={'/onboard/deadlift'} />

    <PrivateRoute path={'/week/:week'} />
    <PrivateRoute path={'/week/:week/:exercise'} />

    <PrivateRoute path={'/history/:cycleId'} />
    <PrivateRoute path={'/history/:cycleId/week/:week'} />
    <PrivateRoute path={'/history/:cycleId/week/:exercise'} />

    <PrivateRoute path={'/settings'} />
  </Switch>
);
