import { atom } from 'recoil';

const friendsListFilterState = atom({
  key: 'friendsListFilterState',
  default: 'Show All',
});

export default friendsListFilterState;
