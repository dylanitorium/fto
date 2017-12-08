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
    // paddingTop: 20,
    // paddingVertical: 90, // Nav height + 1
    backgroundColor: 'black',
    height: 300,
    zIndex: -1,
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
      <NavBar hasHistory={props.hasHistory} screenTitle={props.screenTitle} />
      <ScrollView style={[styles.content]}>
        {props.children}
      </ScrollView>
    </View>
  </ShoutemScreen>
);

Screen.propTypes = {
  screenTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.array,
  hasHistory: PropTypes.bool,
};

Screen.defaultProps = {
  screenTitle: '',
  style: [],
  hasHistory: true,
};

export default Screen;
