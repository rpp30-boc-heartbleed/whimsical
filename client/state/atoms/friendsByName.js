import { atom } from 'recoil';

const friendsByNameState = atom({
  key: 'friendsByNameState',
  default: '',
});

export default friendsByNameState;
