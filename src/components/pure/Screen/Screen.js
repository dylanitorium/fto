import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Screen as ShoutemScreen } from '@shoutem/ui/components/Screen';
import NavBar from '../../connected/NavBar';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    // flexDirection: 'column',
  },
  content: {
    height: '100%',
    zIndex: -1,
  },
  inner: {
    paddingTop: 20,
    paddingBottom: 60,
  }
});

const Screen = props => (
  <ShoutemScreen
    styleName={'paper'}
    style={{
      backgroundColor: '#eeeeee',
    }}
  >
    <View style={[styles.container, ...props.style]}>
      <NavBar hasHistory={props.hasHistory} rightComponent={props.rightComponent} />
      <ScrollView style={[styles.content]}>
        <View style={[styles.inner]}>
          {props.children}
        </View>
      </ScrollView>
    </View>
  </ShoutemScreen>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.array,
  hasHistory: PropTypes.bool,
  rightComponent: PropTypes.node,
};

Screen.defaultProps = {
  style: [],
  hasHistory: true,
  rightComponent: <View />
};

export default Screen;
