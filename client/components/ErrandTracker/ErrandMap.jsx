import React, { useState, useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { GOOGLE_MAPS_API_KEY } from '@env';
import {
  COLORS, SIZES, icons, images,
} from '../../constants';

const path = [
  { latitude: 42.2966481, longitude: -85.6436558 },
  { latitude: 42.296238, longitude: -85.640326 },
  { latitude: 42.296230, longitude: -85.638233 },
  { latitude: 42.296231, longitude: -85.636030 },
  { latitude: 42.296203, longitude: -85.634026 },
  { latitude: 42.296185, longitude: -85.632176 },
  { latitude: 42.296169, longitude: -85.630604 },
  { latitude: 42.296165, longitude: -85.629510 },
  { latitude: 42.296127, longitude: -85.629007 },
  { latitude: 42.295663, longitude: -85.626279 },
  { latitude: 42.295092, longitude: -85.622729 },
  { latitude: 42.294902, longitude: -85.619229 },
  { latitude: 42.294727, longitude: -85.613744 },
  { latitude: 42.293905, longitude: -85.607059 },
  { latitude: 42.295546, longitude: -85.607007 },
  { latitude: 42.295547, longitude: -85.604431 },
  { latitude: 42.296051, longitude: -85.604390 },
  { latitude: 42.296043, longitude: -85.601783 },
  { latitude: 42.295906, longitude: -85.601778 },
];

const destination = {
  latitude: 42.295906,
  longitude: -85.601778,
};

const ErrandMap = ({ setEta, errand }) => {
  const mapRef = useRef();
  const markerRef = useRef();
  const { errandRunner } = errand;

  // const [errands, setErrands] = useRecoilState(errandState);

  const [region, setRegion] = useState({
    latitude: 42.2966481,
    longitude: -85.6436558,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [driverPosition, setDriverPosition] = useState(errandRunner.gps);

  useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      if (count < path.length) {
        console.log('count', count);
        setDriverPosition(path[count]);
      }
    }, 500);
    return () => {
      console.log('cleared');
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        <Marker
          draggable
          description='He running'
          title='Errand Runner'
          coordinate={driverPosition}
        >
          <Image
            draggable
            // eslint-disable-next-line global-require
            source={require('../../assets/icons/Icon.png')}
            style={{ width: 35, height: 45 }}
            resizeMode='center'
            resizeMethod='resize'
          />
        </Marker>
        <Marker
          title='The House'
          draggable
          coordinate={destination}
        />
        <MapViewDirections
          lineDashPattern={[1]}
          apikey={GOOGLE_MAPS_API_KEY}
          // coordinates={coordinates.map(cord => ({ latitide: cord[0], longitude: cord[1] }))}
          origin={driverPosition}
          destination={destination}
          strokeWidth={7}
          strokeColor='#669df6'
          onReady={({ duration }) => setEta(duration)}
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ErrandMap;
