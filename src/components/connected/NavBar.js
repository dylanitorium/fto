import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { NavBar } from '../pure/Navbar';


const ConnectedNavBar = withRouter(connect(
  (state, ownProps) => ({
    hasHistory: (typeof ownProps.hasHistory !== 'undefined') ? ownProps.hasHistory : (ownProps.history.length > 0),
  })
)(NavBar));

export default ConnectedNavBar;
