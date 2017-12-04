import React from 'react';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { SetList } from '../pure/Sets';

const ExerciseScreen = props => (
  <Screen {...props} screenTitle={'fivethreeone'}>
    <PaddedContainer>
      <SetList {...props} />
    </PaddedContainer>
  </Screen>
);


export default ExerciseScreen;
