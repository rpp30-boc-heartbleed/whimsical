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
      {/* Profile */}
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='user' testID='user' onPress={() => navigation.push('UserProfile')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='users' testID='users' onPress={() => navigation.push('FriendsList')} />
      </TouchableOpacity>
      {/* Add Errand */}
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='plus-circle' testID='plus-circle' onPress={() => navigation.push('NewErrand')} />
      </TouchableOpacity>
      {/* FriendsList */}
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='shopping-basket' testID='shopping-basket' onPress={() => navigation.push('ErrandRequests')} />
      </TouchableOpacity>
      {/* Dashboard */}
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='home' testID='home' onPress={() => navigation.navigate('Dashboard')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffffe',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 25,
    marginTop: 50,
    borderWidth: 2,
    // marginTop: 50,
    // borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EFEFEF',
  },
  icons: {
    alignItems: 'center',
    maxWidth: 50,
  },
});

export default NavBarContainer;
