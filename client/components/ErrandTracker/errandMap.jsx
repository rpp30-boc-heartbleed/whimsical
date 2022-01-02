import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Title, Colors } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import { COLORS, SIZES, icons, images } from '../../constants';
import {
  View,
  Image,
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


const ErrandMap = ({ streetName, duration, errandLocation, navigation }) => {

  let location = {
    latitude: 42.2966481,
    longitude: -85.6436558,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  return (
    <>
      < MapView
        provider={PROVIDER_GOOGLE}
        apikey={GOOGLE_MAPS_API_KEY}
        region={location}
        style={{ height: 400, width: Dimensions.get('window').width }}
      />
      <MapViewDirection
        apikey={GOOGLE_MAPS_API_KEY}
        strokeColor={COLORS.primary}
      />
    </>
  );
};

export default ErrandMap;

