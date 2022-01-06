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
import ErrandMap from './ErrandMap';
import BottomSheet from './BottomSheet/BottomSheet';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandTrackerContainer = ({ route, navigation }) => {
  const [eta, setEta] = useState(0);

  return (
    <>
      <View style={styles.map}>
        <ErrandMap setEta={setEta} />
      </View>

      <View style={styles.details}>
        <BottomSheet eta={eta} />
      </View>
      <View>
        <NavBarContainer navigation={navigation} />
      </View>

    </ >

  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 175,
    paddingLeft: 120,
    paddingRight: 120,
  },
  details: {
    paddingLeft: 0.5,
    paddingRight: 0.5,
    flex: 0.44,
    width: Dimensions.get('window').width,
  }
});

export default ErrandTrackerContainer;
