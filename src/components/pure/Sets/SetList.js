import React from 'react';
import PropTypes from 'prop-types';
import { View, Title, Divider } from '@shoutem/ui';
import SetItem from './SetItem';
import { SETS } from '../../../constants';
import { Button } from '../Button';
import enumerize from '../../../lib/enumerize';

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
    <Button
      onPress={() => props.onCompletePress(props.match.params.week, props.match.params.exercise)}
      disabled={!enumerize(props.sets).allChildrenMatch({ setCompleted: true })}
    >
      Complete Exercise
    </Button>
  </View>

);

SetList.propTypes = {
  sets: PropTypes.object.isRequired,
  onCompletePress: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

SetList.defaultProps = {

};

export default SetList;

