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

const LoginContainer = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => {}}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don&apos;t have an acccount?</Text>
        <Button title='Register' onPress={() => navigation.navigate('Register')} />
        <Text style={styles.registerText}>now.</Text>
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
  registerContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  registerText: {
    fontSize: 16,
    marginTop: 9,
  },
});

export default LoginContainer;
