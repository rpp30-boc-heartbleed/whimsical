import { atom } from 'recoil';

const currentMapViewState = atom({
  key: 'currentMapViewState',
  default: {
    latitude: 42.29171,
    longitude: -85.58723,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  },
});

export default currentMapViewState;
