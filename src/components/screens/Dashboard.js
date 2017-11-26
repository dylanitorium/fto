import React from 'react';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { WeekList } from '../pure/Weeks';


const Dashboard = props => (
  <Screen {...props} screenTitle={'fivethreeone'}>
    <PaddedContainer>
      <WeekList />
    </PaddedContainer>
  </Screen>
);

export default Dashboard;
