import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MessageButton from './MessageButton';
import Courier from './Courier';

const BottomSheet = ({ eta, errandRunner, errandName }) => (
  <View style={styles.container}>
    <Text>{errandName}</Text>
    <Text>ETA: {Math.floor(eta)} MINUTES </Text>
    <Courier />
    <MessageButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default BottomSheet;
