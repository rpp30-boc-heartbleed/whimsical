import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HOST_URL } from '@env';
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
  Modal,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getAuth, updatePassword } from 'firebase/auth';
import auth from '../../config/firebase';
// import storage from '../../config/firebase';
import 'firebase/storage';
import userProfileState from '../../state/atoms/userProfile';
// console.log(auth);
import NavBarContainer from '../NavBar/NavBarContainer';

const UserProfileContainer = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userProfileState);
  const [pass, setPass] = useState('');
  const [stars, setStars] = useState(0);
  const [confirmPass, setConfirmPass] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);

  useEffect(() => {
    axios.get(`${HOST_URL}/userProfile/get?email=${auth.auth.currentUser.email}`) // add '?name=Ojeiku' to queryString
    // axios.get(`http://localhost:3000/userProfile/get?email=${auth.auth.currentUser.email}`) // add '?name=Ojeiku' to queryString
      .then((data) => {
        console.log('loaded profile', data.data);
        setUser(data.data.data[0]);
        setStars(data.data.info);
      })
      .catch((err) => console.error(err));
  }, [setUser]);
  const handleSubmitUsername = (e) => {
    e.preventDefault();
    const value = e.nativeEvent.text;
    // console.log('old', user, 'target', e.target.value, e.nativeEvent.text);
    const newUser = {
      name: value,
      email: user.email,
      picture: user.picture,
      errandsCompleted: user.errandsCompleted,
      stars: user.stars,
      location: user.location,
    };
    axios.post(`${HOST_URL}/userProfile/edit`, {
      formerUser: user,
      updatedUser: newUser,
    })
      .then(() => {
        // console.log('refreshing...', value);
        setUser(newUser);
      })
      .catch((err) => console.error(err));
  };
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const value = e.nativeEvent.text;
    // console.log('old', user, 'target', e.target.value, e.nativeEvent.text);
    const newUser = {
      name: user.name,
      email: value,
      picture: user.picture,
      errandsCompleted: user.errandsCompleted,
      stars: user.stars,
      location: user.location,
    };
    axios.post(`${HOST_URL}/userProfile/edit`, {
      formerUser: user,
      updatedUser: newUser,
    })
      .then(() => {
        // console.log('refreshing...', value);
        setUser(newUser);
      })
      .catch((err) => console.error(err));
  };
  const handleSubmitLocation = (e) => {
    e.preventDefault();
    const value = e.nativeEvent.text;
    // console.log('old', user, 'target', e.target.value, e.nativeEvent.text);
    const newUser = {
      name: user.name,
      email: user.email,
      picture: user.picture,
      errandsCompleted: user.errandsCompleted,
      stars: user.stars,
      location: value,
    };
    axios.post(`${HOST_URL}/userProfile/edit`, {
      formerUser: user,
      updatedUser: newUser,
    })
      .then(() => {
        // console.log('refreshing...', value);
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
      // axios.post('http://localhost:3000/userProfile/image', data, {
      axios.post(`${HOST_URL}/userProfile/image`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((data) => {
          console.log('Image Saved!');
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const handlePass = () => {
    console.log('passwords:', pass, confirmPass);
    if (pass === confirmPass && pass.length >= 8) {
      const user = auth.auth.currentUser;
      // console.log('user', user)
      const newPassword = pass;

      updatePassword(user, newPassword)
        .then((data) => {
          // If update is successful.
          console.log('update successfull!', data);
        })
        .catch((err) => {
          // If an error occurred
          console.error(err);
        });
    } else if (pass.length < 8) {
      alert('The password was too short. Please try again');
    } else if (pass !== confirmPass) {
      alert('The passwords do not match. Please try again');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text
          style={styles.titleText}
        >{user.name}'s Profile</Text>
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

        <Text
          style={styles.textile}
        >Username: {user.name}</Text>
        <Text
          style={styles.textile}
        >Email Address: {user.email}</Text>
        <Text
          style={styles.textile}
        >Stars
          <AntDesign name="star" size={20} color="blue" />:  {stars}
          </Text>
        <Text
          style={styles.textile}
        >Errands Completed <AntDesign name="checksquare" size={20} color="green" />: {user.errandsCompleted}</Text>
        <Text
          style={styles.textile}
        >Location: {user.location}</Text>
      </View>
      <View style={styles.editForm}>
        <Button
          onPress={() => { setShowModal(!showModal); }}
          title="Edit Profile Settings"
        />
        <Modal
          animationType="slide"
          transparent={showModal}
          visible={showModal}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setShowModal(!showModal);
          }}
        >
          <View
            style={styles.modalView}
          >
            <View
              style={styles.betterView}
            >
              <Text style={{ marginTop: 20 }}>EDITING YOUR PROFILE</Text>
              <TextInput
                onSubmitEditing={handleSubmitUsername}
                placeholder='Username'
                style={styles.input}
                />
              <TextInput
                // style={styles.editForm}
                onSubmitEditing={handleSubmitEmail}
                placeholder='Email'
                style={styles.input}
                />
              <TextInput
                // style={styles.editForm}
                onSubmitEditing={handleSubmitLocation}
                placeholder='Location'
                style={styles.input}
                />
              <Pressable
                onPress={() => { setShowModal(false); setShowPassModal(false); }}
                style={[styles.button, styles.buttonClose]}
                // title="Cancel"
                >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <TextInput
          onSubmitEditing={handleSubmitUsername}
          placeholder='Username'
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
        /> */}
        <Button
          onPress={() => { setShowPassModal(!showPassModal); }}
          title="Change Password"
        />
      </View>
      <View>
        <NavBarContainer navigation={navigation} />
      </View>
      <Modal
        animationType="slide"
        transparent={showPassModal}
        visible={showPassModal}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setShowPassModal(!showPassModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              onChangeText={(e) => { console.log(e); setPass(e); }}
              style={styles.input}
              placeholder='Password'
              autoCapitalize='none'
              secureTextEntry
              />
            <TextInput
              onChangeText={(e) => { console.log(e); setConfirmPass(e); }}
              style={styles.input}
              placeholder='Confirm Password'
              autoCapitalize='none'
              secureTextEntry
            />
            <Pressable
              onPress={() => { setShowModal(false); setShowPassModal(false); }}
              style={[styles.button, styles.buttonClose]}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setShowPassModal(!showPassModal); handlePass();
              }}
            >
              <Text style={styles.textStyle}>Change Password</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 150,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  betterView: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 50,
  },
  passView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textBox: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textile: {
    // flex: '1',
    padding: 10,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UserProfileContainer;
