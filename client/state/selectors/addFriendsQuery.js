import { selector } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';

const addFriendsQuery = selector({
  key: 'addFriendsQuery',
  get: async ({ get }) => {
    const res = await axios.get(`${HOST_URL}/friends/getAll`)
      .then((data) => {
        console.log(data.data.users, 'users');
        return data.data.users;
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  },
});

export default addFriendsQuery;
