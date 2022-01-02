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
        <TextInput style={styles.searchBar}>Search Bar Here</TextInput>
        {/* <Text style={styles.logout}>logout</Text> */}
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
    borderWidth: 1,
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
    borderRadius: 10,
    marginBottom: 5,
    marginRight: 25,
  },
  searchBar: {
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: 35,
    paddingRight: 35,
  },
  logout: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 25,
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
