import React from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { SetList } from '../pure/Sets';
import { Button } from '../pure/Button';

const ExerciseScreen = props => (
  <Screen {...props} rightComponent={<Button icon="settings" to="/settings" />}>
    <PaddedContainer>
      <SetList {...props} />
    </PaddedContainer>
  </Screen>
);

ExerciseScreen.propTypes = {
  match: PropTypes.object.isRequired,
};


export default ExerciseScreen;
