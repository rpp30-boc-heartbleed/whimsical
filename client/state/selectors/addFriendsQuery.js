import { selector } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';

const addFriendsQuery = selector({
  key: 'addFriendsQuery',
  get: async ({ get }) => {
    const res = await axios({
      method: 'get',
      url: `${HOST_URL}/friends/get`,
    })
      .then((data) => {
        return data.data.users;
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  },
});

export default addFriendsQuery;
