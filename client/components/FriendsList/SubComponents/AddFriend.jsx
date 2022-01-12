import React from 'react';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const AddFriend = ({ style }) => {
  return (
    <View style={style}>
      <TouchableOpacity>
        <IconButton
          icon='account-plus-outline'
          size={40}
          // color='#F3D250'
          style={styles.add}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    backgroundColor: '#F3D250',
  },
});

export default AddFriend;
