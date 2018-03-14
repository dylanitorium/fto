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

const OnboardMeasurementSystem = props => (
  <Screen {...props} style={[styles.screen]} screenTitle={'fivethreeone'}>
    <PaddedContainer>
      <Text>
        {'First, select whether you would like to use metric or imperial units'}
      </Text>
      <Divider />
      <Divider />
      <Button onPress={props.selectMetric} styleName={ props.metricSelected ? 'secondary' : undefined }> Metric </Button>
      <Divider />
      <Button onPress={props.selectImperial} styleName={ props.imperialSelected ? 'secondary' : undefined }> Imperial </Button>
      <Divider />
      <Divider />
      <Button to={'/onboard/bench'} styleName="secondary">
        Next
      </Button>
    </PaddedContainer>
  </Screen>
);

export default OnboardMeasurementSystem;
