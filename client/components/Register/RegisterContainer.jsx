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
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    location: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { firstName, lastName, location, email, password, confirmPassword } = userInfo;
  const [error, setError] = useState('');

  const handleOnChangeText = (value, fieldName) => {
    console.log('form fields', fieldName, value);
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const isValidField = (obj) => {
    // is field empty?
    return Object.values(obj).every((value) => value.trim());
  }
  const isValidEmail = (str) => {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(str);
  }
  const isValidForm = () => {
    // all fields must have value
    if(!isValidField(userInfo)) {
      return setError('All fields are required');
    }
    // check if email is valid
    if (!isValidEmail(email)) {
      return setError('Invalid email address');
    }
    // check if password has at least 8 characters
    if (!password.trim() || password.length < 8) {
      return setError('Password must be at least 8 characters');
    }
    // check if password matches confirmPassword
    if (password !== confirmPassword) {
      return setError('Passwords must match!');
    }
    return true;
  }
  const submitForm = () => {
    if(isValidForm()) {
      // submit form
      console.log('form info', userInfo);
      // if authenticated, navigate to Dashboard
       // navigation.navigate('Dashboard');
      // clear form
      setUserInfo({
        firstName: '',
        lastName: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setError('');
    }
  }
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
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder='first name'
          value={firstName}
          onChangeText={(value) => handleOnChangeText(value, 'firstName')}
        />
        <TextInput
          style={styles.input}
          placeholder='last name'
          value={lastName}
          onChangeText={(value) => handleOnChangeText(value, 'lastName')}
        />
        <TextInput
          style={styles.input}
          placeholder='address'
          autoCapitalize='none'
          value={location}
          onChangeText={(value) => handleOnChangeText(value, 'location')}
        />
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
        <TextInput
          style={styles.input}
          placeholder='confirm password'
          value={confirmPassword}
          autoCapitalize='none'
          onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={submitForm}
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
  error: {
    color: 'red',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
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
