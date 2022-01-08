import { atom } from 'recoil';
import { mockErrandsData } from '../../common/dummyData/mockErrandsData';

export const errandState = atom({
  key: 'errandState',
  default: [], // []
});

export const refreshErrandsState = atom({
  key: 'refreshErrandsState',
  default: false,
});
