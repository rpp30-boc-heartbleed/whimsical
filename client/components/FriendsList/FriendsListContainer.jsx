import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Button,
} from 'react-native';

import NavBarContainer from '../NavBar/NavBarContainer';
import Search from './Search';
import List from './List';

import friendsListState from '../../state/atoms/friendsList';
import friendsByNameState from '../../state/atoms/friendsByName';
import filteredByNameSelector from '../../state/selectors/filterFriendsByName';
import friendsListQuery from '../../state/selectors/friendsListQuery';

const FriendsListContainer = ({ navigation }) => {
  const [friendsList, setFriendsList] = useRecoilState(friendsListState);
  const setNameFilter = useSetRecoilState(friendsByNameState);
  const filteredByName = useRecoilValue(filteredByNameSelector);
  // const friends = useRecoilValue(friendsListQuery);

  const onChange = (value) => {
    setNameFilter(value);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Buddies</Text>
        <Text style={styles.number}>{friendsList.length} friends</Text>
        <Search />
        <List />
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
    paddingBottom: '5%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  number: {
    fontSize: 12,
    paddingBottom: '5%',
    color: '#0782F9',
  },
  search: {
    borderRadius: 10,
    fontSize: 14,
    borderColor: 'black',
    borderWidth: 1,
    width: '70%',
    height: 40,
    paddingHorizontal: 100,
  },
  list: {
    flex: 1,
    width: '70%',
  },
  friend: {
    padding: 15,
    fontSize: 14,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 60,
    marginTop: 25,
  },
  navbar: {
    borderRadius: 10,
    fontSize: 14,
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
    height: 40,
    paddingHorizontal: 75,
    paddingTop: 10,
  },
});

export default FriendsListContainer;
