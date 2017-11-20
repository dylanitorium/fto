import React from 'react';
import PropTypes from 'prop-types';
import { Screen } from '@shoutem/ui/components/Screen';
import NavBar from './Navbar/index';

const AppScreen = props => (
  <Screen>
    <NavBar {...props} screenTitle={props.screenTitle} />
    {props.children}
  </Screen>
);

AppScreen.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppScreen;
