import React from 'react';
import PropTypes from 'prop-types';
import { NavigationBar } from '@shoutem/ui';
import { Title } from '@shoutem/ui/components/Text';
import { Button } from '@shoutem/ui/components/Button';
import { Icon } from '@shoutem/ui/components/Icon/index';

const NavBar = props => (
  <NavigationBar
    leftComponent={() => {
      if (props.hasHistory) {
        return (
          <Button onPress={props.onBackPress}>
            <Icon name={'back'} />
          </Button>
        );
      }
      return null;
    }}
    centerComponent={<Title>{props.screenTitle}</Title>}
    {...props}
  />
);

NavBar.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  hasHistory: PropTypes.bool.isRequired,
  onBackPress: PropTypes.func.isRequired,
};

export default NavBar;


