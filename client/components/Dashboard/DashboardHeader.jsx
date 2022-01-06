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

const DashboardHeader = ({ navigation }) => {
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
        <Text style={styles.profilePic}>AA</Text>
        <TextInput style={styles.searchBar} placeholder='Search' />
        <Button title='sign out' onPress={() => handleSignOut(auth)} />
      </View>
      <View style={styles.filter}>
        <Text style={styles.filterText}>Current Filter: Most Recent ▼</Text>
      </View>
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
    borderRadius: 25,
    borderColor: 'green',
    marginBottom: 5,
    marginRight: 25,
    padding: 15,
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
