import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { COLORS, SIZES, icons, images } from '../../../constants';

const TopBar = () => (
  <>
    <View style={styles.container}>
      <Text>ETA: 5 MINUTES </Text>
      <Image
        source={icons.redPin}
        style={{
          width: 25,
          height: 25,
          marginRight: SIZES.padding,
        }}
      />
      <Text>4408 W Main St</Text>
      <Text>{Math.ceil(10)} mins</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default TopBar;
