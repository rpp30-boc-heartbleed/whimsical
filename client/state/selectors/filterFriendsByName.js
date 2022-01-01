import { selector } from 'recoil';
import friendsListState from '../atoms/friendsList';
import friendsByNameState from '../atoms/friendsByName';

const filteredFriendsNameSelector = selector({
  key: 'filteredListSelector',
  get: ({ get }) => {
    const list = get(friendsListState);
    const filter = get(friendsByNameState);

    const check = function (name, input) {
      if (input === '') {
        return true;
      }
      const length = name.length > input.length ? input.length : name.length;
      const start = name.slice(0, length);
      return start === input;
    };
    const filtered = list.filter((item) => check(item.name, filter));
    return filtered;
  },
});

export default filteredFriendsNameSelector;
