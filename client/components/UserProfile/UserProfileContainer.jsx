import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
// import storage from '../../config/firebase';
import 'firebase/storage';

import userProfileState from '../../state/atoms/userProfile';

const UserProfileContainer = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userProfileState);
  useEffect(() => {
    axios.get('http://localhost:3000/userProfile/get') // add '?name=Ojeiku' to queryString
      .then((data) => {
        console.log('loaded profile', data.data);
        setUser(data.data);
      })
      .catch((err) => console.error(err));
  }, [setUser]);
  const handleSubmitUsername = (e) => {
    e.preventDefault();
    const value = e.nativeEvent.text;
    console.log('old', user, 'target', e.target.value, e.nativeEvent.text);
    const newUser = {
      name: value,
      email: user.email,
      picture: user.picture,
      errandsCompleted: user.errandsCompleted,
      stars: user.stars,
      location: user.location,
    };
    axios.post('http://localhost:3000/userProfile/edit', {
      formerUser: user,
      updatedUser: newUser,
    })
      .then(() => {
        console.log('refreshing...', value);
        setUser(newUser);
      })
      .catch((err) => console.error(err));
  };
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const value = e.nativeEvent.text;
    console.log('old', user, 'target', e.target.value, e.nativeEvent.text);
    const newUser = {
      name: user.name,
      email: value,
      picture: user.picture,
      errandsCompleted: user.errandsCompleted,
      stars: user.stars,
      location: user.location,
    };
    axios.post('http://localhost:3000/userProfile/edit', {
      formerUser: user,
      updatedUser: newUser,
    })
      .then(() => {
        console.log('refreshing...', value);
        setUser(newUser);
      })
      .catch((err) => console.error(err));
  };
  const handleSubmitLocation = (e) => {
    e.preventDefault();
    const value = e.nativeEvent.text;
    console.log('old', user, 'target', e.target.value, e.nativeEvent.text);
    const newUser = {
      name: user.name,
      email: user.email,
      picture: user.picture,
      errandsCompleted: user.errandsCompleted,
      stars: user.stars,
      location: value,
    };
    axios.post('http://localhost:3000/userProfile/edit', {
      formerUser: user,
      updatedUser: newUser,
    })
      .then(() => {
        console.log('refreshing...', value);
        setUser(newUser);
      })
      .catch((err) => console.error(err));
  };
  const addImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const newUser = {
      name: user.name,
      email: user.email,
      picture: image.uri,
      errandsCompleted: user.errandsCompleted,
      stars: user.stars,
      location: user.location,
    };
    const data = new FormData;
    data.append('photoData', {
      uri: image.uri,
      type: 'image/jpeg',
      name: 'newImg',
    });
    data.append('name', user.name);
    data.append('newProfile', newUser);
    if (!image.cancelled) {
      setUser(newUser);
      // console.log(image.uri);
      // const blob = URL.createObjectURL(image.uri);
      console.log('blob', image);
      console.log('data', data);
      axios.post('http://localhost:3000/userProfile/image', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text>User Profile</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: user.picture,
          }}
        />

        <View>
          <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
            <Text>{user.picture ? 'Edit' : 'Upload'} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <Text>Username: {user.name}</Text>
        <Text>Stars: {user.stars}</Text>
        <Text>Errands Completed: {user.errandsCompleted}</Text>
        <Text>Location: {user.location}</Text>
      </View>
      <View style={styles.editForm}>
        <Text>EDIT</Text>
        <TextInput
          onSubmitEditing={handleSubmitUsername}
          placeholder='Username'
        />
        <TextInput
          // style={styles.editForm}
          // onSubmitEditing={handleSubmit}
          placeholder='Password'
        />
        <TextInput
          // style={styles.editForm}
          onSubmitEditing={handleSubmitEmail}
          placeholder='Email'
        />
        <TextInput
          // style={styles.editForm}
          onSubmitEditing={handleSubmitLocation}
          placeholder='Location'
        />
      </View>
      <View>
        <Button
          title="Go to Errand Tracker"
          onPress={() => navigation.push('ErrandTracker')} // push the name property of the Stack.Screen component as defined in App.jsx
        />
        <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <StatusBar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    margin: 10,
  },
  editForm: {
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
    margin: 10,
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default UserProfileContainer;
