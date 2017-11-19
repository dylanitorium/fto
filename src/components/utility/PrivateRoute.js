import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-native';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      rest.canEnter ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: rest.redirectTo,
          state: { from: props.location }
        }}
        />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(PrivateRoute);
