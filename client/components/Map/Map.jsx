import React, { useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import userLocationState from '../../state/atoms/userLocation';
import initLocationState from '../../state/atoms/initLocation';

const { height, width } = Dimensions.get('window');

const Map = () => {
  const initLocation = useRecoilValue(initLocationState);
  const userLocation = useRecoilValue(userLocationState);

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={initLocation}
      showsUserLocation
      showsMyLocationButton
      showsScale
      showsPointsOfInterest
      loadingEnabled
    >
      <Marker
        title='user'
        coordinate={userLocation}
      />
    </MapView>
  );
};

// need to make an API call to google.
// I need to make some kind of mapping function that returns points of interest.

const styles = StyleSheet.create({
  map: {
    height: height * 0.75,
    width,
  },
});

export default Map;
