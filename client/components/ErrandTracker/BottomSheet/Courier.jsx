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
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Title, Colors } from 'react-native-paper';
import {
  COLORS,
  SIZES,
  icons,
  images,
} from '../../../constants';
import userProfileState from '../../../state/atoms/userProfile';

const Courier = ({ errand }) => {
  // const [user, setUser] = useRecoilState(userProfileState);
  const { runner } = errand;
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
      {/* <Text>{user.picture}</Text> */}
      <Text style={styles.profileName}>{runner.name}  </Text>
      <View style={styles.container2}>
        <TouchableOpacity onPress={handleOnClick}>
          <Image source={icons.star} style={styles.starImage} />
        </TouchableOpacity>
        <Text style={styles.starCount}>{count}</Text>
      </View>
    </View>
  );
};

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
    marginRight: SIZES.padding,
  },
  starCount: {
    marginTop: 15,
  },
});

export default Courier;
