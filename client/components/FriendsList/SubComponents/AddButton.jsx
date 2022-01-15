import React from 'react';
import { useRecoilState } from 'recoil';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import addFriendState from '../../../state/atoms/addFriends';

const AddButton = ({ style }) => {
  const [listType, setListType] = useRecoilState(addFriendState);

  const onPress = () => {
    setListType(!listType);
  };

  return (
    <View style={style}>
      <TouchableOpacity>
        <IconButton
          icon='account-plus-outline'
          size={40}
          // color='#F3D250'
          style={styles.add}
          onPress={onPress}
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

export default AddButton;
