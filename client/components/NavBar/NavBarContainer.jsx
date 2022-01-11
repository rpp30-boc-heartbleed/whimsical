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
      <TouchableOpacity>
        <Icon size={30} name='user' testID='user' onPress={() => navigation.push('UserProfile')} />
      </TouchableOpacity>
      {/* Add Errand */}
      <TouchableOpacity>
        <Icon size={30} name='plus-circle' testID='plus-circle' onPress={() => navigation.push('NewErrand')} />
      </TouchableOpacity>
      {/* FriendsList */}
      <TouchableOpacity>
        <Icon size={30} name='users' testID='users' onPress={() => navigation.push('FriendsList')} />
      </TouchableOpacity>
      {/* Map */}
      <TouchableOpacity>
        <Icon size={30} name='shopping-basket' testID='shopping-basket' onPress={() => navigation.push('ErrandRequests')} />
      </TouchableOpacity>
      {/* Dashboard */}
      <TouchableOpacity>
        <Icon size={30} name='home' testID='home' onPress={() => navigation.navigate('Dashboard')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ebc7',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 25,
    marginTop: 50,
  },
});

export default NavBarContainer;
