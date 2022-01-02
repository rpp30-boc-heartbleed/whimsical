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
import { SafeAreaView } from 'react-navigation';
import NavBarContainer from '../NavBar/NavBarContainer';
import Map from './Map';

const { height, width } = Dimensions.get('window');

const MapContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Map />
      <View style={styles.navbar}>
        <NavBarContainer navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    justifyContent: 'flex-end',
    alignContent: 'space-between',
    width,
  },
});

export default MapContainer;
