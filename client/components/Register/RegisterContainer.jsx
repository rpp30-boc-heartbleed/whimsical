import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

const RegisterContainer = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View>
        <Text>Welcome to Quick Bagel!</Text>
        <Button
          title="Go to FriendsList"
          onPress={() => navigation.push('FriendsList')} // push the name property of the Stack.Screen component as defined in App.jsx
        />
        <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <StatusBar />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='first name'
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='last name'
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='address'
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder='confirm password'
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => {}}
        >
          <Text style={styles.buttonOutlineText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Have an acccount already?</Text>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0782F9',
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  loginText: {
    fontSize: 16,
    marginTop: 9,
  },
});

export default RegisterContainer;
