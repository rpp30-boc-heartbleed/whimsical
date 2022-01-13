import { selector } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';
import userProfile from '../atoms/userProfile';

const friendsListQuery = selector({
  key: 'friendsListQuery',
  get: async ({ get }) => {
    const user = await get(userProfile);
    const res = await axios.post(
      `${HOST_URL}/friends/getFriends`,
      { friends: user.friends },
    )
      .then((data) => {
        return data.data.friendsList;
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  },
});

export default friendsListQuery;
