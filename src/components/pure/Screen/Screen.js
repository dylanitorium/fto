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
      <NavBar hasHistory={props.hasHistory} screenTitle={props.screenTitle} />
      <ScrollView style={[styles.content]}>
        <View style={[styles.inner]}>
          {props.children}
        </View>
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
