import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MessageButton from './MessageButton.jsx';
import Courier from './Courier.jsx';
// import ErrandProgress from './ErrandProgress.jsx';



const BottomSheet = () => (
  <View style={styles.container}>
    <Courier />
    {/* <ErrandProgress /> */}
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