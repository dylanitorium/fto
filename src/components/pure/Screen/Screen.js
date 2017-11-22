import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Screen as ShoutemScreen } from '@shoutem/ui/components/Screen';
import { NavBar } from '../Navbar';

const styles = StyleSheet.create({
  container: {
    paddingTop: 80 // Nav height + 10
  },
});

const Screen = props => (
  <ShoutemScreen styleName={'paper'}>
    <View style={styles.container}>
      <NavBar {...props} screenTitle={props.screenTitle} />
      {props.children}
    </View>
  </ShoutemScreen>
);

Screen.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Screen;
