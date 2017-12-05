import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row } from '@shoutem/ui';
import { Button } from '../Button';


const SetItem = props => (
  <TouchableOpacity onPress={() => props.onSetItemPress(props.match.params.week, props.match.params.exercise, props.set)}>
    <Row>
      <Text>{props.data.reps} x {props.data.weight}kg</Text>
      <Button styleName={'right-icon'} icon={props.data.setCompleted ? 'checkbox-on' : 'checkbox-off'} />
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
