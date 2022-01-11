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
        <Text style={styles.text}>
          User
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='users' testID='users' onPress={() => navigation.push('FriendsList')} />
        <Text style={styles.text}>
          Friends
        </Text>
      </TouchableOpacity>
      {/* Add Errand */}
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='plus-circle' testID='plus-circle' onPress={() => navigation.push('NewErrand')} />
        <Text style={styles.text}>
          Add Errand
        </Text>
      </TouchableOpacity>
      {/* FriendsList */}
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='shopping-basket' testID='shopping-basket' onPress={() => navigation.push('ErrandRequests')} />
        <Text style={styles.text}>
          Errand List
        </Text>
      </TouchableOpacity>
      {/* Dashboard */}
      <TouchableOpacity style={styles.icons}>
        <Icon size={30} color='#3da9fc' name='home' testID='home' onPress={() => navigation.navigate('Dashboard')} />
        <Text style={styles.text}>
          Dashboard
        </Text>
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
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ECECEC',
  },
  icons: {
    alignItems: 'center',
    maxWidth: 50,
  },
  text: {
    fontSize: 9.5,
  },
});

export default NavBarContainer;
