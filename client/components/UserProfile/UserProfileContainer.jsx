import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HOST_URL } from '@env';
import axios from 'axios';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';
import {
  Avatar, Text,
} from 'react-native-paper';
import { Icon, Button, Badge } from 'react-native-elements';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { getAuth, updatePassword } from 'firebase/auth';
import { COLORS, SIZES, icons } from '../../constants';
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
  const [completed, setCompleted] = useState(0);
  const [confirmPass, setConfirmPass] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${HOST_URL}/userProfile/get?email=${auth.auth.currentUser.email}`) // add '?name=Ojeiku' to queryString
      // axios.get(`http://localhost:3000/userProfile/get?email=${auth.auth.currentUser.email}`) // add '?name=Ojeiku' to queryString
      .then((data) => {
        console.log('loaded profile', data.data);
        setUser(data.data.data[0]);
        setCompleted(data.data.info);
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
    axios
      .post(`${HOST_URL}/userProfile/edit`, {
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
    axios
      .post(`${HOST_URL}/userProfile/edit`, {
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
    axios
      .post(`${HOST_URL}/userProfile/edit`, {
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
    // eslint-disable-next-line no-undef
    const data = new FormData();
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
      axios
        .post(`${HOST_URL}/userProfile/image`, data, {
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
      Alert('The password was too short. Please try again');
    } else if (pass !== confirmPass) {
      Alert('The passwords do not match. Please try again');
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Avatar.Image
              size={100}
              style={styles.avatar}
              source={{
                uri: user.picture,
              }}
            />
            <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
              <Icon name='photo' size={13} raised color='black' />
            </TouchableOpacity>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.location}>{user.location}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <View style={styles.centered}>
              <Text style={styles.starCount}>
                <Image source={icons.star} style={styles.starImage} /> :     {user.stars}
              </Text>
              <Text style={styles.errands}>
                <View style={styles.badge}><Text style={styles.badgeText} value={user.errandsCompleted} status="success">{user.errandsCompleted}</Text></View>
                <Text style={{ fontSize: 48 }}>Errands Completed!</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.editForm}>
          <View style={styles.item}>

            <Button
              onPress={() => {
                setShowModal(!showModal);
              }}
              buttonStyle={{
                backgroundColor: '#3da9fc',
                borderColor: 'transparent',
                // borderWidth: 0,
                borderRadius: 30,
              }}
              icon={{
                name: 'pencil',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              titleStyle={{ color: '#fff', fontSize: 14, fontWeight: '400' }}
              title='EDIT PROFILE'
            />
            <Modal
              animationType='slide'
              transparent={showModal}
              visible={showModal}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setShowModal(!showModal);
              }}
            >
              <View style={styles.modalView}>
                <View style={styles.betterView}>
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
                    onPress={() => {
                      setShowModal(false);
                      setShowPassModal(false);
                    }}
                    style={[styles.button, styles.buttonClose]}
                    // title="Cancel"
                  >
                    <Text style={styles.textStyle}>CLOSE</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Button
              onPress={() => {
                setShowPassModal(!showPassModal);
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginBottom: 90,
              }}
              buttonStyle={{
                backgroundColor: '#3da9fc',
                borderColor: 'transparent',
                // borderWidth: 0,
                borderRadius: 30,
              }}
              icon={{
                name: 'unlock',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ color: '#fff', fontSize: 14, fontWeight: '400' }}
              title='CHANGE PASSWORD'
            />
          </View>
          <Modal
            animationType='slide'
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
                  onChangeText={(e) => {
                    console.log(e);
                    setPass(e);
                  }}
                  style={styles.input}
                  placeholder='Password'
                  autoCapitalize='none'
                  secureTextEntry
                />
                <TextInput
                  onChangeText={(e) => {
                    console.log(e);
                    setConfirmPass(e);
                  }}
                  style={styles.input}
                  placeholder='Confirm Password'
                  autoCapitalize='none'
                  secureTextEntry
                />
                <Pressable
                  onPress={() => {
                    setShowModal(false);
                    setShowPassModal(false);
                  }}
                  style={[styles.button, styles.buttonClose]}
                >
                  <Text style={styles.textStyle}>CLOSE</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setShowPassModal(!showPassModal);
                    handlePass();
                  }}
                >
                  <Text style={styles.textStyle}>Change Password</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
      <View>
        <NavBarContainer navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    marginTop: 25,
    position: 'absolute',
  },
  location: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  name: {
    marginTop: 50,
    marginBottom: 16,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  badge: {
    height: 50,
    width: 50,
    backgroundColor: 'limegreen',
    color: 'white',
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  email: {
    padding: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  uploadBtn: {
    marginBottom: 7,
    justifyContent: 'center',
    left: 48,
    top: 40,
    textShadowOffset: { width: 5, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 1,
  },
  stats: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starImage: {
    width: 5,
    height: 5,
    // paddingHorizontal: 25,
    margin: 25,
  },
  starCount: {
    fontSize: 50,
    fontWeight: '600',
    alignItems: 'center',
  },
  errands: {
    marginTop: 2,
    paddingHorizontal: 25,
    fontSize: 25,
    fontWeight: '600',
    justifyContent: 'space-between',
  },
  editForm: {
    borderRadius: 30,
    opacity: 0.75,
    backgroundColor: '#90CCF4',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  betterView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 50,
  },
  passView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    zIndex: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginBottom: 10,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textBox: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default UserProfileContainer;
