import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import { Screen as ShoutemScreen } from '@shoutem/ui/components/Screen';
import NavBar from '../Navbar';


const Screen = props => (
  <View>
    <ShoutemScreen styleName={'paper'}>
      <NavBar {...props} screenTitle={props.screenTitle} />
      {props.children}
    </ShoutemScreen>
  </View>
);

Screen.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Screen;
