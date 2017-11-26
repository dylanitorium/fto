import React from 'react';
import PropTypes from 'prop-types';
import { NavigationBar, Title } from '@shoutem/ui';
import { View } from 'react-native';
import BackButton from './BackButton';

const NavBar = (props) => {
  let leftComponent;

  if (props.hasHistory) {
    leftComponent = (
      <BackButton />
    );
  } else {
    leftComponent = (<View />);
  }

  return (
    <NavigationBar
      leftComponent={leftComponent}
      centerComponent={<Title>{props.screenTitle.toUpperCase()}</Title>}
      {...props}
    />
  )
};

NavBar.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  hasHistory: PropTypes.bool.isRequired,
};

NavBar.defaultProps = {
  screenTitle: 'fivethreeone'
};

export default NavBar;


