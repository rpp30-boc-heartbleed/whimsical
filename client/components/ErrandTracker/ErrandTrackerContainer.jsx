/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Title, Colors } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';
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
import { COLORS, SIZES, icons, images } from '../../constants';
import errandState from '../../state/atoms/errands';
import ErrandMap from './errandMap.jsx';
import BottomSheet from './BottomSheet/BottomSheet.jsx';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandTrackerContainer = ({ route, navigation }) => {
  return (
    <>
      <View style={styles.container1}>
        <ErrandMap />
      </View >

      <View style={styles.container2}>
        <BottomSheet />
      </View>
      <View>
        <NavBarContainer navigation={navigation} />
      </View>

    </ >

  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 5,
    height: 175,
    paddingLeft: 120,
    paddingRight: 120,
    marginBottom: 5,
    // width: Dimensions.get('window').width,
  },
  container2: {
    height: 175,
    paddingLeft: 1,
    paddingRight: 1,
    flex: 0.5,
    width: Dimensions.get('window').width,
    marginTop: 10,
  }
});

export default ErrandTrackerContainer;
