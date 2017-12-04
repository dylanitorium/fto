import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row } from '@shoutem/ui';

const SetItem = props => (
  <Row>
    <Text>{props.children}</Text>
  </Row>
);

SetItem.propTypes = {
  children: PropTypes.node.isRequired,
};

SetItem.defaultProps = {

};

export default SetItem;
