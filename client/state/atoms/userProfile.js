import { atom } from 'recoil';

const userProfileState = atom({
  key: 'UserProfileState',
  default: {
    name: 'Placeholder',
    pass: '*****',
    email: 'noName@gmail.com',
    stars: 100,
    picture: 'https://external-preview.redd.it/bBV7Vv0PM2l8XfkcTVWgHf3l7jq0qQQdKFS5yR3jDWg.jpg?auto=webp&s=8aeb1958a94778aae7d3d1bb566fdbf1ff22b2f9',
    errandsCompleted: 0,
    location: 'Space',
  },
});

export default userProfileState;
