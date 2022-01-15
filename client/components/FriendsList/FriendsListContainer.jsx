import React, { Suspense, useEffect } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// Components
import {
  AddButton,
  List,
  Title,
  Toggle,
} from './SubComponents';
import NavBarContainer from '../NavBar/NavBarContainer';
import SearchBar from '../Shared/SearchBar';
import TestModal from '../Modals/TestModal';
import Loading from '../Shared/Loading';
// State
import friendsListState from '../../state/atoms/friendsList';
// Assets

// Style
import { SIZES } from '../../constants/theme';

const { width } = SIZES;

const FriendsListContainer = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Toggle style={styles.toggle} />
          <Title style={styles.title} />
          <AddButton style={styles.addButton} />
        </View>
        <SearchBar style={styles.search} />
        <List navigation={navigation} style={styles.list} />
      </View>
      <View>
        <NavBarContainer navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90CCF4',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#90CCF4',
  },
  search: {
    margin: 10,
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: '#fff',
    borderColor: '#DEE1E6',
    borderWidth: 1,
    height: 50,
    width: (width * 0.8),
    textAlign: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
});

export default FriendsListContainer;
