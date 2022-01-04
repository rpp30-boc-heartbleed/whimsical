import React, { useState } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import axios from 'axios';

import userLocationState from '../../state/atoms/userLocation';
import currentMapView from '../../state/atoms/currentMapView';

const { GOOGLE_MAPS_API_KEY_IOS } = process.env;

const { height, width } = Dimensions.get('window');

const Map = () => {
  const currentView = useRecoilValue(currentMapView);
  const userLocation = useRecoilValue(userLocationState);
  const setCurrentMapView = useSetRecoilState(currentMapView);

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={currentView}
      showsUserLocation
      showsMyLocationButton
      showsScale
      showsPointsOfInterest
      loadingEnabled
      onRegionChangeComplete={(region) => {
        // console.log(region);
        setCurrentMapView(() => region);
        // console.log('currentMAPVIEW', currentView);
      }}
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
    height,
    width,
  },
});

export default Map;
