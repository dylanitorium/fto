import React from 'react';
import { connect } from 'react-redux';
import Onboard from '../../screens/Onboard';


const ConnectOnboard = () => (
  <Onboard />
);

export default connect()(ConnectOnboard);
