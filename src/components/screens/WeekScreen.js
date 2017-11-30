import React from 'react';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { ExerciseList } from '../pure/Exercises';



const WeekScreen = props => (
  <Screen {...props} screenTitle={'fivethreeone'}>
    <PaddedContainer>
      <ExerciseList {...props} />
    </PaddedContainer>
  </Screen>
);


export default WeekScreen;
