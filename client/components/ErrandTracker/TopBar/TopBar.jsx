import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { COLORS, SIZES, icons, images } from '../../../constants';

const TopBar = () => (
  <>
    <View style={styles.container}>

      <View
        style={{
          flex: 1,
        }}>
        <Text>ETA: 45 MINUTES </Text>
        <Image
          source={icons.redPin}
          style={{
            width: 25,
            height: 25,
            marginRight: SIZES.padding,
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <Text>4408 W Main St</Text>
          <Text>{Math.ceil(10)} mins</Text>
        </View>
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // left: 0,
    // top: 50,
    // width: '100%',
    zIndex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default TopBar;



{/* <View
      style={{
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding * 2,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}> */}