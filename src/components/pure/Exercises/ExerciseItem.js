import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row } from '@shoutem/ui';
import { Button } from '../Button';
import { Linkable } from '../../utility';


const ExceriseItem = props => (
  <TouchableOpacity {...props}>
    <Row>
      <Text>{props.children}</Text>
      <Button styleName={'right-icon'} icon={'right-arrow'} />
    </Row>
  </TouchableOpacity>
);

ExceriseItem.propTypes = {
  children: PropTypes.node.isRequired,
};

ExceriseItem.defaultProps = {

};

export default Linkable(ExceriseItem);
