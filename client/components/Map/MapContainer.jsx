import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  Dimensions,
} from 'react-native';
// import { SafeAreaView } from 'react-navigation';
import NavBarContainer from '../NavBar/NavBarContainer';
import Map from './Map';

const { height, width } = Dimensions.get('window');

const MapContainer = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Map />
      </View>
      <View style={styles.navbar}>
        <NavBarContainer navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 2,
    justifyContent: 'flex-end',
    alignContent: 'space-between',
    width,
  },
});

export default MapContainer;
