/***
create new errand with
1. name of errand
2. store location
3. radius
***/

const testUser = {
  name: 'requestor',
  address: {
    street: '123 Main Street',
    city: 'Kalamazoo',
    state: 'MI',
    zip: '49006',
  },
  location: {
    latitude: 40,
    longitude: -80,
  },
};

const mockErrandsData = [
  {
    id: 1,
    errandName: 'Impromptu Bagel Run',
    addressName: 'Big Apple Bagels',
    address: {
      street: '4408 W Main St',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49006',
    },
    location: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    requestor: userLocation,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'bob',
      location: {
        latitude: -12345,
        longitude: 36,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
];

export default { testUser, mockErrandsData };
