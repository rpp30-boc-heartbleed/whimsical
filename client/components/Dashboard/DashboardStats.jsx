import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

const DashboardStats = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.stats}>stats here</Text>
      <Text style={styles.stats}>stats here</Text>
      <Text style={styles.stats}>stats here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  stats: {
    borderWidth: 1,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 8,
    color: 'gray',
  },
});

export default DashboardStats;
