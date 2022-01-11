import React from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  View, Text, StyleSheet, TextInput, StatusBar, Button, ScrollView,
} from 'react-native';
import { HOST_URL } from '@env';
import NavBar from '../NavBar/NavBarContainer';
import { errandState } from '../../state/atoms/errands';
import newErrandSelector from '../../state/selectors/newErrandSelector';
import userProfileState from '../../state/atoms/userProfile';

const NewErrandContainer = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userProfileState);
  const setErrands = useSetRecoilState(errandState);
  const { email } = useRecoilValue(userProfileState);

  const newErrandView = useRecoilValue(newErrandSelector);
  const url = `${HOST_URL}/newErrand`;
  const url2 = `${HOST_URL}/newChatID`;
  const newErrandObj = { email };
  newErrandObj.username = user.name;
  newErrandObj.userAvatar = user.picture;

  async function getChatID(data) {
    try {
      const res = await axios.post(url2, data);
      navigation.navigate('Dashboard');
      const errandsRes = await axios.get(`${HOST_URL}/getErrandData`);
      setErrands(errandsRes.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function addToMongo(data) {
    try {
      const response = await axios.post(url, data);
      getChatID(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.textfields}>Store:</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="Bagelmart"
            onChangeText={(text) => {
              newErrandObj.storeName = text;
            }}
          />

          <Text style={styles.textfields}>Address:</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="231 Bagel Hole Circle"
            onChangeText={(text) => {
              newErrandObj.streetName = text;
            }}
          />

          <Text style={styles.textfields}>Time:</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="5:45pm"
            onChangeText={(text) => {
              newErrandObj.storeETA = text;
            }}
          />

          <Text style={styles.textfields}>Errand Name:</Text>
          <TextInput
            style={styles.textInputs}
            placeholder="bagel time!!!"
            onChangeText={(text) => {
              newErrandObj.errandName = text;
            }}
          />

          <View style={styles.buttons}>
            <View style={styles.cancel}>
              <Button
                title="Cancel"
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}
              />
            </View>
            <View style={styles.submit}>
              <Button
                title="Submit"
                onPress={() => {
                  addToMongo(newErrandObj);
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#90CCF4',
    flex: 1,
  },
  container2: {
    alignItems: 'center',
  },
  textfields: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputs: {
    borderWidth: 2,
    width: 300,
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 23,
    borderStyle: 'solid',
    borderColor: '#00214d',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  buttons: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 50,
    marginBottom: -5,
  },
  cancel: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#3da9fc',
    marginRight: 70,
  },
  submit: {
    borderWidth: 2,
    borderColor: '#3da9fc',
    borderRadius: 5,
  },
});

export default NewErrandContainer;
