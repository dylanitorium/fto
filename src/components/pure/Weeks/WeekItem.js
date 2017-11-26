import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row } from '@shoutem/ui';
import { Link } from 'react-router-native';
import { Button } from '../Button';

const WeekItem = props => (
  <Link to={props.to}>
    <Row>
      <Text>{props.children}</Text>
      <Button styleName={'right-icon'} icon={'right-arrow'} />
    </Row>
  </Link>
);

WeekItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

WeekItem.defaultProps = {

};

export default WeekItem;
