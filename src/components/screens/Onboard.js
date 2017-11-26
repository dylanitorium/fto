import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Divider } from '@shoutem/ui';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { Button } from '../pure/Button';


const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
  },
  text: {
    marginBottom: 5,
  },
});

const Onboard = props => (
  <Screen {...props} style={[styles.screen]} screenTitle={'fivethreeone'}>
    <PaddedContainer>
      <Text>
        {'It looks like you\'re new to fivethreeone. Let\'s enter your weights to get started.'}
      </Text>
      <Divider />
      <Button to={'/onboard/bench'} styleName="secondary">
        Go
      </Button>
    </PaddedContainer>
  </Screen>
);

export default Onboard;
