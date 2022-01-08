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
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import DashboardBody from './DashboardBody';
import NavBar from '../NavBar/NavBarContainer';

const DashboardContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DashboardHeader navigation={navigation} />
      {/* <DashboardStats /> */}
      <DashboardBody navigation={navigation} />
      <ScrollView />
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default DashboardContainer;
