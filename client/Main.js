import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DashboardContainer,
  ErrandTrackerContainer,
  LoginContainer,
  MapContainer,
  UserProfileContainer,
} from './components';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Test'>
        <Stack.Screen name='Dashboard' component={DashboardContainer} />
        <Stack.Screen name='ErrandTracker' component={ErrandTrackerContainer} />
        <Stack.Screen name='Login' component={LoginContainer} />
        <Stack.Screen name='Map' component={MapContainer} />
        <Stack.Screen name='UserProfile' component={UserProfileContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
