import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';
import { Linkable } from '../../utility';

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

const ExceriseItem = props => (
  <TouchableOpacity {...props}>
    <Row>
      <Text>{props.children}</Text>
      {
        props.data.exerciseCompleted
          ? (<Icon styleName="disclosure" style={getStyles(props.completed)} name="checkbox-on" />)
          : (<Icon styleName="disclosure" name="right-arrow" />)
      }
    </Row>
  </TouchableOpacity>
);

ExceriseItem.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  completed: PropTypes.bool.isRequired,
};

ExceriseItem.defaultProps = {
  isCompleted: false,
};

export default Linkable(ExceriseItem);
