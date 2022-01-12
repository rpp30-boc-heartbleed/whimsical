import React, { Suspense, useEffect } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

// Components
import {
  AddFriend,
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
import userProfileState from '../../state/atoms/userProfile';
import friendsListQuery from '../../state/selectors/friendsListQuery';
// Assets

// Style
import { SIZES } from '../../constants/theme';

const { width } = SIZES;

const FriendsListContainer = ({ navigation }) => {
  const [friendsList, setFriendsList] = useRecoilState(friendsListState);
  const [user, setUser] = useRecoilState(userProfileState);
  const getFriends = useRecoilValue(friendsListQuery(user.email));

  // useEffect(() => {
  //   setFriendsList(getFriends);
  // });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Toggle style={styles.toggle} />
          <Title style={styles.title} />
          <AddFriend style={styles.addButton} />
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  // toggle: {
  //   flex: 1,
  // },
  // title: {
  //   flex: 1,
  // },
  // addButton: {
  //   flex: 1,
  // },
  search: {
    borderRadius: 30,
    fontSize: 14,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
    height: 50,
    width: (width * 0.8),
    textAlign: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

export default FriendsListContainer;
