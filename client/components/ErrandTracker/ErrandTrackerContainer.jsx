/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Title, Colors } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY, HOST_URL } from '@env';
import axios from 'axios';
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
import {
  COLORS,
  SIZES,
  icons,
} from '../../constants';
import { errandState, refreshErrandsState } from '../../state/atoms/errands';
import ErrandMap from './ErrandMap';
import BottomSheet from './BottomSheet/BottomSheet';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandTrackerContainer = ({ route, navigation }) => {
  // const { errand } = route.params;
  const [errands, setErrands] = useRecoilState(errandState);
  const errand = errands.find((e) => e._id === route.params.errand._id);
  const [eta, setEta] = useState(errand.storeETA);
  const [refresh, setRefresh] = useRecoilState(refreshErrandsState);
  const index = errands.findIndex((errandItem) => errandItem.errandName === errand.errandName);

  const updateErrand = async () => {
    try {
      await axios.post(`${HOST_URL}/errands/complete`, {
        errandId: errand._id,
        email: errand.runner.email,
      });

      const errandsResp = await axios.get(`${HOST_URL}/getErrandData`);
      setErrands(errandsResp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (eta === 0) {
      updateErrand();
      setRefresh(!refresh);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eta]);

  return (
    <>
      <View style={styles.map}>
        <ErrandMap
          setEta={setEta}
          errand={errand}
        />
      </View>
      <View style={styles.details}>
        <BottomSheet
          navigation={navigation}
          eta={eta}
          errand={errand}
        />
      </View>
    </>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.75,
    paddingLeft: 120,
    paddingRight: 120,
  },
  details: {
    paddingLeft: 0.5,
    paddingRight: 0.5,
    flex: 0.44,
    minHeight: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width,
  },

});

export default ErrandTrackerContainer;
