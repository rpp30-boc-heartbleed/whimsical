import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBarContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text>This is the NavBar Component</Text> */}
      {/* Profile */}
      <TouchableOpacity>
        <Icon size={30} name='user' onPress={() => navigation.push('UserProfile')} />
      </TouchableOpacity>
      {/* Add Errand */}
      <TouchableOpacity>
        <Icon size={30} name='plus-circle' onPress={() => navigation.push('NewErrand')} />
      </TouchableOpacity>
      {/* FriendsList */}
      <TouchableOpacity>
        <Icon size={30} name='users' onPress={() => navigation.push('FriendsList')} />
      </TouchableOpacity>
      {/* Map */}
      <TouchableOpacity>
        <Icon size={30} name='map-marker' onPress={() => navigation.push('ErrandList')} />
      </TouchableOpacity>
      {/* Dashboard */}
      <TouchableOpacity>
        <Icon size={30} name='home' onPress={() => navigation.navigate('Dashboard')} />
      </TouchableOpacity>
      {/* <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} /> */}
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0782F9',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 25,
    marginTop: 50,
  },
});

export default NavBarContainer;
