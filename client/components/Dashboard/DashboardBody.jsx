import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

const DashboardBody = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.body}>a freinds post here</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.body}>a friends post here</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.body}>a friends post here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 60,
    paddingBottom: 60,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default DashboardBody;
