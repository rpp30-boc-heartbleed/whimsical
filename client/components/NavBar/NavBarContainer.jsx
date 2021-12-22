import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

const MapContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the NavBar Component</Text>
      <Button
        title="Go to User Profile"
        onPress={() => navigation.push('UserProfile')} // push the name property of the Stack.Screen component as defined in App.jsx
      />
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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

export default MapContainer;
