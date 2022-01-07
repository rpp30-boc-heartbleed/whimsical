import React from 'react';
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
  Search,
  Title,
  Toggle,
} from './SubComponents';
import NavBarContainer from '../NavBar/NavBarContainer';
import TestModal from '../Modals/TestModal';
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
          <Toggle style={styles.toggle} />
          <Title style={styles.title} />
          <AddFriend style={styles.addButton} />
        </View>
        <Search style={styles.search} />
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
});

export default FriendsListContainer;
