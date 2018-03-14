import React from 'react';
import PropTypes from 'prop-types';
import { View, Divider, Caption } from '@shoutem/ui';
import moment from 'moment';
import HistoryItem from './HistoryItem';


const HistoryList = (props) => {
  const items = props.history.getValues().sort((a, b) => moment(a.finishDate).unix() < moment(b.finishDate).unix()).map(cycle => <HistoryItem key={cycle.cycleId} cycle={cycle} to={`/history/${cycle.cycleId}`} />);

  return (
    <View>
      <Divider styleName="section-header">
        <Caption>PAST CYCLES</Caption>
      </Divider>
      {items}
    </View>
  );
};

HistoryList.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HistoryList;
