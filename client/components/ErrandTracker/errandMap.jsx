import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const destinationHeader = ({ streetName, duration }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: SIZES.width * 0.9
        }}>


      </View>




    </View>
  );
};