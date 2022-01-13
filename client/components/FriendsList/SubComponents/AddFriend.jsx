import React from 'react';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const AddFriend = ({ style }) => {
  return (
    <View style={style}>
      <TouchableOpacity>
        <IconButton
          icon='account-plus-outline'
          size={50}
          style={styles.add}
          tintColor='white'
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
  },
});

export default AddFriend;
