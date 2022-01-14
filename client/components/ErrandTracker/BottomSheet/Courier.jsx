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

const Courier = ({ errand }) => {
  // const [user, setUser] = useRecoilState(userProfileState);
  const { runner, errandId } = errand;
  // console.log('runner', runner);
  const { stars } = runner;
  const [count, setCount] = useState(stars);

  const handleOnClick = async () => {
    console.log(stars);
    try {
      const response = await axios.put(`${HOST_URL}/userProfile/stars`, {
        ...runner,
        stars: runner.stars + 1,
      });
      console.log('user stars response', response);
      setCount(count + 1);
      return response;
    } catch (err) {
      return 'Unable to give gold star';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>{runner.name}
      </Text>
      <TouchableOpacity onPress={handleOnClick}>
        <Image source={icons.star} style={styles.starImage} />
      </TouchableOpacity>
      <Text style={styles.starCount}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileName: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  starImage: {
    marginTop: 16,
    marginLeft: 5,
    width: 25,
    height: 25,
    marginRight: SIZES.padding,
  },
  starCount: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Courier;
