import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  View, Text, StyleSheet, TextInput, StatusBar, Button, ScrollView,
} from 'react-native';
import NavBar from '../NavBar/NavBarContainer';
import newErrandState from '../../state/atoms/newErrand';
import newErrandSelector from '../../state/selectors/newErrandSelector';

const NewErrandContainer = ({ navigation }) => {
  const setNewErrand = useSetRecoilState(newErrandState);
  const newErrandView = useRecoilValue(newErrandSelector);
  // const url = 'http://ec2-34-239-133-230.compute-1.amazonaws.com/newErrand';
  const url = 'http://localhost:3000/newErrand';
  const newErrandObj = {};

  async function addToMongo(data) {
    // eslint-disable-next-line no-undef
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
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
              <Button title="Cancel" />
            </View>
            <View style={styles.submit}>
              <Button
                title="Submit"
                onPress={(e) => {
                  setNewErrand(newErrandObj);
                  addToMongo(newErrandObj)
                    .then((data) => {
                      console.log('addToMongo data post successful');
                      navigation.navigate('Dashboard');
                    })
                    .catch((err) => {
                      console.log(err);
                    });
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
    backgroundColor: '#fff',
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
    borderColor: '#0782F9',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: -20,
  },
  cancel: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'red',
    marginRight: 70,
  },
  submit: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'green',
  },
});

export default NewErrandContainer;
