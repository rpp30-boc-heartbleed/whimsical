import { selector } from 'recoil';
import errandState from '../atoms/errands';
import userProfileState from '../atoms/userProfile';

const filteredErrandsState = selector({
  key: 'filterErrandsByRequestor',
  get: ({ get }) => {
    const errands = get(errandState);
    const user = get(userProfileState);
    return errands.filter((errand) => errand.requestor?.name === user.name);
  },
});

export default filteredErrandsState;
