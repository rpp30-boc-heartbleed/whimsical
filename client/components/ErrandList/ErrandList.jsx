import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import filteredErrandsState from '../../state/selectors/filterErrandsByRequestor';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandList = ({ navigation }) => {
  const errands = useRecoilValue(filteredErrandsState);

  return (
    <View style={styles.container}>
      <FlatList
        data={errands}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.friend} onPress={() => navigation.navigate('ErrandTracker')}>
              <View style={styles.text}>
                <Text>
                  {item.errandName}
                </Text>
                <Text>{item.id}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ErrandList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  friend: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    height: 80,
    marginTop: 15,
  },
  avatar: {
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
  },
  text: {
    flex: 4,
    // flexDirection: 'row',
    fontSize: 14,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
    padding: 10,
  },
  star: {
    width: 15,
    height: 15,
  },
});

// {
//   id: 1,
//     timeOfPost: '3:30pm',
//       errandName: 'Impromptu Bagel Run',
//         eta: 0,
//           addressName: 'Big Apple Bagels',
//             address: {
//     street: '4408 W Main St',
//       city: 'Kalamazoo',
//         state: 'MI',
//           zip: '49006',
//     },
//   gps: {
//     latitude: 42.2966481,
//       longitude: -85.6436558,
//     },
//   requestor: testUser,
//     errandRunner: {
//     avatar: 'https://via.placeholder.com/50',
//       name: 'aaron',
//         gps: {
//       latitude: 42.2966481,
//         longitude: -85.6436558,
//       },
//     starRating: 53,
//     },
//   status: 'Pending',
//   },