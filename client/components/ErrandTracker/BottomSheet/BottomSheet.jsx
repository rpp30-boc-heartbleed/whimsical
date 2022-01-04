import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MessageButton from './MessageButton.jsx';
import Courier from './Courier.jsx';
// import ErrandProgress from './ErrandProgress.jsx';



const BottomSheet = () => (
  <View style={styles.container}>
    <Text>ETA: 5 MINUTES </Text>
    <Text>4408 W Main St</Text>
    {/* <Text>{Math.ceil(10)} mins</Text> */}
    {/* <ErrandProgress /> */}
    <Courier />
    <MessageButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})


export default BottomSheet;