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
              <TouchableOpacity>
                <Avatar.Image size={50} source={cat} style={styles.avatar} />
              </TouchableOpacity>
              <Text style={styles.text}>
                {item.name}     {item.email}     {item.goldStars}
              </Text>
              <IconButton
                icon='chat-outline'
                size={50}
                style={styles.chat}
              />
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
  // list: {
  //   flex: 1,
  //   width: '80%',
  // },
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
  },
  text: {
    flex: 4,
    fontSize: 14,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
    // width: '50%',
  },
  chat: {
    flex: 1,
    marginLeft: 20,
  },
});

export default List;
