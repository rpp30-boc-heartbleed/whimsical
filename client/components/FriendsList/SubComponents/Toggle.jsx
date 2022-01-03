import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  View,
  Switch,
  StyleSheet,
} from 'react-native';

// State
import friendsOnErrandState from '../../../state/atoms/friendsOnErrand';
// import friendsByNameState from '../../state/atoms/friendsByName';
// import filteredByNameSelector from '../../state/selectors/filterFriendsByName';
// import friendsListQuery from '../../state/selectors/friendsListQuery';

const Toggle = ({ style }) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  const [statusFilter, setStatusFilter] = useRecoilState(friendsOnErrandState);

  const toggleSwitch = () => {
    setStatusFilter(!statusFilter);
  };

  return (
    <View style={style}>
      <Switch
        trackColor={{ true: '#0782F9' }}
        onValueChange={toggleSwitch}
        value={statusFilter}
      />
    </View>
  );
};

export default Toggle;
