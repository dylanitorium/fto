import React from 'react';
import PropTypes from 'prop-types';
import { View, Divider } from '@shoutem/ui';
import ExerciseItem from './ExerciseItem';
import { EXERCISES } from '../../../constants';

const ExerciseList = props => (
  <View>
    <ExerciseItem exercise={EXERCISES.BENCH} to={`${props.match.url}/exercise/${EXERCISES.BENCH}`} {...props}>
      Bench
    </ExerciseItem>
    <Divider />
    <ExerciseItem exercise={EXERCISES.SQUAT} to={`${props.match.url}/exercise/${EXERCISES.SQUAT}`} {...props}>
      Squat
    </ExerciseItem>
    <Divider />
    <ExerciseItem exercise={EXERCISES.OVERHEAD} to={`${props.match.url}/exercise/${EXERCISES.OVERHEAD}`} {...props}>
      Overhead
    </ExerciseItem>
    <Divider />
    <ExerciseItem exercise={EXERCISES.DEADLIFT} to={`${props.match.url}/exercise/${EXERCISES.DEADLIFT}`} {...props}>
      Deadlift
    </ExerciseItem>
  </View>
);

ExerciseList.propTypes = {
  match: PropTypes.object.isRequired
};

ExerciseList.defaultProps = {

};

export default ExerciseList;

