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
      <ScrollView style={styles.scrollview}>
        <DashboardStats />
        <DashboardBody />
      </ScrollView>
      <NavBar navigation={navigation} style={styles.navbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollview: {
    marginBottom: -53,
  },
  navbar: {
    backgroundColor: 'yellow',
    justifyContent: 'flex-end',
  },
});

export default DashboardContainer;
