import React from 'react';
import PropTypes from 'prop-types';
import { Screen } from '../pure/Screen';
import { PaddedContainer } from '../pure/PaddedContainer';
import { WeekList } from '../pure/Weeks';
import Button from '../pure/Button/Button';


const Dashboard = props => (
  <Screen {...props} screenTitle={'fivethreeone'} rightComponent={<Button icon="settings" to="/settings"/>}>
    <PaddedContainer>
      {
        props.cycleIsActive
          ? (<WeekList {...props} />)
          : (
            <Button
              styleName="secondary"
              onPress={() => {
                props.onButtonPress(props.settings);
              }}
            >Start Cycle
          </Button>
          )
      }
    </PaddedContainer>
  </Screen>
);

Dashboard.propTypes = {
  cycleIsActive: PropTypes.bool.isRequired,
  settings: PropTypes.object.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default Dashboard;
