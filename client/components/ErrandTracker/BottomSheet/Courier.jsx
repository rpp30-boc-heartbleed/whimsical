import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Title, Colors } from 'react-native-paper';
import { COLORS, SIZES, icons, images } from '../../../constants';
import ProfilePhoto from '../../Shared/Avatar.jsx';

//Click Avatar Picture to go to User profile

const Courier = () => (
  <View style={styles.container}>
    <ProfilePhoto style={styles.image} />
    <Text style={styles.profileName}> Lady Beth </Text>
    <View style={styles.container2}>
      <Image source={icons.star} style={styles.starImage} />
      <Text style={styles.starCount}>9000</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    borderRadius: 40,
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