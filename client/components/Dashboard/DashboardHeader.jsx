import React, { useState, useEffect, Component } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import {
  View, Text, Image, StyleSheet, TextInput, StatusBar, Button,
} from 'react-native';
import { signOut } from 'firebase/auth';
import auth from '../../config/firebase';
import userProfileState from '../../state/atoms/userProfile';

const DashboardHeader = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userProfileState);

  const handleSignOut = (auth) => {
    signOut(auth.auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.outercontainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: user.picture }}
          style={styles.profilePic}
        />

        <TextInput
          style={styles.searchBar}
          placeholder='Search'
          autoCapitalize='none'
        />

        <Button title='sign out' onPress={() => handleSignOut(auth)} />

      </View>
      {/* <View style={styles.filter}>
        <Text style={styles.filterText}>Current Filter: Most Recent ▼</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
  },
  profilePic: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'green',
    marginBottom: 5,
    marginRight: 25,
    padding: 15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#0782F9',
    borderRadius: 10,
    marginBottom: 5,
    width: 225,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  filter: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  filterText: {
    fontSize: 8,
    color: 'darkblue',
  },
});

export default DashboardHeader;
