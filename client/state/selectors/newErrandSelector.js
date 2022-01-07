import { selector } from 'recoil';
import newErrand from '../atoms/newErrand';

const NewErrandSelector = selector({
  key: 'newErrandSelector',
  get: ({ get }) => {
    const list = get(newErrand);
    return list;
  },
});

export default NewErrandSelector;
