import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { NavBar } from '../pure/Navbar';
import {titleMap} from '../../config';

const ConnectedNavBar = withRouter(connect(
  (state, ownProps) => ({
    hasHistory: (typeof ownProps.hasHistory !== 'undefined') ? ownProps.hasHistory : (ownProps.history.length > 1),
    screenTitle: titleMap[ownProps.match.path] || 'fivethreeone',
  })
)(NavBar));

export default ConnectedNavBar;
