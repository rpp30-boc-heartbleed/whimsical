import { atom } from 'recoil';

const friendsOnErrandState = atom({
  key: 'friendsOnErrandState',
  default: 'Show All',
});

export default friendsOnErrandState;
