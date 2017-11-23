import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@shoutem/ui/components/Button';
import { Text } from '@shoutem/ui/components/Text';
import { Screen } from '../pure/Screen';
import { TextContainer } from '../pure/TextContainer';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

const Onboard = props => (
  <Screen {...props} style={styles.screen} screenTitle={'fivethreeone'}>
    <TextContainer style={[styles.container]}>
      <Text>
        {'It looks like you\'re new to fivethreeone. Let\'s enter your weights to get started.'}
      </Text>
      <Button>
        <Text>{'Go'}</Text>
      </Button>
    </TextContainer>
  </Screen>
);

export default Onboard;
