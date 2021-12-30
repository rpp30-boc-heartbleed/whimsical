import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

const DashboardHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.profilePic}>AA</Text>
      <Text style={styles.searchBar}>Search Bar Here</Text>
      <Text style={styles.logout}>logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
  },
  profilePic: {
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 75,
  },
  searchBar: {
    borderWidth: 1,
  },
  logout: {
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 75,
  },
});

export default DashboardHeader;
