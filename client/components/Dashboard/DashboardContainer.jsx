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
// const auth = getAuth();

const DashboardContainer = ({ navigation }) => {
  const handleSignOut = (auth) => {
    console.log('auth', auth);
    signOut(auth.auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text>This is the Dashboard Component</Text>
      <Button
        title="Go to Errand Tracker"
        onPress={() => navigation.push('ErrandTracker')} // push the name property of the Stack.Screen component as defined in App.jsx
      />
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title='sign out' onPress={() => handleSignOut(auth)} />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardContainer;
