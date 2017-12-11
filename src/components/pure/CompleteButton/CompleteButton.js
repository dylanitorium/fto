import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

const CompleteButton = props => (
  props.canComplete && !props.completed
    ? (
      <Button styleName="secondary" onPress={() => props.onCompletePress(...props.completeContext)}>
        { props.children }
      </Button>
    )
    : null
);

CompleteButton.propTypes = {
  children: PropTypes.node.isRequired,
  canComplete: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  onCompletePress: PropTypes.func.isRequired,
  completeContext: PropTypes.array.isRequired,
};

export default CompleteButton;
