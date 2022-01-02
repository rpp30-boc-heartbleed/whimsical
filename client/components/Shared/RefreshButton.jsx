import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { COLORS, SIZES, icons, images } from '../../../constants';


const RefreshButton = ({ onPressElement }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#FAFAFA' : 'white',
        },
        styles.container,
      ]}
      onPress={onPressElement}
    >
      <Image source={icons.refresh} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '70%',
    width: '70%',
  },
});

export default RefreshButton;