import React from 'react';
import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';


const ConnectOnboardDeadlift = () => (
  <OnboardSettings exercise={EXERCISES.DEADLIFT} next={'/'} />
);

export default connect()(ConnectOnboardDeadlift);
