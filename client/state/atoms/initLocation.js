import { atom } from 'recoil';

const initLocationState = atom({
  key: 'initLocationState',
  default: {
    latitude: 42.29171,
    longitude: -85.58723,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  },
});

export default initLocationState;
