/* eslint-disable react-hooks/exhaustive-deps */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOST_URL } from '@env';
import axios from 'axios';
import {
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { errandState } from '../state/atoms/errands';
import {
  DashboardContainer,
  NewErrandContainer,
  ErrandTrackerContainer,
  FriendsListContainer,
  LoginContainer,
  MapContainer,
  ErrandRequestsContainer,
  NavBarContainer,
  RegisterContainer,
  UserProfileContainer,
  Chat,
} from '../components';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const setErrands = useSetRecoilState(errandState);

  const getErrands = async () => {
    const errandsResp = await axios.get(`${HOST_URL}/getErrandData`);
    setErrands(errandsResp.data);
  };

  useEffect(() => {
    getErrands();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginContainer} />
        <Stack.Screen name='Register' component={RegisterContainer} />
        <Stack.Screen name='Dashboard' component={DashboardContainer} />
        <Stack.Screen name='NewErrand' component={NewErrandContainer} />
        <Stack.Screen name='ErrandTracker' component={ErrandTrackerContainer} />
        <Stack.Screen name='Map' component={MapContainer} />
        <Stack.Screen name='ErrandRequests' component={ErrandRequestsContainer} />
        <Stack.Screen name='NavBar' component={NavBarContainer} />
        <Stack.Screen name='UserProfile' component={UserProfileContainer} />
        <Stack.Screen name='FriendsList' component={FriendsListContainer} />
        <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
