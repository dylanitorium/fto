import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row } from '@shoutem/ui';

const WeekItem = props => (
  <Row>
    <Text numberOfLines={1}>{props.children}</Text>
  </Row>
);

WeekItem.propTypes = {
  children: PropTypes.node.isRequired,
};

WeekItem.defaultProps = {
  children: '',
};

export default WeekItem;
