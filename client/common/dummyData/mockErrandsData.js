/***
create new errand with
1. name of errand
2. store location
3. radius
***/

// 1227 Jefferson Ave Kalamazoo, MI 49006
export const testUser = {
  name: 'requestor',
  address: {
    street: '1227 Jefferson Ave',
    city: 'Kalamazoo',
    state: 'MI',
    zip: '49006',
  },
  gps: {
    latitude: 42.295906,
    longitude: -85.601778
  },
};


export const mockErrandsData = [
  {
    id: 1,
    errandName: 'Impromptu Bagel Run',
    time: '45 minutes',
    addressName: 'Big Apple Bagels',
    address: {
      street: '4408 W Main St',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49006',
    },
    gps: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    requestor: testUser,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'bob',
      gps: {
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
];
