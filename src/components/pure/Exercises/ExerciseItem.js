import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';
import { Linkable } from '../../utility';
import { Button } from '../Button';


const ExceriseItem = props => (
  <TouchableOpacity {...props}>
    <Row>
      <Text>{props.children}</Text>
      {
        props.data.exerciseCompleted
          ? (<Button styleName="right-icon" icon="checkbox-on" />)
          : (<Icon styleName="disclosure" name="right-arrow" />)
      }
    </Row>
  </TouchableOpacity>
);

ExceriseItem.propTypes = {
  children: PropTypes.node.isRequired,
  exercise: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

ExceriseItem.defaultProps = {
  isCompleted: false,
};

export default Linkable(ExceriseItem);
