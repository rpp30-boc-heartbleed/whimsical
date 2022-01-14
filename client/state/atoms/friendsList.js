import { atom } from 'recoil';
import friendsListQuery from '../selectors/friendsListQuery';

const friendsListState = atom({
  key: 'FriendsListState',
  default: friendsListQuery,
});

export default friendsListState;
