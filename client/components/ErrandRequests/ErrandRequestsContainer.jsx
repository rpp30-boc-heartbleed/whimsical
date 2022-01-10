import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import ErrandRequests from './ErrandRequests';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandRequestsContainer = ({ navigation }) => {
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
