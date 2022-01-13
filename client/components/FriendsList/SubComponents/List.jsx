import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Avatar, Badge, IconButton } from 'react-native-paper';

// Components
import IconModal from '../../Modals/IconModal';
import AddIcon from './AddIcon';
// State
import filterByNameSelector from '../../../state/selectors/filterByName';
import addFriendState from '../../../state/atoms/addFriends';
import userProfileState from '../../../state/atoms/userProfile';
import addFriendsQuery from '../../../state/selectors/addFriendsQuery';
import friendsListQuery from '../../../state/selectors/friendsListQuery';
// Assets
import { icons, SIZES } from '../../../constants';

const { star } = icons;

const List = ({ style, navigation }) => {
  const [addList, setAddList] = useRecoilState(addFriendState);
  const [user] = useRecoilState(userProfileState);
  const usersFriends = useRecoilValue(friendsListQuery);
  const addFriends = useRecoilValue(addFriendsQuery);
  const filteredFriends = useRecoilValue(filterByNameSelector('friends'));
  const filteredUsers = useRecoilValue(filterByNameSelector('strangers'));

  return (
    <View style={style}>
      <FlatList
        data={filteredUsers}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.friend}>
              <TouchableOpacity style={styles.avatar}>
                <Avatar.Image size={60} source={item.picture} />
              </TouchableOpacity>
              <View style={styles.text}>
                <Text style={styles.name}>
                  {item.name}
                </Text>
                <Text>{item.stars}<Image style={styles.star} source={star} /></Text>
              </View>
              {(!addList)
                ? (
                  <TouchableOpacity style={styles.chat}>
                    <IconModal
                      disable={false}
                      icon='chat-outline'
                      size={50}
                      style={styles.chatIcon}
                      currentErrands={item.currentErrands}
                      navigation={navigation}
                    />
                  </TouchableOpacity>
                )
                : (<AddIcon />)}
            </View>
          );
        }}
        keyExtractor={(item) => item._id}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  friend: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    height: 80,
    // marginTop: 15,
  },
  avatar: {
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
  },
  text: {
    flex: 4,
    alignItems: 'center',
    // flexDirection: 'row',
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
    height: 60,
    padding: 10,
  },
  name: {
    fontSize: 20,
  },
  star: {
    width: 15,
    height: 15,
  },
  chat: {
    flex: 1,
    marginRight: 30,
  },
  chatIcon: {
    paddingBottom: 20,
  },
});

export default List;
