import { atom } from 'recoil';
import addFriendsQuery from '../selectors/addFriendsQuery';

const userListState = atom({
  key: 'userListState',
  default: addFriendsQuery,
});

export default userListState;
