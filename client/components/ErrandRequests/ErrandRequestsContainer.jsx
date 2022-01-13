import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import ErrandRequests from './ErrandRequests';

const ErrandRequestsContainer = ({ navigation }) => {
  return <ErrandRequests navigation={navigation} />;
};

export default ErrandRequestsContainer;
