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
// import WithBadge from './WithBadge';
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
          const onErrand = item.currentErrands.length;
          const disabled = onErrand === 0;
          return (
            <View style={styles.friend}>
              <TouchableOpacity style={styles.avatar}>
                <Avatar.Image size={60} source={{ uri: item.picture }} />
              </TouchableOpacity>
              <View style={styles.text}>
                <Text style={styles.name}>
                  {item.name}
                </Text>
                <Text><Image style={styles.star} source={star} />
                  <Text style={{ margin: 5 }}>{item.stars}
                  </Text>
                </Text>
              </View>
              {(!addList)
                ? (
                  <TouchableOpacity style={styles.chat}>
                    <IconButton
                      disabled={disabled}
                      icon='chat-outline'
                      size={50}
                      style={styles.chatIcon}
                      navigation={() => navigation.push('Chat', { errandId: item.errandId[0] })}
                    />
                  </TouchableOpacity>
                )
                : (<AddIcon index={index} stranger={item} />)}
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
    height: 100,
    borderColor: '#F1F3F4',
    borderWidth: 1,
  },
  avatar: {
    flex: 1,
    margin: 20,
  },
  text: {
    flex: 4,
    alignItems: 'center',
    width: '100%',
    height: 60,
    margin: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
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
    paddingTop: 10,
  },
});

export default List;
