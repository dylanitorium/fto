import React from 'react';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { SettingsList } from '../pure/Settings';

const SettingsScreen = props => (
  <Screen {...props} screenTitle={'fivethreeone'} >
    <PaddedContainer>
      <SettingsList {...props} />
    </PaddedContainer>
  </Screen>
);


export default SettingsScreen;
