import React from 'react';
import PropTypes from 'prop-types';
import { View, Title, Divider } from '@shoutem/ui';
import SetItem from './SetItem';
import { SETS } from '../../../constants';
import { Button } from '../Button';


const SetList = props => (
  <View>
    <Title> Warm Up Sets </Title>
    <SetItem
      {...props}
      set={SETS.WARM_UP_ONE}
      data={props.sets[SETS.WARM_UP_ONE]}
      disabled={props.exerciseCompleted}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.WARM_UP_TWO}
      data={props.sets[SETS.WARM_UP_TWO]}
      disabled={props.exerciseCompleted}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.WARM_UP_THREE}
      data={props.sets[SETS.WARM_UP_THREE]}
      disabled={props.exerciseCompleted}
    />
    <Divider />
    <Title> Working Sets </Title>
    <SetItem
      {...props}
      set={SETS.ONE}
      data={props.sets[SETS.ONE]}
      disabled={props.exerciseCompleted}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.TWO}
      data={props.sets[SETS.TWO]}
      disabled={props.exerciseCompleted}
    />
    <Divider />
    <SetItem
      {...props}
      set={SETS.THREE}
      data={props.sets[SETS.THREE]}
      disabled={props.exerciseCompleted}
    />
    <Divider />
    {
      props.canCompleteExercise && !props.exerciseCompleted
        ? (
          <Button styleName="secondary" onPress={() => {props.onCompletePress(props.match.params.week, props.match.params.exercise)}}>
            Complete Exercise
          </Button>
        )
        : null
    }

  </View>

);

SetList.propTypes = {
  sets: PropTypes.object.isRequired,
  onCompletePress: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  canCompleteExercise: PropTypes.bool.isRequired,
  exerciseCompleted: PropTypes.bool.isRequired,
};

SetList.defaultProps = {

};

export default SetList;

