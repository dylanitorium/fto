import React from 'react';
import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';


const ConnectOnboardSquat = () => (
  <OnboardSettings exercise={EXERCISES.SQUAT} next={`/onboard/${EXERCISES.OVERHEAD}`} />
);

export default connect()(ConnectOnboardSquat);
