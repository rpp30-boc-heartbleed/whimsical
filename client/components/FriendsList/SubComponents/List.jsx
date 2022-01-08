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
// State
import filteredByNameSelector from '../../../state/selectors/filterFriendsByName';
// Assets
import { images, icons, SIZES } from '../../../constants';

const { star } = icons;

const List = ({ style, navigation }) => {
  const filteredByName = useRecoilValue(filteredByNameSelector);

  return (
    <View style={style}>
      <FlatList
        data={filteredByName}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.friend}>
              <TouchableOpacity style={styles.avatar}>
                <Avatar.Image size={50} source={item.avatar} />
              </TouchableOpacity>
              <View style={styles.text}>
                <Text>
                  {item.name}
                </Text>
                <Text>{item.goldStars}<Image style={styles.star} source={star} /></Text>
              </View>
              <TouchableOpacity style={styles.chat}>
                <IconModal
                  icon='chat-outline'
                  size={50}
                  style={styles.chatIcon}
                  currentErrands={item.currentErrands}
                  navigation={navigation}
                />
              </TouchableOpacity>
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
    marginTop: 15,
  },
  avatar: {
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
  },
  text: {
    flex: 4,
    // flexDirection: 'row',
    fontSize: 14,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
    padding: 10,
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
