/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  COLORS,
  SIZES,
  icons,
} from '../../constants';
import auth from '../../config/firebase';
import NavBarContainer from '../NavBar/NavBarContainer';

const LoginContainer = ({ navigation }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  const [authenticationInfo, setAuthenticationInfo] = useState({
    email: '',
    password: '',
  });
  const { email, password } = authenticationInfo;
  const [error, setError] = useState('');

  const handleOnChangeText = (value, fieldName) => {
    // console.log('form fields', fieldName, value);
    setAuthenticationInfo({ ...authenticationInfo, [fieldName]: value });
  };

  // form validation
  const isValidField = (obj) => {
    // is field empty?
    return Object.values(obj).every((value) => value.trim());
  };
  const isValidEmail = (str) => {
    // eslint-disable-next-line no-useless-escape
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

  // authenticate user in firebase
  const handleLogin = (auth, email, password) => {
    signInWithEmailAndPassword(auth.auth, email, password)
      .then(async (userCredentials) => {
        const { user } = userCredentials;
        // console.log('logged in with', user.email, user.uid);
        navigation.replace('Dashboard');
      })
      .catch((err) => {
        // console.log('error', err);
        console.log('err code', err.code);
        if (err.code === 'auth/invalid-value-(email),-starting-an-object-on-a-scalar-field') {
          setError('Please enter a valid email address');
        }
        if (err.code === 'auth/wrong-password') {
          setError('Please enter a valid password');
        }
        if (err.code === 'auth/user-not-found') {
          setError('Please check the email address and try again');
        }
        // eslint-disable-next-line max-len
        setError("We're sorry. We're experiencing some technical difficulties. Please try again.");
      });
  };

  // submit form -> authenticate and login user
  const submitForm = () => {
    if (isValidForm()) {
      // submit form
      // console.log('form info', authenticationInfo);
      // if authenticated, navigate to Dashboard
      handleLogin(auth, email, password);
      // clear form
      setAuthenticationInfo({
        email: '',
        password: '',
      });
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Quick Bagel!</Text>
      <Image style={styles.image} size={65} source={require('../../assets/icons/minilogo.png')} />
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          {error ? <Text style={styles.error} testID='errorMsg'>{error}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder='email'
            autoCapitalize='none'
            value={email}
            testID='email'
            left={<TextInput.Icon name='account' />}
            onChangeText={(value) => handleOnChangeText(value, 'email')}
          />
          <TextInput
            style={styles.input}
            placeholder='password'
            autoCapitalize='none'
            value={password}
            testID='password'
            left={<TextInput.Icon name='form-textbox-password' />}
            onChangeText={(value) => handleOnChangeText(value, 'password')}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={submitForm}
            testID='submitLogin'
          >
            <Text style={[styles.buttonText, styles.buttonOutlineText]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don&apos;t have an acccount?</Text>
          <Button borderWidth='2' borderRadius='10' color='#00ebc7' title='Register' testID='register' onPress={() => navigation.push('Register')} />
          <Text style={styles.registerText}>now.</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6e85',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#fffffe',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 15,
  },
  error: {
    color: '#fffffe',
    backgroundColor: '#00ebc7',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 15,
  },
  inputContainer: {
    width: '65%',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    // paddingHorizontal: 15,
    // paddingVertical: ,
    padding: 1,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#00214d',
    borderRadius: 5,
    // marginTop: 5,
    margin: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00ebc7',
    width: '30%',
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: '#00ebc7',
    marginTop: 5,
    borderColor: '#00ebc7',
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
  },
  buttonOutlineText: {
    color: '#00214d',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },
  registerText: {
    fontSize: 16,
    marginTop: 9,
    color: '#00214d',
    padding: 4,
  },
  navbar: {
    justifyContent: 'flex-end',
    alignContent: 'space-between',
  },
});

export default LoginContainer;
