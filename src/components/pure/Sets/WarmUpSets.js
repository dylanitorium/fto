import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SetItem from './SetItem';
import { WARM_UP_REPS } from '../../../constants';

const WarmUpSets = () => (
  <View>
    {
      WARM_UP_REPS.map(set => (<SetItem>{set} x 999kg</SetItem>))
    }
  </View>
);

WarmUpSets.propTypes = {

};

WarmUpSets.defaultProps = {

};

export default WarmUpSets;
