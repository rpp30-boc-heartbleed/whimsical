import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { HOST_URL } from '@env';
import auth from '../../config/firebase';

const RegisterContainer = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    imageURL: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {
    name,
    streetAddress,
    city,
    state,
    zipCode,
    imageURL,
    email,
    password,
    confirmPassword,
  } = userInfo;
  const [error, setError] = useState('');

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const handleOnChangeText = (value, fieldName) => {
    // console.log('form fields', fieldName, value);
    setUserInfo({ ...userInfo, [fieldName]: value });
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
    if (!isValidField(userInfo)) {
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
  };

  // post registration info to server
  const postUserData = (url = '', data = {}) => {
    // eslint-disable-next-line no-undef
    axios
      .post(url, data)
      .then((res) => {
        // console.log(res);
        // add email and password to firebase authentication
        handleSignUp(auth, email, password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // create user authentication account in firebase
  const handleSignUp = (auth, email, password) => {
    // console.log('hit sign up');
    createUserWithEmailAndPassword(auth.auth, email, password)
      .then((userCredentials) => {
        const { user } = userCredentials;
        // console.log('registered', user.email, user.uid);
        // navigation.navigate('Dashboard');
        navigation.replace('Dashboard');
      })
      .catch((err) => {
        // console.error('error', err.code);
        if (
          err.code ===
'auth/invalid-value-(email),-starting-an-object-on-a-scalar-field'
        ) {
          setError('Please enter a valid email address');
        }
        if (err.code === 'auth/email-already-in-use') {
          setError(
            'This email is already registered. Please go to the Login screen to sign in.',
          );
        }
      });
  };

  // submit form to db and firebase auth -> auto login user
  const submitForm = () => {
    if (isValidForm()) {
      // add user data to mongoDB
      postUserData(
        // 'http://localhost:3000/register',
        `${HOST_URL}/register`,
        // 'http://ec2-34-239-133-230.compute-1.amazonaws.com/register',
        {
          name,
          streetAddress,
          city,
          state,
          zipCode,
          imageURL,
          email,
        },
      );
      // clear form
      setUserInfo({
        name: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        imageURL: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView centerContent bounces showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>Welcome to Quick Bagel!</Text>
          {/* <StatusBar /> */}
        </View>
        <View style={styles.inputContainer}>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder='name'
            value={name}
            testID='name'
            left={<TextInput.Icon name='pencil' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'name')}
          />
          <TextInput
            style={styles.input}
            placeholder='street address'
            autoCapitalize='none'
            value={streetAddress}
            testID='streetAddress'
            left={<TextInput.Icon name='home' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'streetAddress')}
          />
          <TextInput
            style={styles.input}
            placeholder='city'
            autoCapitalize='none'
            value={city}
            testID='city'
            left={<TextInput.Icon name='city' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'city')}
          />
          <TextInput
            style={styles.input}
            placeholder='state'
            autoCapitalize='none'
            value={state}
            testID='state'
            left={<TextInput.Icon name='map' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'state')}
          />
          <TextInput
            style={styles.input}
            placeholder='zip code'
            autoCapitalize='none'
            value={zipCode}
            testID='zipCode'
            left={<TextInput.Icon name='map' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'zipCode')}
          />
          <TextInput
            style={styles.input}
            placeholder='image url'
            autoCapitalize='none'
            value={imageURL}
            testID='imageURL'
            left={<TextInput.Icon name='camera' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'imageURL')}
          />
          <TextInput
            style={styles.input}
            placeholder='email'
            autoCapitalize='none'
            value={email}
            testID='email'
            left={<TextInput.Icon name='email' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'email')}
          />
          <TextInput
            style={styles.input}
            placeholder='password'
            autoCapitalize='none'
            value={password}
            testID='password'
            left={<TextInput.Icon name='form-textbox-password' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) => handleOnChangeText(value, 'password')}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder='confirm password'
            value={confirmPassword}
            autoCapitalize='none'
            testID='confirmPassword'
            left={<TextInput.Icon name='form-textbox-password' />}
            dense
            mode='outlined'
            outlineColor="#fff"
            onChangeText={(value) =>
              handleOnChangeText(value, 'confirmPassword')
            }
            secureTextEntry
          />
        </View>

        <Button
          title='Create Account'
          onPress={submitForm}
          testID='submitRegister'
          raised
          buttonStyle={{
            backgroundColor: '#F3D250',
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: 'bold', color: 'black' }}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Have an acccount already?</Text>
          <TouchableOpacity
            title='Login'
            testID='login'
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90CCF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#272343',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 15,
  },
  error: {
    color: '#00214d',
    backgroundColor: '#F78888',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  },
  inputContainer: {
    width: '95%',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 1,
    marginTop: 5,
    margin: 10,
    opacity: 0.8,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F3D250',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonOutline: {
    backgroundColor: '#F3D250',
    marginTop: 5,
    borderColor: '#F3D250',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  buttonOutlineText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#00214d',
    alignSelf: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  loginText: {
    fontSize: 16,
    marginTop: 5,
  },
  loginLink: {
    fontSize: 16,
    marginTop: 5,
    color: '#0057D9',
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default RegisterContainer;
