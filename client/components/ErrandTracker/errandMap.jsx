import React, { useState, useEffect } from 'react';
// import { useRecoilState, useRecoilValue } from 'recoil';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
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
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'



const ErrandMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Location.installWebGeolocationPolyfill();
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        const { latitude, longitude } = position.coords;
        setLocation(
          {
            latitude,
            longitude
          });
      },
      error => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      {location && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
      )}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default ErrandMap;

// const ErrandMap = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     Location.installWebGeolocationPolyfill();
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         console.log(position)
//         const { latitude, longitude } = position.coords;
//         setLocation(
//           {
//             latitude,
//             longitude
//           });
//       },
//       error => {
//         console.log(error.code, error.message)
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     )
//   }, [])

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle='dark-content' />
//       {location && (
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           initialRegion={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//         />
//       )}
//     </SafeAreaView>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// })

// export default ErrandMap;


// const ErrandMap = () => {

//   const [location, setLocation] = useState([]);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
// sition => {
//   //         console.log(position);
//   //         const { latitude, longitude } = position.coords;
//   //         setLocation({
//   //           latitude,
//   //           longitude,
//   //         });
// },
    //       error => {
//         console.log(error.code, error.message);
    //       },
//       {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 10000,
//         distanceFilter: 0,
//       },
//     );

//   }, []);

//   // useEffect(() => {
//   //   Geolocation.getCurrentPosition(
//   //     position => {
//   //       const { latitude, longitude } = position.coords;
//   //       setLocation({
//   //         latitude,
//   //         longitude,
//   //       });
//   //       // console.log(position);
//   //     },
//   //     error => {
//   //       console.log(error.code, error.message);
//   //     },
//   //     {
//   //       enableHighAccuracy: true,
//   //       timeout: 15000,
//   //       maximumAge: 10000
//   //     },
//   //   );

//   // }, []);

//   // let location = {
//   //   latitude: 42.2966481,
//   //   longitude: -85.6436558,
//   //   latitudeDelta: 0.0922,
//   //   longitudeDelta: 0.0421,
//   // }

//   // let destination = {
//   //   latitude: 42.295906,
//   //   longitude: -85.601778
//   // }

//   return (
//     <>
//       <View>
//         {location.latitude}
//       </View>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         apikey={GOOGLE_MAPS_API_KEY}
//         region={location}
//         style={{ height: 325, width: Dimensions.get('window').width }}
//       >

//         <Marker coordinate={location} title='Marker' />
//         {/* <Marker coordinate={destination} title='Marker' /> */}

//         <MapViewDirections
//           lineDashPattern={[0]}
//           origin={location}
//           // destination={destination}
//           apikey={GOOGLE_MAPS_API_KEY}
//           strokeWidth={7}
//           strokeColor='#669df6'
//         />

//       </MapView>

//     </>

//   )

// }



// export default ErrandMap;
