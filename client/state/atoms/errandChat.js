import { atom } from 'recoil';
import mockMessages from '../../common/dummyData/mockMessages';

const chatState = atom({
  key: 'errandState',
  default: mockMessages, // []
});

export default chatState;
