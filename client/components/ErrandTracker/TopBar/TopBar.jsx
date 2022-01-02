import React from 'react';
import { StyleSheet, View } from 'react-native';
// import CatUser from './CatUser';
// import RefreshButton from './RefreshButton';

const TopBar = ({ onPressElement }) => (
  <View style={styles.container}>
    {/* <CatUser />
    <RefreshButton onPressElement={onPressElement} /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 40,
    width: '100%',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default TopBar;