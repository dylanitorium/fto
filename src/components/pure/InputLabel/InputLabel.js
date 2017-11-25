import React from 'react';
import PropTypes from 'prop-types';
import { Subtitle } from '@shoutem/ui';

const InputLabel = props => (
  <Subtitle style={{ marginBottom: 10 }}>
    {props.children}
  </Subtitle>
);

InputLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputLabel;
