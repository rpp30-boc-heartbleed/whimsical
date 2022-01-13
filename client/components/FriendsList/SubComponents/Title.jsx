import React from 'react';
import { useRecoilState } from 'recoil';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import friendsListState from '../../../state/atoms/friendsList';

const Title = ({ style }) => {
  const [friendsList, setFriendsList] = useRecoilState(friendsListState);
  return (
    <View style={style}>
      <Text style={styles.heading}>Neighbors</Text>
      <Text style={styles.number}>{friendsList.length} friends</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: '#fff',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#90CCF4',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: '5%',
    color: '#0782F9',
    textAlign: 'center',
  },
});

export default Title;
