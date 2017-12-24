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
      {...props}
      leftComponent={leftComponent}
      centerComponent={<Title>{props.screenTitle.toUpperCase()}</Title>}
    />
  )
};

NavBar.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  hasHistory: PropTypes.bool.isRequired,
};

NavBar.defaultProps = {
};

export default NavBar;


