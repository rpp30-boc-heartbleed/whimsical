import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';
import errandState from '../../state/atoms/errands'
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
console.log(GOOGLE_MAPS_API_KEY)

const ErrandTrackerContainer = ({ route, navigation }) => {
  // const [errands, setErrands] = useRecoilState(errandState);

  //Big Apple Bagels & Random For Rent House in Kalamazoo, MI
  // const coordinates = [
  //   {
  //     latitude: 42.2966481,
  //     longitude: -85.6436558,
  //   },
  //   {
  //     latitude: 42.295906,
  //     longitude: -85.601778
  //   }
  // ];

  function renderHeader() {
    return
    <HEADER
      title="DELIVERY STATUS"
    />
  }

  return (
    <View style={styles.container}>

      {/** HEADER*/}

      {/**MAP */}
      {/**Info */}
      {/**Deliverer*/}
      <Text>Errand Status</Text>
      <Button
        title="Go to Map"
        onPress={() => navigation.push('Map')} // push the name property of the Stack.Screen component as defined in App.jsx
      />
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ErrandTrackerContainer;
