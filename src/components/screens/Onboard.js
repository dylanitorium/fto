import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Divider } from '@shoutem/ui';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { LinkButton } from '../utility';


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
      <LinkButton to={'/onboard/bench'} styleName="secondary">
        <Text>{'Go'}</Text>
      </LinkButton>
    </PaddedContainer>
  </Screen>
);

export default Onboard;
