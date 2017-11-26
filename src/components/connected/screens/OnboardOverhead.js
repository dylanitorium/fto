import React from 'react';
import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';


const ConnectOnboardOverhead = () => (
  <OnboardSettings exercise={EXERCISES.OVERHEAD} next={`/onboard/${EXERCISES.DEADLIFT}`} />
);

export default connect()(ConnectOnboardOverhead);
