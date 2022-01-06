import { atom } from 'recoil';
import mockChats from '../../common/dummyData/mockChats';

const chatState = atom({
  key: 'errandState',
  default: mockChats, // {}
});

export default chatState;
