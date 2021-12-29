import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DashboardContainer,
  ErrandTrackerContainer,
  FriendsListContainer,
  LoginContainer,
  MapContainer,
  NavBarContainer,
  RegisterContainer,
  UserProfileContainer,
} from '../components';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginContainer} />
        <Stack.Screen name='Register' component={RegisterContainer} />
        <Stack.Screen name='Dashboard' component={DashboardContainer} />
        <Stack.Screen name='ErrandTracker' component={ErrandTrackerContainer} />
        <Stack.Screen name='Map' component={MapContainer} />
        <Stack.Screen name='NavBar' component={NavBarContainer} />
        <Stack.Screen name='UserProfile' component={UserProfileContainer} />
        <Stack.Screen name='FriendsList' component={FriendsListContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
