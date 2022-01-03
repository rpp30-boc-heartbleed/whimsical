import React, { useState } from 'react';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  View,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

import friendsByNameState from '../../state/atoms/friendsByName';
import filteredByNameSelector from '../../state/selectors/filterFriendsByName';

const Search = ({ style }) => {
  const setNameFilter = useSetRecoilState(friendsByNameState);

  const onChange = (value) => {
    setNameFilter(value);
  };

  return (
    <View>
      <TextInput
        style={style}
        placeholder='SEARCH'
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // search: {
  //   borderRadius: 10,
  //   fontSize: 14,
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   width: '70%',
  //   height: 40,
  //   paddingHorizontal: 100,
  // },
});

export default Search;
