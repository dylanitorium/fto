import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row } from '@shoutem/ui';

const SetItem = props => (
  <Row>
    <Text>{props.set.reps} x {props.set.weight}kg</Text>
  </Row>
);

SetItem.propTypes = {
  set: PropTypes.object.isRequired,
};

SetItem.defaultProps = {

};

export default SetItem;
