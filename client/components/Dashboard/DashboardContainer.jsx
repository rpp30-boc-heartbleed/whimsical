import React, { useState, useEffect, Component } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import {
  View, ScrollView, StyleSheet, Button,
} from 'react-native';
import { HOST_URL } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import DashboardBody from './DashboardBody';
import NavBar from '../NavBar/NavBarContainer';
import auth from '../../config/firebase';
import userProfileState from '../../state/atoms/userProfile';

const DashboardContainer = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userProfileState);

  useEffect(() => {
    axios.get(`${HOST_URL}/userProfile/get?email=${auth.auth.currentUser.email}`)
      .then((data) => {
        setUser(data.data.data[0]);
      })
      .catch((err) => console.error(err));
  }, [setUser]);

  return (
    <View style={styles.container}>
      {/* <NavBar navigation={navigation} /> */}
      <DashboardHeader navigation={navigation} />
      <DashboardBody navigation={navigation} />
      <ScrollView />
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DashboardContainer;
