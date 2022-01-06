import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MessageButton from './MessageButton.jsx';
import Courier from './Courier.jsx';
// import ErrandProgress from './ErrandProgress.jsx';



const BottomSheet = ({ eta }) => (
  <View style={styles.container}>
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
