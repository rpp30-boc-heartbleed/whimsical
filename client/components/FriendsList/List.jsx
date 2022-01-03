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
import IconModal from '../Modals/IconModal';
// State
import filteredByNameSelector from '../../state/selectors/filterFriendsByName';

// Assets
import { cat, dog } from '../../constants/images';

const List = ({ style }) => {
  const filteredByName = useRecoilValue(filteredByNameSelector);

  return (
    <View style={style}>
      <FlatList
        data={filteredByName}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.friend}>
              <TouchableOpacity style={styles.avatar}>
                <Avatar.Image size={50} source={cat} />
              </TouchableOpacity>
              <Text style={styles.text}>
                {item.name}     {item.email}     {item.goldStars}
              </Text>
              <TouchableOpacity style={styles.chat}>
                <IconModal
                  icon='chat-outline'
                  size={50}
                  style={styles.chatIcon}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(friend) => friend.id}
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
    marginTop: 15,
  },
  avatar: {
    flex: 1,
    marginRight: 20,
    marginLeft: 10,
  },
  text: {
    flex: 4,
    fontSize: 14,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
  },
  chat: {
    flex: 1,
    marginRight: 20,
  },
  chatIcon: {
    paddingBottom: 20,
  },
});

export default List;
