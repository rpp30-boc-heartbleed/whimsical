import { atom } from 'recoil';
import dummyFriendsList from '../../common/dummyData/dummyFriendsList';

const friendsListState = atom({
  key: 'FriendsListState',
  default: dummyFriendsList,
});

export default friendsListState;
