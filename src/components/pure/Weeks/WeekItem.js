import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row, Icon } from '@shoutem/ui';
import { TouchableOpacity } from 'react-native';
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

const WeekItem = props => (
  <TouchableOpacity {...props}>
    <Row>
      <Text>{props.children}</Text>
      {
        props.data.weekCompleted
          ? (<Icon styleName="disclosure" style={getStyles(props.completed)} name="checkbox-on" />)
          : (<Icon styleName="disclosure" name="right-arrow" />)
      }
    </Row>
  </TouchableOpacity>
);

WeekItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  completed: PropTypes.bool.isRequired,
};

WeekItem.defaultProps = {

};

export default Linkable(WeekItem);
