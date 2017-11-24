import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Divider } from '@shoutem/ui';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';


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
      <Button styleName="secondary">
        <Text>{'Go'}</Text>
      </Button>
    </PaddedContainer>
  </Screen>
);

export default Onboard;
