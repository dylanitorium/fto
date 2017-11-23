import React from 'react';
import { Link } from 'react-router-native';
import { Button } from '@shoutem/ui';
import { Icon } from '@shoutem/ui/components/Icon/index';

const BackButton = props => (
  <Link to={'..'} {...props}>
    <Button>
      <Icon name={'back'} />
    </Button>
  </Link>
);

export default BackButton;

