import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';
import friendsListState from '../../state/atoms/friendsList';

const DashboardBody = () => {
  const [friendsList, setFriendsList] = useRecoilState(friendsListState);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.body}>a freinds post here</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.body}>a friends post here</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.body}>a friends post here</Text>
      </View>
      {/* <FlatList
        data={friendsList}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(friend) => friend.id}
        keyboardShouldPersistTaps="handled"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    paddingLeft: 110,
    // paddingRight: 110,
    paddingTop: 60,
    paddingBottom: 60,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
  },
});

export default DashboardBody;
