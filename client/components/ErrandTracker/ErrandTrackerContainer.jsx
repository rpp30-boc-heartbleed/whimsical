import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Title, Colors } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import { COLORS, SIZES, icons, images } from '../../constants';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import errandState from '../../state/atoms/errands'
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
console.log(GOOGLE_MAPS_API_KEY)
import ErrandMap from './ErrandMap.jsx';
import Courier from './BottomSheet/Courier.jsx';

const ErrandTrackerContainer = ({ route, navigation }) => {
  return (
    <>
      <View style={styles.container1}>
        <ErrandMap />
      </View >

      <View style={{ height: 200, width: Dimensions.get('window').width }}>
        <Courier />
      </View>
      <Button
        title="Go to Map"
        onPress={() => navigation.push('Map')} // push the name property of the Stack.Screen component as defined in App.jsx
      />
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
    </ >
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingLeft: 120,
    paddingRight: 120,
    marginBottom: 10,
  },
  // container2: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   height: 30,
  //   width: 30,
  // },
});

export default ErrandTrackerContainer;
