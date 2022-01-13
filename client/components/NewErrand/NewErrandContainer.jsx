import React from 'react';
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Text, Button } from 'react-native-elements';
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
          <Text h3 style={styles.heading}>
            Create an Errand
          </Text>
          {/* <Text style={styles.textfields}>Store:</Text> */}
          <TextInput
            style={styles.textInputs}
            // placeholder="Bagelmart"
            placeholder='store'
            dense
            mode='outlined'
            onChangeText={(text) => {
              newErrandObj.storeName = text;
            }}
          />

          {/* <Text style={styles.textfields}>Address:</Text> */}
          <TextInput
            style={styles.textInputs}
            placeholder='street address'
            // placeholder="231 Bagel Hole Circle"
            dense
            mode='outlined'
            onChangeText={(text) => {
              newErrandObj.streetName = text;
            }}
          />

          <TextInput
            style={styles.textInputs}
            // placeholder="5:45pm"
            placeholder='time'
            dense
            mode='outlined'
            onChangeText={(text) => {
              newErrandObj.storeETA = text;
            }}
          />

          <TextInput
            style={styles.textInputs}
            // placeholder="bagel time!!!"
            placeholder='errand name'
            dense
            mode='outlined'
            onChangeText={(text) => {
              newErrandObj.errandName = text;
            }}
          />

          <View style={styles.buttons}>
            <Button
              title='Submit'
              onPress={() => {
                addToMongo(newErrandObj);
              }}
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
            <Button
              title='Cancel'
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
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
  heading: {
    marginTop: 20,
    marginBottom: 50,
  },
  container2: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textfields: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputs: {
    width: 300,
    padding: 8,
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  buttons: {
    flexDirection: 'column',
    padding: 5,
    marginTop: 50,
    marginBottom: -5,
  },
});

export default NewErrandContainer;
