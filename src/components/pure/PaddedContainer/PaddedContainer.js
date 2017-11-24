import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});

const PaddedContainer = props => (
  <View {...props} style={[styles.container, ...props.style]} >{props.children}</View>
);

PaddedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.array.isRequired,
};

PaddedContainer.defaultProps = {
  style: [],
};

export default PaddedContainer;

