import React from 'react';
import PropTypes from 'prop-types';
import { NavigationBar } from '@shoutem/ui';
import { Title } from '@shoutem/ui/components/Text';
import { Button } from '@shoutem/ui/components/Button';
import { Icon } from '@shoutem/ui/components/Icon/index';
import { View } from 'react-native';

const NavBar = (props) => {
  let leftComponent;

  if (props.hasHistory) {
    leftComponent = (
      <Button onPress={props.onBackPress}>
        <Icon name={'back'} />
      </Button>
    );
  } else {
    leftComponent = (<View />);
  }

  return (
    <NavigationBar
      leftComponent={leftComponent}
      centerComponent={<Title>{props.screenTitle}</Title>}
      {...props}
    />
  )
};

NavBar.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  hasHistory: PropTypes.bool.isRequired,
  onBackPress: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  screenTitle: 'fivethreeone'
};

export default NavBar;


