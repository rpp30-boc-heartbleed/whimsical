import { selector } from 'recoil';
import friendsListState from '../atoms/friendsList';
import friendsByNameState from '../atoms/friendsByName';

const filteredFriendsNameSelector = selector({
  key: 'filteredListSelector',
  get: ({ get }) => {
    const list = get(friendsListState);
    const filter = get(friendsByNameState);

    if (filter.length > 0) {
      const check = function (name, input) {
        const length = name.length > input.length ? input.length : name.length;
        const start = name.slice(0, length);
        return start === input;
      };
      return list.filter((item) => check(item, filter));
    }
    return list;
  },
});

export default filteredFriendsNameSelector;
