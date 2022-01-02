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

import filteredByNameSelector from '../../state/selectors/filterFriendsByName';

const List = () => {
  const filteredByName = useRecoilValue(filteredByNameSelector);

  return (
    <View style={styles.list}>
      <FlatList
        data={filteredByName}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>Profile pic</Text>
              <TouchableOpacity>
                <Text style={styles.friend}>
                  {item.name}     {item.email}     {item.goldStars} gold stars
                </Text>
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
  list: {
    flex: 1,
    width: '70%',
  },
  friend: {
    padding: 15,
    fontSize: 14,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 60,
    marginTop: 25,
  },
});

export default List;
