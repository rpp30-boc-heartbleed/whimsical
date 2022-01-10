import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MessageButton from './MessageButton';
import Courier from './Courier';

const BottomSheet = ({ navigation, eta, errand }) => {
  const { errandName, errandId, status } = errand;

  return (
    <View style={styles.container}>
      <Text>{errandName}</Text>
      <Text>ETA: {Math.floor(eta)} MINUTES </Text>
      <Text>Status: {status} </Text>
      <Courier errand={errand} />
      <MessageButton navigation={navigation} errandId={errandId} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default BottomSheet;
