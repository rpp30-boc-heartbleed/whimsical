import React from 'react';
import { useRecoilState } from 'recoil';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import friendsListState from '../../../state/atoms/friendsList';
import addFriendState from '../../../state/atoms/addFriends';

const Title = ({ style }) => {
  const [friendsList, setFriendsList] = useRecoilState(friendsListState);
  const [listType, setListType] = useRecoilState(addFriendState);

  return (
    <View style={style}>
      {(!listType)
        ? (
          <>
            <Text style={styles.heading}>Friends List</Text>
            <Text style={styles.number}>{friendsList.length} friends</Text>
          </>
        )
        : (
          <Text style={styles.heading}>Search</Text>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  number: {
    fontSize: 12,
    paddingBottom: '5%',
    color: '#0782F9',
    textAlign: 'center',
  },
});

export default Title;
