import React from 'react';
import PropTypes from 'prop-types';
import { View, Divider } from '@shoutem/ui';
import SetItem from './SetItem';
import { CompleteButton } from '../CompleteButton';
import { SETS } from '../../../constants';

const SetList = props => (
  <View>
    <SetItem
      {...props}
      set={SETS.WARM_UP_ONE}
      data={props.sets[SETS.WARM_UP_ONE]}
      disabled={props.completed}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.WARM_UP_TWO}
      data={props.sets[SETS.WARM_UP_TWO]}
      disabled={props.completed}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.WARM_UP_THREE}
      data={props.sets[SETS.WARM_UP_THREE]}
      disabled={props.completed}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.ONE}
      data={props.sets[SETS.ONE]}
      disabled={props.completed}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.TWO}
      data={props.sets[SETS.TWO]}
      disabled={props.completed}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.THREE}
      data={props.sets[SETS.THREE]}
      disabled={props.completed}
    />
    <Divider />
    <CompleteButton {...props}>
      Complete Exercise
    </CompleteButton>
  </View>

);

SetList.propTypes = {
  sets: PropTypes.object.isRequired,
  onCompletePress: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  completed: PropTypes.bool.isRequired,
};

SetList.defaultProps = {

};

export default SetList;

