import React, { useState, useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
// import { useRecoilState, useRecoilValue } from 'recoil';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import Geolocation from 'react-native-geolocation-service';
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
// port errandState from '../../state/atoms/errands'
import { GOOGLE_MAPS_API_KEY } from '@env';
import { COLORS, SIZES, icons, images } from '../../constants';

const path = [
  { latitude: 42.2966481, longitude: -85.6436558 },
  { latitude: 42.296238, longitude: -85.640326 },
  { latitude: 42.296230, longitude: -85.638233 },
  { latitude: 42.296231, longitude: -85.636030 },
  { latitude: 42.296203, longitude: -85.634026 },
  { latitude: 42.296185, longitude: -85.632176 },
  { latitude: 42.296169, longitude: -85.630604 },
  { latitude: 42.296165, longitude: -85.629510 },
];

const destination = {
  latitude: 42.295906,
  longitude: -85.601778,
};

const ErrandMap = ({ setEta }) => {
  const mapRef = useRef();
  const markerRef = useRef();

  const [coordinates, setCoordinates] = useState([
    { name: 'Big Apple Bagels', latitide: 42.253502, longitude: -85.5893426 },
    { name: 'Panda Express', latitide: 42.2334426951981, longitude: -85.58900073414098 },
    { name: 'D&W Fresh Market', latitude: 42.26027544435399, longitude: -85.61472073607013 },
    { name: 'YMCA of Greater Kalamazoo', latitide: 42.272923910906655, longitude: -85.59756323495016 },
    { name: 'FedEx Ground', latitude: 42.26536715984338, longitude: -85.51540124023748 },
  ]);

  const [region, setRegion] = useState({
    latitude: 42.2966481,
    longitude: -85.6436558,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [driverPosition, setDriverPosition] = useState(path[0]);

  useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      if (count < path.length) {
        console.log('count', count);
        setDriverPosition(path[count]);
      }
    }, 1000);
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
  // container2: {
  //   height: 20,
  //   width: 20,
  // },
});

export default ErrandMap;

  ///Geolocation

// useEffect(() => {
//   Location.installWebGeolocationPolyfill();
//   navigator.geolocation.getCurrentPosition(
//     position => {
//       console.log(position);
//       const { latitude, longitude } = position.coords;
//       setLocation(
//         {
//           latitude,
//           longitude,
//         },
//       );
//     },
//     (error) => {
//       console.log(error.code, error.message);
//     },
//     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//   );
// }, []);

// return (
//   <SafeAreaView style={styles.container}>
//     <StatusBar barStyle='dark-content' />
//     {location && (
//       <MapView
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}
//       />
//     )}
//   </SafeAreaView>
// );
// };