import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

const FriendScreen = () => {
  const [friendsList, setFriendsList] = useState([{
    id: 1,
    name: 'll cool j',
  },
  {
    id: 2,
    name: 'sam jackson',
  }]);
  const [color, setColor] = useState('white');

  const handleTap = () => {
    if (color === 'white') {
      setColor('red');
    } else {
      setColor('white');
    }
  };

  return (
    <>
      <FlatList
        data={friendsList}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={handleTap}>
              <Text style={{ backgroundColor: color }}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(friend) => friend.id}
        keyboardShouldPersistTaps="handled"
        style={styles.friendsList}
      />
      {/* <Text>hey there</Text> */}
    </>
  );
};

const styles = StyleSheet.create({
  friendsList: {
    color: 'black',
  },
});

export default FriendScreen;
