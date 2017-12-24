import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';
import { Linkable } from '../../utility';


const HistoryItem = props => (
  <TouchableOpacity {...props}>
    <Row >
      <Text>
        {props.cycle.startDate}
      </Text>
      <Icon styleName="disclosure" name="right-arrow" />
    </Row>
  </TouchableOpacity>
);

HistoryItem.propTypes = {
  cycle: PropTypes.object.isRequired,
};

export default Linkable(HistoryItem);
