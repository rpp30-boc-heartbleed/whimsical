import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';
import DashboardHeader from './DashboardHeader';

const DashboardContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <View style={styles.links}>
        <Button title="Go to Errand Tracker" onPress={() => navigation.push('ErrandTracker')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  links: {
    paddingTop: 500,
  },
});

export default DashboardContainer;
