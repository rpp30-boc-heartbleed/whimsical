import { selector } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';
import userProfileState from '../atoms/userProfile';

const addFriendsQuery = selector({
  key: 'addFriendsQuery',
  get: async ({ get }) => {
    const currentUser = get(userProfileState);
    const res = await axios.get(`${HOST_URL}/friends/getAll`)
      .then((data) => {
        console.log(data.data.users, 'users');
        const { users } = data.data;
        const filtered = users.filter((user) => !currentUser.friends.includes(user.email)
        && currentUser.email !== user.email);
        return filtered;
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  },
});

export default addFriendsQuery;
