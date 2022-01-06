import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import filteredErrandsState from '../../state/selectors/filterErrandsByRequestor';
import ErrandList from './ErrandList';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandListContainer = ({ navigation }) => {
  const errands = useRecoilValue(filteredErrandsState);

  return (
    <>
      <ErrandList navigation={navigation} />
      <View>
        <NavBarContainer navigation={navigation} />
      </View>
    </>
  );
};

export default ErrandListContainer;
