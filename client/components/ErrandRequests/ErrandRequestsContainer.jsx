import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import filteredErrandsState from '../../state/selectors/filterErrandsByRequestor';
import ErrandRequests from './ErrandRequests';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandRequestsContainer = ({ navigation }) => {
  const errands = useRecoilValue(filteredErrandsState);

  return (
    <>
      <ErrandRequests navigation={navigation} />
      <View>
        <NavBarContainer navigation={navigation} />
      </View>
    </>
  );
};

export default ErrandRequestsContainer;
