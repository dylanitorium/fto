import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';
import { Linkable } from '../../utility';


const ExceriseItem = props => (
  <TouchableOpacity {...props}>
    <Row>
      <Text>{props.children}</Text>
      <Icon styleName="disclosure" name="right-arrow" />
    </Row>
  </TouchableOpacity>
);

ExceriseItem.propTypes = {
  children: PropTypes.node.isRequired,
};

ExceriseItem.defaultProps = {

};

export default Linkable(ExceriseItem);
