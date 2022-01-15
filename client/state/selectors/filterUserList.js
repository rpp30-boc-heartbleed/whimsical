import { selectorFamily } from 'recoil';
import userListState from '../atoms/userList';

const filterUserListSelector = selectorFamily({
  key: 'filterUserListSelector',
  get: (index) => {
    return ({ get }) => {
      const users = get(userListState);
      return [...users.slice(0, index), ...users.slice(index + 1)];
    };
  },
  set: ({ set }, newList) => {
    set(userListState(newList));
  },
});

export default filterUserListSelector;
