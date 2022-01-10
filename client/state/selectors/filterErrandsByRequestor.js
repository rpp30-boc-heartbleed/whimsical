import { selector } from 'recoil';
import { errandState } from '../atoms/errands';
import userProfileState from '../atoms/userProfile';

const filteredErrandsState = selector({
  key: 'filterErrandsByRequestor',
  get: ({ get }) => {
    const errands = get(errandState);
    const user = get(userProfileState);
    // console.log('USER STATE', user);
    // console.log('ERRANDS STATE', errands);

    return errands.filter((errand) => (errand.requestor || {}).email === user.email);
  },
});

export default filteredErrandsState;
