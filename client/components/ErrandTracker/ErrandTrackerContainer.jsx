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
  TouchableOpacity,
} from 'react-native';
<<<<<<< HEAD
import errandState from '../../state/atoms/errands';
import ErrandMap from './errandMap';
=======
import errandState from '../../state/atoms/errands'
import { GOOGLE_MAPS_API_KEY } from '@env';
console.log(GOOGLE_MAPS_API_KEY)
import TopBar from './TopBar/TopBar.jsx';
import ErrandMap from './ErrandMap.jsx';
import BottomSheet from './BottomSheet/BottomSheet.jsx';
>>>>>>> 7df4ab6e22d05f405f0c16af0eca4fbaab7ef52d

const ErrandTrackerContainer = ({ route, navigation }) => {
  return (
    <>
      <View style={styles.container1}>
        <TopBar />
      </View>

      <View style={styles.container2}>
        <ErrandMap />
      </View >

      <View style={styles.container3}>
        <BottomSheet />
      </View>

      <Button
        title="Go to Map"
        onPress={() => navigation.push('Map')} // push the name property of the Stack.Screen component as defined in App.jsx
      />
      {/* <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" /> */}
    </ >
  );
};

const styles = StyleSheet.create({
  container1: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingLeft: 120,
    paddingRight: 120,
    marginBottom: 10,
  },
  container3: {
    height: 150,
    width: Dimensions.get('window').width,
  }
});

export default ErrandTrackerContainer;
