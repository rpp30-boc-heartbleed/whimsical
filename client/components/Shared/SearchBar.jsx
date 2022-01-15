import React, { useState } from 'react';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  View,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

import { Searchbar } from 'react-native-paper';

import searchBarState from '../../state/atoms/searchBar';
import filteredByNameSelector from '../../state/selectors/filterByName';

const SearchBar = ({ style }) => {
  const setNameFilter = useSetRecoilState(searchBarState);

  const onChange = (value) => {
    setNameFilter(value);
  };

  return (
    <View>
      <Searchbar
        style={style}
        placeholder='Search'
        onChangeText={onChange}
        autoCapitalize='none'
      />
    </View>
  );
};

export default SearchBar;
