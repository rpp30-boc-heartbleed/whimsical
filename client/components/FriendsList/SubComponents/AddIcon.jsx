import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import userProfileState from '../../../state/atoms/userProfile';
import friendsListState from '../../../state/atoms/friendsList';
import userListState from '../../../state/atoms/userList';
import filterUserListSelector from '../../../state/selectors/filterUserList';

const AddIcon = ({ stranger }) => {
  const [friendsList, setFriendsList] = useRecoilState(friendsListState);
  const [user] = useRecoilState(userProfileState);
  const [isFriend, setIsFriend] = useState(false);
  const check = () => {
    for (let i = 0; i < friendsList.length; i += 1) {
      if (friendsList[i].name === stranger.name) {
        return true;
      }
    }
    return false;
  };
  const disabled = check();

  const onPress = () => {
    setIsFriend(true);
    axios.put(`${HOST_URL}/friends/add`, {
      userEmail: user.email,
      friendEmail: stranger.email,
    })
      .then((res) => {
        setFriendsList([...friendsList, stranger]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <IconButton
        icon='plus-circle'
        size={40}
        style={styles.add}
        onPress={onPress}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    paddingTop: 20,
  },
});

export default AddIcon;
