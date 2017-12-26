import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';
import { Linkable } from '../../utility';


const HistoryItem = props => (
  <TouchableOpacity {...props}>
    <Row >
      <Text>
        Ended: {moment(props.cycle.endDate).format('DD-MM-YYYY')}
      </Text>
      <Icon styleName="disclosure" name="right-arrow" />
    </Row>
  </TouchableOpacity>
);

HistoryItem.propTypes = {
  cycle: PropTypes.object.isRequired,
};

export default Linkable(HistoryItem);
