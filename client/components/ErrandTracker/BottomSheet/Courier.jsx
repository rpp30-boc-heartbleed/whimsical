import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { COLORS, SIZES, icons, images } from '../../../constants';
import ProfilePhoto from '../../Shared/Avatar.jsx';


const Courier = () => (
  <View style={styles.container}>
    <ProfilePhoto style={styles.image} />
    <Text style={styles.profileName}> Mister XD </Text>
    <View style={styles.container2}>
      <Image source={icons.star} style={styles.starImage} />
      <Text style={styles.starCount}>9000</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 50,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
  },
  container2: {
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: 'white',
  },
  profileName: {
    marginTop: 20,
    paddingLeft: 5,
  },
  starImage: {
    marginTop: 12,
    paddingLeft: 5,
    width: 30,
    height: 30,
    marginRight: SIZES.padding
  },
  starCount: {
    marginTop: 15,
  }
});

export default Courier;