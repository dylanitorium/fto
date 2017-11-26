import React from 'react';
import { Text } from '@shoutem/ui';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';


const Dashboard = props => (
  <Screen {...props} screenTitle={'fivethreeone'}>
    <PaddedContainer>
      <Text>
        This be the dashboard
      </Text>
    </PaddedContainer>
  </Screen>
);

export default Dashboard;
