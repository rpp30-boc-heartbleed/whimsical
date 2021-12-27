import { selector } from 'recoil';
import friendsListState from '../atoms/friendsList';
import friendsListFilterState from '../atoms/friendsListFilter';

const filteredListState = selector({
  key: 'filteredListState',
  get: ({ get }) => {
    const list = get(friendsListState);
    const filter = get(friendsListFilterState);

    switch (filter) {
      case 'Show On Errand':
        return list.filter((item) => item.status);
      case 'Show Offline':
        return list.filter((item) => !item.status);
      default:
        return list;
    }
  },
});

export default filteredListState;
