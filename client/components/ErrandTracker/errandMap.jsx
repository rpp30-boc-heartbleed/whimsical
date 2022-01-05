import React, { useState, useEffect, useRef } from 'react';
// import { useRecoilState, useRecoilValue } from 'recoil';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';
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
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
// port errandState from '../../state/atoms/errands'
import { GOOGLE_MAPS_API_KEY } from '@env';

const ErrandMap = () => {

  const [coordinates, setCoordinates] = useState([
    { name: 'Big Apple Bagels', latitide: 42.253502, longitude: -85.5893426 },
    { name: 'Panda Express', latitide: 42.2334426951981, longitude: -85.58900073414098 },
    { name: 'D&W Fresh Market', latitude: 42.26027544435399, longitude: -85.61472073607013 },
    { name: 'YMCA of Greater Kalamazoo', latitide: 42.272923910906655, longitude: -85.59756323495016 },
    { name: 'FedEx Ground', latitude: 42.26536715984338, longitude: -85.51540124023748 }
  ])

  const [region, setRegion] = useState({
    latitude: 42.2966481,
    longitude: -85.6436558,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // const [markers, setMarkers] = useState([42.2966481, -85.6436558]);

  // const mapRef = useRef(null);

  let markerCord = {
    latitude: 42.2966481,
    longitude: -85.6436558,
  };

  let destination = {
    latitude: 42.295906,
    longitude: -85.601778,
  };

  //   const onMapPress = e => {
  //     setMarkers({
  //       {
  //         coordinate: e.nativeEvent.coordinate,
  //         key: id++
  //       }
  //     }),
  // };

  // let urlFetchDistance = https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins='+lat1+','+lng1+'&destinations='+lat2+'%2C'+lng2+'&key=' + "YOUR_GOOGLE_DIRECTIONS_API_KEY";

  // useEffect(() => {
  //   if (mapRef.current) {
  //     mapRef.current.animateCamera(
  //       {
  //         center: {
  //           latitude: 40.342,
  //           longitude: -85.234,
  //         },
  //         zoom: 15,
  //       },
  //       5000,
  //     );
  //   }
  // }, []);

  // const handleRegionChange = region => {
  //   coordinate = region;
  //   console.log(region);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        <View style={styles.container2}>
          <Marker
            draggable
            coordinate={markerCord}
          >
            <Callout>
              <Text>A Bagel Place </Text>
            </Callout>
          </Marker>
          <Marker
            coordinate={destination}
          >
            <Callout>
              <Text>Some House </Text>
            </Callout>
          </Marker>
        </View>
        <MapViewDirections
          lineDashPattern={[0]}
          origin={region}
          destination={destination}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={7}
          strokeColor='#669df6'
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