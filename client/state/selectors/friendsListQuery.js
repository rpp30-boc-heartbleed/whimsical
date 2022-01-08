import { selectorFamily } from 'recoil';
import axios from 'axios';
import { HOST_URL, DEPLOYED_IP } from '@env';
import friendsListState from '../atoms/friendsList';

const friendsListQuery = selectorFamily({
  key: 'friendsListQuery',
  get: (userEmail) => {
    return ({ get }) => {
      const res = axios({
        method: 'get',
        url: `${HOST_URL}/friends/get?email=${userEmail}`,
      })
        .then((data) => {
          console.log(data.data);
          return data.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return res;
    };
  },
});

export default friendsListQuery;
