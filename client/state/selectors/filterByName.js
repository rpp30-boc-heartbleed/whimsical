import { selectorFamily } from 'recoil';
import friendsListState from '../atoms/friendsList';
import { errandState } from '../atoms/errands';
import searchBarState from '../atoms/searchBar';
import friendsOnErrandState from '../atoms/friendsOnErrand';

const filterByName = selectorFamily({
  key: 'filterByName',
  get: (component) => {
    return ({ get }) => {
      let list;
      let name; // <- storeName
      let name2; // <- username
      let name3; // <- errandName

      if (component === 'friends') {
        list = get(friendsListState);
        name = 'name';
      } else if (component === 'errands') {
        list = get(errandState);
        name = 'storeName';
        name2 = 'username';
        name3 = 'errandName';
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

      const check2 = (item, search) => {
        if (search === '') { return true; }
        return (item[name].toLowerCase().includes(search.toLowerCase())
          || item.runner.name.toLowerCase().includes(search.toLowerCase())
            || item[name3].toLowerCase().includes(search.toLowerCase()));
      };

      if (onErrand && component === 'friends') {
        list = list.filter((item) => item.currentErrands.length > 0);
      }

      if (component === 'errands') {
        const filtered = list.filter((item) => check2(item, filter));
        return filtered;
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
