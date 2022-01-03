import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// Components
import NavBarContainer from '../NavBar/NavBarContainer';
import Search from './Search';
import List from './List';

// State
import friendsListState from '../../state/atoms/friendsList';
import friendsByNameState from '../../state/atoms/friendsByName';
import filteredByNameSelector from '../../state/selectors/filterFriendsByName';
import friendsListQuery from '../../state/selectors/friendsListQuery';

// Assets

// Style
import { SIZES } from '../../constants/theme';

const { width } = SIZES;

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
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.heading}>Buddies</Text>
            <Text style={styles.number}>{friendsList.length} friends</Text>
          </View>
        </View>
        <Search style={styles.search} />
        <List style={styles.list} />
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
    // paddingBottom: '5%',
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
    borderRadius: 30,
    fontSize: 14,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: (width * 0.8),
    textAlign: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
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
  // navbar: {
  //   borderRadius: 10,
  //   fontSize: 14,
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   width: '60%',
  //   height: 40,
  //   paddingHorizontal: 75,
  //   paddingTop: 10,
  // },
});

export default FriendsListContainer;
