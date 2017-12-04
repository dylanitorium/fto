import React from 'react';
import PropTypes from 'prop-types';
import { Text, Row } from '@shoutem/ui';
import { TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Linkable } from '../../utility';

const WeekItem = props => (
  <TouchableOpacity {...props}>
    <Row>
      <Text>{props.children}</Text>
      <Button styleName={'right-icon'} icon={'right-arrow'} />
    </Row>
  </TouchableOpacity>
);

WeekItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

WeekItem.defaultProps = {

};

export default Linkable(WeekItem);
