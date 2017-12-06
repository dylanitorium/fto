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
        props.isCompleted
          ? (<Icon styleName="disclosure" name="right-arrow" />)
          : (<Button styleName="right-icon" icon="checkbox-on" />)
      }

    </Row>
  </TouchableOpacity>
);

ExceriseItem.propTypes = {
  children: PropTypes.node.isRequired,
  exercise: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

ExceriseItem.defaultProps = {

};

export default Linkable(ExceriseItem);
