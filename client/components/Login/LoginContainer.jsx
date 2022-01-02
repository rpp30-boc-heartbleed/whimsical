/* eslint-disable no-useless-escape */
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
import NavBarContainer from '../NavBar/NavBarContainer';

const LoginContainer = ({ navigation }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [authenticationInfo, setAuthenticationInfo] = useState({
    email: '',
    password: '',
  });
  const { email, password } = authenticationInfo;
  const [error, setError] = useState('');

  const handleOnChangeText = (value, fieldName) => {
    console.log('form fields', fieldName, value);
    setAuthenticationInfo({ ...authenticationInfo, [fieldName]: value });
  };
  const isValidField = (obj) => {
    // is field empty?
    return Object.values(obj).every((value) => value.trim());
  };
  const isValidEmail = (str) => {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(str);
  };
  const isValidForm = () => {
    // all fields must have value
    if (!isValidField(authenticationInfo)) {
      return setError('All fields are required');
    }
    // check if email is valid
    if (!isValidEmail(email)) {
      return setError('Invalid email address');
    }
    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      // submit form
      console.log('form info', authenticationInfo);
      // if authenticated, navigate to Dashboard
      // navigation.navigate('Dashboard');
      // clear form
      setAuthenticationInfo({
        email: '',
        password: '',
      });
      setError('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Quick Bagel!</Text>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder='email'
            autoCapitalize='none'
            value={email}
            onChangeText={(value) => handleOnChangeText(value, 'email')}
          />
          <TextInput
            style={styles.input}
            placeholder='password'
            autoCapitalize='none'
            value={password}
            onChangeText={(value) => handleOnChangeText(value, 'password')}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={submitForm}
          >
            <Text style={[styles.buttonText, styles.buttonOutlineText]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don&apos;t have an acccount?</Text>
          <Button title='Register' onPress={() => navigation.push('Register')} />
          <Text style={styles.registerText}>now.</Text>
        </View>
      </KeyboardAvoidingView>
      {/* navbar at bottom of screen */}
      <View style={styles.navbar}>
        <NavBarContainer navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 15,
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
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
    width: '30%',
    padding: 15,
    borderRadius: 10,
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
    alignSelf: 'center',
  },
  buttonOutlineText: {
    color: '#0782F9',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },
  registerText: {
    fontSize: 16,
    marginTop: 9,
  },
  navbar: {
    justifyContent: 'flex-end',
    alignContent: 'space-between',
  },
});

export default LoginContainer;
