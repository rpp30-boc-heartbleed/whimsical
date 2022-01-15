import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  COLORS,
  SIZES,
  icons,
} from '../../../constants';
import userProfileState from '../../../state/atoms/userProfile';

const Courier = ({ errand, handleRating, count }) => {
  const { runner, errandId } = errand;
  const { stars } = runner;
  // console.log('count', count);

  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>{runner.name}
      </Text>
      <Image source={icons.star} style={styles.starImage} />
      <Text style={styles.starCount}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileName: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  starImage: {
    marginTop: 22,
    marginLeft: 5,
    width: 20,
    height: 20,
    marginRight: SIZES.padding,
  },
  starCount: {
    marginTop: 22,
    marginRight: 5,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Courier;
