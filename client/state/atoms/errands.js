import { atom } from 'recoil';
import mockErrandsData from '../../common/dummyData/mockErrandsData';

const errandState = atom({
  key: 'errandState',
  default: mockErrandsData, //[]
});

export default errandState;