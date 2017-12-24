import React from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { WeekList } from '../pure/Weeks';
import { Button } from '../pure/Button';

const ArchivedCycle = props => (
  <Screen {...props} rightComponent={<Button icon="settings" to="/settings" />}>
    <PaddedContainer>
      <WeekList {...props} />
    </PaddedContainer>
  </Screen>
);

ArchivedCycle.propTypes = {
  match: PropTypes.object.isRequired,
};


export default ArchivedCycle;
