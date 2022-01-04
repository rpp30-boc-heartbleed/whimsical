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
import mockErrandState from '../../state/atoms/errands';

const DashboardBody = () => {
  const [errandList] = useRecoilState(mockErrandState);
  console.log(errandList, 'el');

  return (
    <View>
      {/* <View style={styles.container}>
        <Text style={styles.body}>a friends post here</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.body}>a friends post here</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.body}>a friends post here</Text>
      </View> */}
      <FlatList
        data={errandList}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>{item.errandName} {item.time}</Text>
            </View>
          );
        }}
        keyExtractor={(friend) => friend.id}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    paddingLeft: 110,
    paddingRight: 110,
    paddingTop: 60,
    paddingBottom: 60,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default DashboardBody;
