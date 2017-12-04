import React from 'react';
import PropTypes from 'prop-types';
import { View, Divider } from '@shoutem/ui';
import ExerciseItem from './ExerciseItem';
import { EXERCISES } from '../../../constants';

const ExerciseList = props => (
  <View>
    <ExerciseItem to={`${props.match.url}/exercise/${EXERCISES.BENCH}`}>
      Bench
    </ExerciseItem>
    <Divider />
    <ExerciseItem to={`${props.match.url}/exercise/${EXERCISES.SQUAT}`}>
      Squat
    </ExerciseItem>
    <Divider />
    <ExerciseItem to={`${props.match.url}/exercise/${EXERCISES.OVERHEAD}`}>
      Overhead
    </ExerciseItem>
    <Divider />
    <ExerciseItem to={`${props.match.url}/exercise/${EXERCISES.DEADLIFT}`}>
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

