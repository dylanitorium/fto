import React from 'react';
import { Switch, Route } from 'react-native-router';
import PrivateRoute from './components/connected/PrivateRoute';

export default () => (
  <Switch>
    <PrivateRoute path={'/'} exact />

    <Route path={'/onboard'} />
    <Route path={'/onboard/bench'} />
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
