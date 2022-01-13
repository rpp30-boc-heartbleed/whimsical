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
  const filteredFriends = useRecoilValue(filterByNameSelector('friends'));
  const filteredUsers = useRecoilValue(filterByNameSelector('strangers'));
  const list = addList ? filteredUsers : filteredFriends;

  return (
    <View style={style}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.friend}>
              <TouchableOpacity style={styles.avatar}>
                <Avatar.Image size={60} source={item.picture} />
              </TouchableOpacity>
              <View style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text><Image style={styles.star} source={star} />
                  <Text style={{ margin: 5 }}>{item.goldStars}
                  </Text>
                </Text>
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
                : (<AddIcon stranger={item} />)}
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
    // padding: 15,
    width: '100%',
<<<<<<< HEAD
    height: 80,
    // marginTop: 15,
=======
    height: 100,
    borderColor: '#F1F3F4',
    borderWidth: 1,
>>>>>>> 2d942408f4a82c3faf0b5cc424fc4c43d10f96ac
  },
  avatar: {
    flex: 1,
    margin: 20,
  },
  text: {
    flex: 4,
<<<<<<< HEAD
    alignItems: 'center',
    // flexDirection: 'row',
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
=======
    width: '100%',
    fontSize: 14,
    borderRadius: 30,
>>>>>>> 2d942408f4a82c3faf0b5cc424fc4c43d10f96ac
    height: 60,
    margin: 10,
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
    marginBottom: 20,
  },
});

export default List;
