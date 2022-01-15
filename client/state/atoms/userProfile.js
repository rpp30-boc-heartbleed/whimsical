import { atom } from 'recoil';

const userProfileState = atom({
  key: 'UserProfileState',
  default: {},
});

export default userProfileState;
