import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Row, Icon } from '@shoutem/ui';
import { Linkable } from '../../utility';


const SettingsItem = props => (
  <TouchableOpacity {...props}>
    <Row >
      <Text>
        {props.children}
      </Text>
      <Icon styleName="disclosure" name="right-arrow" />
    </Row>
  </TouchableOpacity>
);

SettingsItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Linkable(SettingsItem);
