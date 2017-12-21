import React from 'react';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { SetList } from '../pure/Sets';
import { Button } from '../pure/Button';

const ExerciseScreen = props => (
  <Screen {...props} screenTitle={'fivethreeone'} rightComponent={<Button icon="settings" onPress={() => {}} />}>
    <PaddedContainer>
      <SetList {...props} />
    </PaddedContainer>
  </Screen>
);


export default ExerciseScreen;
