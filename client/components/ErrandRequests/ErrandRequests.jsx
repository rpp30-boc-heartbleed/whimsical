import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRecoilValue } from 'recoil';
import filteredErrandsState from '../../state/selectors/filterErrandsByRequestor';
import { errandState, refreshErrandsState } from '../../state/atoms/errands';

const ErrandRequests = ({ navigation }) => {
  const errands = useRecoilValue(filteredErrandsState);
  const refresh = useRecoilValue(refreshErrandsState);
  console.log('========================= errands length:', errands.length, '===========================================');

  return (
    <View style={styles.container}>
      <FlatList
        data={errands}
        keyExtractor={(item, index) => index}
        extraData={errands}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.friend} onPress={() => navigation.navigate('ErrandTracker', { errand: item })}>
              <View style={styles.text}>
                <Text>
                  {item.errandName}
                </Text>
                <Text>{item.id}{item.status === 'Delivered' && <Icon size={25} name='check' />}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ErrandRequests;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
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
