import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';

const getStyles = completed => (
  completed
    ? {
      opacity: 1,
      color: '#43A047',
    }
    : {
      opacity: 1,
    }
);

const SetItem = props => (
  <TouchableOpacity
    {...props}
    onPress={() => props.onSetItemPress(
      props.match.params.week,
      props.match.params.exercise, props.set
    )}
  >
    <Row>
      <Text>{props.data.reps} x {props.data.weight}{props.unit}</Text>
      <Icon styleName={'disclosure'} style={getStyles(props.disabled)} name={props.data.setCompleted ? 'checkbox-on' : 'checkbox-off'} />
    </Row>
  </TouchableOpacity>
);

SetItem.propTypes = {
  set: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onSetItemPress: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
};

SetItem.defaultProps = {

};

export default SetItem;
