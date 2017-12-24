import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row, Icon } from '@shoutem/ui';
import { TouchableOpacity } from 'react-native';
import { Linkable } from '../../utility';
import { Button } from '../Button';

const WeekItem = props => (
  <TouchableOpacity {...props}>
    <Row>
      <Text>{props.children}</Text>
      {
        props.data.weekCompleted
          ? (<Button styleName="right-icon" icon="checkbox-on" />)
          : (<Icon styleName="disclosure" name="right-arrow" />)
      }
    </Row>
  </TouchableOpacity>
);

WeekItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

WeekItem.defaultProps = {

};

export default Linkable(WeekItem);
