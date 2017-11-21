import React from 'react';
import { Screen } from '@shoutem/ui/components/Screen';
import { Spinner } from '@shoutem/ui/components/Spinner';

const Loader = () => (
  <Screen theme={'paper'}>
    <Spinner size={'large'} />
  </Screen>
);

export default Loader;
