import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Alert } from 'react-native';

const AlertButton = props => (
  <Button
    {...props}
    onPress={() => {
      Alert.alert(
        props.alertTitle,
        props.alertContent,
        props.alertOptions,
      );
    }}
  >
    {props.children}
  </Button>
);

AlertButton.propTypes = {
  children: PropTypes.node.isRequired,
  alertTitle: PropTypes.string.isRequired,
  alertContent: PropTypes.string.isRequired,
  alertOptions: PropTypes.array.isRequired,
};

export default AlertButton;
