import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';
import { signOut } from 'firebase/auth';
import auth from '../../config/firebase';
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import DashboardBody from './DashboardBody';

const DashboardContainer = ({ navigation }) => {
  const handleSignOut = (auth) => {
    console.log('auth', auth);
    signOut(auth.auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <DashboardStats />
      <DashboardBody />

      <View style={styles.links}>
        <Button title="Go to Errand Tracker" onPress={() => navigation.push('ErrandTracker')} />
        <Button title='sign out' onPress={() => handleSignOut(auth)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  links: {
    paddingTop: 20,
  },
});

export default DashboardContainer;
