/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
import {
  COLORS,
  SIZES,
  icons,
  images,
} from '../../constants';
import { errandState, refreshErrandsState } from '../../state/atoms/errands';
import ErrandMap from './ErrandMap';
import BottomSheet from './BottomSheet/BottomSheet';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandTrackerContainer = ({ route, navigation }) => {
  const [eta, setEta] = useState(0);
  const { errand } = route.params;
  const { errandRunner, errandName, chatId } = errand;
  const [errands, setErrands] = useRecoilState(errandState);
  const [refresh, setRefresh] = useRecoilState(refreshErrandsState);
  const index = errands.findIndex((errandItem) => errandItem.errandName === errand.errandName);

  useEffect(() => {
    if (eta === 0) {
      const newList = replaceItemAtIndex(errands, index, {
        ...errand,
        status: 'Delivered',
      });

      setErrands(newList);
      setRefresh(!refresh);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eta]);

  return (
    <>
      <View style={styles.map}>
        <ErrandMap setEta={setEta} errand={errand} />
      </View>
      <View style={styles.details}>
        <BottomSheet
          errandRunner={errandRunner}
          eta={eta}
          errandName={errandName}
          chatId={chatId}
          navigation={navigation}
        />
      </View>
      <View>
        <NavBarContainer navigation={navigation} />
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
    height: 175,
    paddingLeft: 120,
    paddingRight: 120,
  },
  details: {
    paddingLeft: 0.5,
    paddingRight: 0.5,
    flex: 0.44,
    width: Dimensions.get('window').width,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export default ErrandTrackerContainer;
