import { selector } from 'recoil';
import axios from 'axios';
import { LOCAL_IP } from '@env';

const friendsListQuery = selector({
  key: 'friendsListQuery',
  get: ({ get }) => {
    const res = axios({
      method: 'get',
      url: `${LOCAL_IP}/friends/get`,
    })
      .then((data) => {
        return data.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  },
});

export default friendsListQuery;
