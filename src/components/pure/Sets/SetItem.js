import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';

const SetItem = props => (
  <TouchableOpacity
    {...props}
    onPress={() => props.onSetItemPress(
      props.match.params.week,
      props.match.params.exercise, props.set
    )}
  >
    <Row>
      <Text>{props.data.reps} x {props.data.weight}kg</Text>
      {/* This is a hack to override the style */}
      <Icon styleName={'disclosure'} style={{ opacity: 1 }} name={props.data.setCompleted ? 'checkbox-on' : 'checkbox-off'} />
    </Row>
  </TouchableOpacity>
);

SetItem.propTypes = {
  set: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onSetItemPress: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

SetItem.defaultProps = {

};

export default SetItem;
