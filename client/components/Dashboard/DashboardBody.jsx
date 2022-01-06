import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import {
  View, Text, StyleSheet, TextInput, StatusBar, Button, FlatList, Image, Avatar,
} from 'react-native';
import errandState from '../../state/atoms/errands';

const DashboardBody = ({ navigation }) => {
  const [errandsList] = useRecoilState(errandState);
  let newDataFromMongo = [];

  axios
    .get('http://localhost:3000/getErrandData')
    .then((data) => { newDataFromMongo = data.data; })
    .catch((err) => console.log('error', err));

  console.log(newDataFromMongo);
  return (
    <View>
      <FlatList
        style={styles.container0}
        data={newDataFromMongo}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.container2}>
              <View style={styles.container3}>
                <Image
                  source={{ uri: item.userAvatar }}
                  style={styles.avatar}
                />
                <View style={styles.container4}>
                  <View style={styles.container5}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.timeOfPost}>minutes ago posted</Text>
                  </View>

                  <View style={styles.container6}>
                    <Text style={[styles.cont6, styles.store]}>{item.storeName}</Text>
                    <Text style={[styles.cont6, styles.breakbar]}>|</Text>
                    <Text style={[styles.cont6, styles.errandname]}>{item.errandName}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.container7}>
                <Text style={styles.cont7}>Address: {item.storeAddress.streetName}</Text>
                <Text style={styles.cont7}>ETA: {item.storeETA}</Text>
              </View>

              <View style={styles.buttons}>
                <Text style={styles.clickable}>LIKE</Text>
                <Text style={styles.clickable}>Comment</Text>
                <Text style={styles.clickable}>Status</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container0: {
    height: 610,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#0782F9',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 18,
    width: 60,
    resizeMode: 'contain',
  },
  container4: {
    flex: 1,
    flexDirection: 'column',
  },
  minutesago: {
    fontSize: 10,
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cont6: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  store: {
    marginLeft: -20,
    paddingTop: 13,
  },
  errandname: {
    paddingTop: 13,
  },
  breakbar: {
    fontWeight: '200',
    marginHorizontal: 10,
    fontSize: 35,
  },
  container7: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  cont7: {
    fontSize: 13,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  clickable: {
    fontSize: 10,
    color: 'gray',
    marginTop: 5,
  },
});

export default DashboardBody;
