import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  View,
  Switch,
  StyleSheet,
} from 'react-native';

// State
import friendsOnErrandState from '../../../state/atoms/friendsOnErrand';

const Toggle = ({ style }) => {
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
