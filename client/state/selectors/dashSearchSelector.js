import { selector } from 'recoil';
import dashSearchState from '../atoms/dashSearch';
import errandsState from '../atoms/errands';

const filterDashboard = selector({
  key: 'filterDashboard',
  get: ({ get }) => {
    const dashSearch = get(dashSearchState);
    const errands = get(errandsState);
  },
});

export default filterDashboard;
