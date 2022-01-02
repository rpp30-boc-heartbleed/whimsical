import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Map = () => {
  const [location, setLocation] = useState('');

  // const getInitialState = () => {
  //   return {
  //     region: {
  //       latitude: 42.29171,
  //       longitude: -85.58723,
  //       latitudeDelta: 0.015,
  //       longitudeDelta: 0.0121,
  //     }
  // }
  // const onRegionChange = (region) => {
  //   this.setState({ region });
  // }

  const initialRegion = {
    latitude: 42.29171,
    longitude: -85.58723,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      showsUserLocation
      showsPointsOfInterest
      loadingEnabled
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: height * 0.75,
    width,
  },
});

export default Map;
