import React from 'react';
import { Icon } from '@shoutem/ui/components/Icon/index';
import { LinkButton } from '../../utility';

const BackButton = props => (
  <LinkButton to={'..'} {...props}>
    <Icon name={'back'} />
  </LinkButton>
);

export default BackButton;

