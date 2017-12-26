import React from 'react';
import PropTypes from 'prop-types';
import { View, Divider } from '@shoutem/ui';
import ExerciseItem from './ExerciseItem';
import { EXERCISES } from '../../../constants';
import { CompleteButton } from '../CompleteButton';

const ExerciseList = props => (
  <View>
    <ExerciseItem {...props} data={props.exercises[EXERCISES.BENCH]} to={`${props.match.url}/exercise/${EXERCISES.BENCH}`} completed={props.completed}>
      Bench
    </ExerciseItem>
    <Divider />
    <ExerciseItem {...props} data={props.exercises[EXERCISES.SQUAT]} to={`${props.match.url}/exercise/${EXERCISES.SQUAT}`} completed={props.completed}>
      Squat
    </ExerciseItem>
    <Divider />
    <ExerciseItem {...props} data={props.exercises[EXERCISES.OVERHEAD]} to={`${props.match.url}/exercise/${EXERCISES.OVERHEAD}`} completed={props.completed}>
      Overhead
    </ExerciseItem>
    <Divider />
    <ExerciseItem {...props} data={props.exercises[EXERCISES.DEADLIFT]} to={`${props.match.url}/exercise/${EXERCISES.DEADLIFT}`} completed={props.completed}>
      Deadlift
    </ExerciseItem>
    <Divider />
    <CompleteButton {...props}>
      Complete Week
    </CompleteButton>
  </View>
);

ExerciseList.propTypes = {
  match: PropTypes.object.isRequired,
  exercises: PropTypes.object.isRequired,
  completed: PropTypes.bool.isRequired,
};

ExerciseList.defaultProps = {

};

export default ExerciseList;
