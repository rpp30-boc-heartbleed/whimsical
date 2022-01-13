/* eslint-disable max-len */
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
import filterByNameSelector from '../../../state/selectors/filterByName';
// Assets
import { icons, SIZES } from '../../../constants';

const { star } = icons;

const List = ({ style, navigation }) => {
  const filteredByName = useRecoilValue(filterByNameSelector('friends'));

  return (
    <View style={style.container}>
      <FlatList
        data={filteredByName}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.friend}>
              <TouchableOpacity style={styles.avatar}>
                <Avatar.Image size={50} source={item.avatar} />
              </TouchableOpacity>
              <View style={styles.text}>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                  {item.name}
                </Text>
                <Text><Image style={styles.star} source={star} /> {item.goldStars}</Text>
              </View>
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
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
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
    flexDirection: 'row',
    fontSize: 14,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 3,
    height: 60,
    padding: 10,
  },
  star: {
    flexDirection: 'row',
    width: 18,
    height: 18,
    margin: 6,
    marginBottom: 10,
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
