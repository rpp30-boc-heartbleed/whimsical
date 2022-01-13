import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import userProfileState from '../../../state/atoms/userProfile';
import friendsListState from '../../../state/atoms/friendsList';

const AddIcon = ({ stranger }) => {
  const [isFriend, setIsFriend] = useState(false);
  const [friendsList, setFriendsList] = useRecoilState(friendsListState);
  const [user] = useRecoilState(userProfileState);

  const onPress = () => {
    setIsFriend(true);
    axios.put(`${HOST_URL}/friends/add`, {
      userEmail: user.email,
      friendEmail: stranger.email,
    })
      .then((res) => {
        console.log(res.data);
        setFriendsList([...friendsList, stranger]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <TouchableOpacity>
        <IconButton
          icon='plus'
          size={40}
          // color='#F3D250'
          style={styles.add}
          onPress={onPress}
          disabled={isFriend}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    // backgroundColor: '#F3D250',
  },
});

export default AddIcon;
