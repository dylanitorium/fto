import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@shoutem/ui';
import { View } from 'react-native';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { WeekList } from '../pure/Weeks';
import { Button } from '../pure/Button';
import { AlertButton } from '../pure/AlertButton';
import { HistoryList } from '../pure/History';


const Dashboard = props => (
  <Screen {...props} rightComponent={<Button icon="settings" to="/settings" />}>
    <PaddedContainer>
      {
        props.cycleIsActive
          ? (
            <View>
              <WeekList {...props} />
              <Divider />
              <AlertButton
                styleName="secondary"
                alertTitle={'Cancel Cycle'}
                alertContent={'Are you sure you want to cancel your current cycle? All your data will be lost.'}
                alertOptions={[
                  { text: 'Yes', style: 'destructive', onPress: () => props.onCancelPress() },
                  { text: 'No', style: 'cancel' }
                ]}
              >Cancel Cycle
              </AlertButton>
            </View>
          )
          : (
            <Button
              styleName="secondary"
              onPress={() => {
                props.onStartPress(props.settings);
              }}
            >Start Cycle
            </Button>
          )
      }
      <Divider />
      {
        props.history.length ? <HistoryList {...props} /> : <View />
      }
    </PaddedContainer>
  </Screen>
);

Dashboard.propTypes = {
  cycleIsActive: PropTypes.bool.isRequired,
  settings: PropTypes.object.isRequired,
  onStartPress: PropTypes.func.isRequired,
  onCancelPress: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Dashboard;
