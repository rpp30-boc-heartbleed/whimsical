import { selector } from 'recoil';
import friendsListState from '../atoms/friendsList';
import friendsByNameState from '../atoms/friendsByName';
import friendsOnErrandState from '../atoms/friendsOnErrand';

const filteredFriendsNameSelector = selector({
  key: 'filteredListSelector',
  get: ({ get }) => {
    let list = get(friendsListState);
    const filter = get(friendsByNameState);
    const onErrand = get(friendsOnErrandState);

    const check = function (name, input) {
      if (input === '') {
        return true;
      }
      const length = name.length > input.length ? input.length : name.length;
      const start = name.slice(0, length);
      return start === input;
    };
    if (onErrand) {
      list = list.filter((item) => item.status);
    }
    const filtered = list.filter((item) => check(item.name, filter));
    return filtered;
  },
});

export default filteredFriendsNameSelector;
