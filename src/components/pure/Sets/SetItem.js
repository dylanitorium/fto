import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row } from '@shoutem/ui';
import { Link } from 'react-router-native';
import { Button } from '../Button';

const SetItem = props => (
  <Link to={props.to}>
    <Row>
      <Text>{props.children}</Text>
    </Row>
  </Link>
);

SetItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

SetItem.defaultProps = {

};

export default SetItem;
