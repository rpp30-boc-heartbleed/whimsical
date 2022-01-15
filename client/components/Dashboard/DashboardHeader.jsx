import React, { useState, useEffect, Component } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import {
  View, Text, Image, StyleSheet, TextInput, StatusBar,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Button } from 'react-native-elements';
import { signOut } from 'firebase/auth';
import auth from '../../config/firebase';
import userProfileState from '../../state/atoms/userProfile';
import dashSearchState from '../../state/atoms/dashSearch';
import SharedSearch from '../Shared/SearchBar';

const DashboardHeader = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userProfileState);
  const [dashSearch, setDashSearch] = useRecoilState(dashSearchState);

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
        {/* <Image
          source={{ uri: user.picture }}
          style={styles.profilePic}
        /> */}
        <Avatar.Image
          size={60}
          style={styles.profilePic}
          source={{
            uri: user.picture,
          }}
        />

        {/* <TextInput
          style={styles.searchBar}
          placeholder='Search'
          autoCapitalize='none'
          onChangeText={(text) => setDashSearch(text)}
        /> */}

        <SharedSearch style={styles.searchBar} placeholder='Search' />

        <Button
          buttonStyle={{
            backgroundColor: '#F78888',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 20,
          }}
          containerStyle={{
            marginLeft: 5,
            marginBottom: 3,
            width: 95,
          }}
          title='sign out'
          onPress={() => handleSignOut(auth)}
        />

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
    marginBottom: 5,
    marginRight: 4,
    backgroundColor: '#5DA2D5',
    // resizeMode: 'contain',
  },
  searchBar: {
    borderWidth: 0.5,
    borderColor: '#DEE1E6',
    borderRadius: 10,
    marginBottom: 5,
    width: 225,
    paddingHorizontal: 10,
    paddingVertical: 4,
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
