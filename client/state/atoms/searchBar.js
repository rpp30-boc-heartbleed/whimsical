import { atom } from 'recoil';

const searchBarState = atom({
  key: 'searchBarState',
  default: '',
});

export default searchBarState;
