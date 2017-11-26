import React from 'react';
import PropTypes from 'prop-types';
import { Button as DefaultButton, Icon, Text } from '@shoutem/ui';
import { LinkButton } from '../../utility';


const Button = (props) => {
  const Component = props.to ? LinkButton : DefaultButton;
  let children = (<Text>{props.children.toUpperCase()}</Text>);
  if (props.icon) {
    children = (<Icon name={props.icon} />);
  }

  return (
    <Component {...props}>
      {children}
    </Component>
  );
};

Button.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean,
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean,
  ]),
  children: PropTypes.string,
};

Button.defaultProps = {
  to: false,
  children: '',
  icon: false,
};

export default Button;

