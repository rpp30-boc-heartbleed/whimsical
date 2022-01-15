import { selector } from 'recoil';
import friendsListState from '../atoms/friendsList';
import friendsOnErrandState from '../atoms/friendsOnErrand';

const filteredFriendsStatusSelector = selector({
  key: 'filteredListSelector',
  get: ({ get }) => {
    const list = get(friendsListState);
    const filter = get(friendsOnErrandState);

    switch (filter) {
      case true:
        return list.filter((item) => item.status);
      // case 'Show Offline':
      //   return list.filter((item) => !item.status);
      default:
        return list;
    }
  },
});

export default filteredFriendsStatusSelector;
