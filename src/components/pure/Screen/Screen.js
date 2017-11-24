import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Screen as ShoutemScreen } from '@shoutem/ui/components/Screen';
import NavBar from '../../connected/NavBar';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80, // Nav height + 10
    flexDirection: 'column',
    height: '100%',
  },
});

const Screen = props => (
  <ShoutemScreen styleName={'paper'}>
    <View style={[styles.container, ...props.style]}>
      <NavBar screenTitle={props.screenTitle} />
      {props.children}
    </View>
  </ShoutemScreen>
);

Screen.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.array,
};

Screen.defaultProps = {
  style: [],
};

export default Screen;
