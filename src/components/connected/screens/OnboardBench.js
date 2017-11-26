import React from 'react';
import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';


const ConnectOnboardBench = () => (
  <OnboardSettings exercise={EXERCISES.BENCH} next={`/onboard/${EXERCISES.SQUAT}`} />
);

export default connect()(ConnectOnboardBench);
