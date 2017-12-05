import React from 'react';
import PropTypes from 'prop-types';
import { View, Title, Divider } from '@shoutem/ui';
import SetItem from './SetItem';
import { SETS } from '../../../constants';


const SetList = props => (
  <View>
    <Title> Warm Up Sets </Title>
    <SetItem {...props} set={SETS.WARM_UP_ONE} data={props.sets[SETS.WARM_UP_ONE]} />
    <Divider />
    <SetItem {...props} set={SETS.WARM_UP_TWO} data={props.sets[SETS.WARM_UP_TWO]} />
    <Divider />
    <SetItem {...props} set={SETS.WARM_UP_THREE} data={props.sets[SETS.WARM_UP_THREE]} />
    <Divider />
    <Title> Working Sets </Title>
    <SetItem {...props} set={SETS.ONE} data={props.sets[SETS.ONE]} />
    <Divider />
    <SetItem {...props} set={SETS.TWO} data={props.sets[SETS.TWO]} />
    <Divider />
    <SetItem {...props} set={SETS.THREE} data={props.sets[SETS.THREE]} />
    <Divider />
  </View>
);

SetList.propTypes = {
  sets: PropTypes.object.isRequired,
};

SetList.defaultProps = {

};

export default SetList;

