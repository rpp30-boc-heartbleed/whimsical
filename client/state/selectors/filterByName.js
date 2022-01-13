import { selectorFamily } from 'recoil';
import friendsListState from '../atoms/friendsList';
import userListState from '../atoms/userList';
import { errandState } from '../atoms/errands';
import searchBarState from '../atoms/searchBar';
import friendsOnErrandState from '../atoms/friendsOnErrand';

const filterByName = selectorFamily({
  key: 'filterByName',
  get: (component) => {
    return ({ get }) => {
      let list;
      let name;
      if (component === 'friends') {
        list = get(friendsListState);
        name = 'name';
      } else if (component === 'strangers') {
        list = get(userListState);
        name = 'name';
      } else if (component === 'errands') {
        list = get(errandState);
        name = 'placeName';
      }
      const filter = get(searchBarState);
      const onErrand = get(friendsOnErrandState);

      const check = function (name, input) {
        if (input === '') {
          return true;
        }
        const length = name.length > input.length ? input.length : name.length;
        const start = name.slice(0, length);
        return start === input;
      };
      if (onErrand && component === 'friends') {
        list = list.filter((item) => item.currentErrands.length > 0);
      }
      if (list.length > 0) {
        const filtered = list.filter((item) => check(item[name].toLowerCase(), filter));
        return filtered;
      }
      return list;
    };
  },
});

export default filterByName;
