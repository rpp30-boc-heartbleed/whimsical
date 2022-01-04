import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  ScrollView,
} from 'react-native';
import NavBar from '../NavBar/NavBarContainer';

const NewErrandContainer = ({ navigation }) => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.textfields}>Store:</Text>
        <TextInput style={styles.textInputs} placeholder="Bagelmart" />

        <Text style={styles.textfields}>Address:</Text>
        <TextInput style={styles.textInputs} placeholder="231 Bagel Hole Circle" />

        <Text style={styles.textfields}>Time:</Text>
        <TextInput style={styles.textInputs} placeholder="5:45pm" />

        <Text style={styles.textfields}>Errand Name:</Text>
        <TextInput style={styles.textInputs} placeholder="bagel time!!!" />

        <View style={styles.buttons}>
          <View style={styles.cancel}>
            <Button title="Cancel" />
          </View>
          <View style={styles.submit}>
            <Button title="Submit" />
          </View>
        </View>
      </View>
    </ScrollView>

    <NavBar navigation={navigation} />
  </View>
);

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
    borderColor: '#0782F9',
  },
});

export default NewErrandContainer;
