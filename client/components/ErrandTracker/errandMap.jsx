import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Title, Colors } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
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

  let destination = {
    latitude: 42.295906,
    longitude: -85.601778
  }

  //house



  //bagel latitude: 42.2966481,
  // longitude: -85.6436558,
  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        apikey={GOOGLE_MAPS_API_KEY}
        region={location}
        style={{ height: 400, width: Dimensions.get('window').width }}
      >
        <Marker coordinate={location} title='Marker' />
        <Marker coordinate={destination} title='Marker' />

        <MapViewDirections
          lineDashPattern={[0]}
          origin={location}
          destination={destination}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={7}
          strokeColor='#669df6'
        />
      </MapView >
    </>
  );

}

export default ErrandMap;

