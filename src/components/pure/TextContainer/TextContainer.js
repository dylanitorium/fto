import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});

const TextContainer = props => (
  <View {...props} style={[styles.container, ...props.style]} >{props.children}</View>
);

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextContainer;

