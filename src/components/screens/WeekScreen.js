import React from 'react';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { ExerciseList } from '../pure/Exercises';
import { Button } from '../pure/Button';

const WeekScreen = props => (
  <Screen {...props} rightComponent={<Button icon="settings" to="/settings" />}>
    <PaddedContainer>
      <ExerciseList {...props} />
    </PaddedContainer>
  </Screen>
);


export default WeekScreen;
