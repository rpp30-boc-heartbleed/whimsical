import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  View, Text, StyleSheet, TextInput, StatusBar, Button, FlatList, Image,
} from 'react-native';
import errandState from '../../state/atoms/errands';

const DashboardBody = ({ navigation }) => {
  const [errandsList] = useRecoilState(errandState);

  return (
    <View>
      <FlatList
        style={styles.container0}
        data={errandsList}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.container2}>
              {/* <Image source={{ uri: item.errandRunner.avatar }} /> */}
              <View style={styles.container3}>
                <Text style={styles.avatar}>AVATAR</Text>
                <View style={styles.container4}>
                  <View style={styles.container5}>
                    <Text style={styles.username}>{item.errandRunner.name}</Text>
                    <Text style={styles.minutesago}>minutes ago posted</Text>
                  </View>

                  <View style={styles.container6}>
                    <Text style={[styles.cont6, styles.store]}>{item.addressName}</Text>
                    <Text style={[styles.cont6, styles.breakbar]}>|</Text>
                    <Text style={[styles.cont6, styles.body]}>{item.errandName}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.container7}>
                <Text style={styles.body}>Address: {item.address.street}</Text>
                <Text style={styles.body}>ETA: {item.time}</Text>
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
    height: 625,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 2,
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
    // justifyContent: 'center',
  },
  cont6: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  store: {
    marginLeft: 20,
  },
  breakbar: {
    marginHorizontal: 5,
  },
  container7: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
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
