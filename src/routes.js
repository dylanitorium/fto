import React from 'react';
import { Switch } from 'react-native';

import PrivateRoute from './components/connected/PrivateRoute';

export default () => (
  <Switch>
    <PrivateRoute path={'/'} exact />
  </Switch>
);
