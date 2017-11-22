import React from 'react';
import { Button } from '@shoutem/ui/components/Button';
import { Text } from '@shoutem/ui/components/Text';
import Screen from '../pure/Screen';

const Onboard = () => (
  <Screen screenTitle={'fivethreeone'}>
    <Text>{'It looks like you\'re new to fivethreeone. Let\'s enter your weights to get started.'}</Text>
    <Button><Text>{'Go'}</Text></Button>
  </Screen>
);

export default Onboard;
