import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Icon, LinearProgress, Overlay } from 'react-native-elements';
import { errandState, refreshErrandsState } from '../../../state/atoms/errands';
import MessageButton from './MessageButton';
import Courier from './Courier';

const { width, height } = Dimensions.get('window').width;

const BottomSheet = ({
  navigation, eta, errand, toggleOverlay,
}) => {
  const { errandName, errandId, status } = errand;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.errand}>{errandName}</Text>
        <Text style={styles.eta}>Arrives in
          <Text style={styles.time}> {Math.floor(eta)} min</Text>
        </Text>
        <Text style={styles.status}>Status: <Text style={styles.pend}>{status}</Text></Text>
      </View>
      <View style={styles.progress}>
        <LinearProgress color='#F78888' />
      </View>
      <View style={styles.content2}>
        <Courier errand={errand} />
        <Icon
          raised
          name='star'
          type='font-awesome'
          color='#F3D250'
          onPress={toggleOverlay}
        />
        <MessageButton style={styles.button} navigation={navigation} errandId={errandId} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    height: Dimensions.get('window').height * 0.5,
  },
  content: {
    marginLeft: 10,
    marginTop: 10,
  },
  content2: {
    flexDirection: 'row',
    marginTop: 70,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 1,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 3,
    borderColor: '#EFEFEF',
  },
  button: {
    marginRight: 40,
  },
  errand: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  eta: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  time: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#D92B37',
    marginLeft: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: '700',
    justifyContent: 'flex-end',
  },
  pend: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default BottomSheet;
