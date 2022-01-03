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
      <Text style={styles.heading}>Buddies</Text>
      <Text style={styles.number}>{friendsList.length} friends</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  number: {
    fontSize: 12,
    paddingBottom: '5%',
    color: '#0782F9',
    textAlign: 'center',
  },
});

export default Title;
