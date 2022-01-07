import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
} from 'react-native';
import { Title, Colors } from 'react-native-paper';
import {
  COLORS,
  SIZES,
  icons,
  images,
} from '../../../constants';
import userProfileState from '../../../state/atoms/userProfile';

const Courier = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useRecoilState(userProfileState);

  async function handleOnClick(e) {
    const { stars } = user;
    console.log(stars);
    try {
      const response = await axios.put('/userProfile/stars', setCount(stars + 1));
      console.log('response', response);
      return response;
    } catch (err) {
      return 'Unable to give gold star';
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text>{user.picture}</Text> */}
      <Text style={styles.profileName}>{user.name}  </Text>
      <View style={styles.container2}>
        <Image source={icons.star} style={styles.starImage} />
        <Text style={styles.starCount} onPress={(e) => handleOnClick}>{user.stars}</Text>
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
