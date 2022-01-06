// create new errand with
// 1. name of errand
// 2. store location
// 3. radius

// 1227 Jefferson Ave Kalamazoo, MI 49006
export const testUser = {
  name: 'Rex Grossman',
  address: {
    street: '1227 Jefferson Ave',
    city: 'Kalamazoo',
    state: 'MI',
    zip: '49006',
  },
  gps: {
    latitude: 42.295906,
    longitude: -85.601778,
  },
};

export const mockErrandsData = [
  {
    id: 1,
    timeOfPost: '3:30pm',
    errandName: 'Impromptu Bagel Run',
    eta: 0,
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
      name: 'aaron',
      gps: {
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 53,
    },
    status: 'Pending',
  },
  {
    id: 2,
    timeOfPost: '5:00pm',
    errandName: ':(',
    eta: 0,
    addressName: 'Harper Funeral Home',
    address: {
      street: '521 Douglas Ave',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49007',
    },
    gps: {
      latitude: 42.29646497010875,
      longitude: -85.59983806167556,
    },
    requestor: testUser,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'billy',
      gps: {
        latitude: 42.29692846729353,
        longitude: -85.60200795213825,
      },
      starRating: 20,
    },
    status: 'Pending',
  },
  {
    id: 3,
    timeOfPost: '7:00pm',
    errandName: 'Biscuit Run',
    eta: 0,
    addressName: 'Daysha\'s Convenient Store',
    address: {
      street: '715 Douglas Ave',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49508',
    },
    gps: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    requestor: testUser,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'joe',
      gps: {
        latitude: 42.293644,
        longitude: -85.603899,
      },
      starRating: 7,
    },
    status: 'Pending',
  },
  {
    id: 4,
    timeOfPost: '3:30pm',
    errandName: 'Wine Run',
    eta: '45 minutes',
    addressName: 'Henderson Castle',
    address: {
      street: '100 Monroe St',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49006',
    },
    gps: {
      latitude: 42.29293886175921,
      longitude: -85.60509581073848,
    },
    requestor: testUser,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'aaron',
      gps: {
        latitude: 42.29287071224959,
        longitude: -85.60384602650498,
      },
      starRating: 9,
    },
    status: 'Pending',
  },
  {
    id: 5,
    timeOfPost: '7:45pm',
    errandName: 'Pick up my dog',
    eta: 0,
    addressName: 'Henderson Park',
    address: {
      street: '1300 Grand Ave',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49006',
    },
    gps: {
      latitude: 42.292547307892505,
      longitude: -85.60230124614648,
    },
    requestor: testUser,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'billy',
      gps: {
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 6,
    timeOfPost: '8:00pm',
    errandName: 'Forgot my college papers',
    eta: 0,
    addressName: 'Biscuit drive',
    address: {
      street: '106 Thompson St',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49006',
    },
    gps: {
      latitude: 42.2921873145571,
      longitude: -85.60113552296569,
    },
    requestor: testUser,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'joe',
      gps: {
        latitude: 42.293175198320796,
        longitude: -85.60114684066646,
      },
      starRating: 0,
    },
    status: 'Pending',
  },
  {
    id: 7,
    timeOfPost: '8:30pm',
    errandName: 'It\'s steak night',
    eta: 0,
    addressName: 'H Prime Chop House Seafood and Steakhouse',
    address: {
      street: '101 Monroe St',
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
      name: 'aaron',
      gps: {
        latitude: 42.29274054847618,
        longitude: -85.60374108715617,
      },
      starRating: 1,
    },
    status: 'Pending',
  },
  {
    id: 8,
    timeOfPost: '9:30pm',
    errandName: 'I forgot my hair',
    eta: 0,
    addressName: 'Ultima Hair Salon',
    address: {
      street: '1604 W Main St',
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
      name: 'billy',
      gps: {
        latitude: 42.29416975689851,
        longitude: -85.60584734955037,
      },
      starRating: 3,
    },
    status: 'Pending',
  },
  {
    id: 9,
    timeOfPost: '10:30pm',
    errandName: 'Can you check out the apartment?',
    eta: 0,
    addressName: 'Biscuit drive',
    address: {
      street: '735 Summit Ave',
      city: 'Kalamazoo',
      state: 'MI',
      zip: '49006',
    },
    gps: {
      latitude: 42.29838762690168,
      longitude: -85.60113840463173,
    },
    requestor: testUser,
    errandRunner: {
      avatar: 'https://via.placeholder.com/50',
      name: 'joe',
      gps: {
        latitude: 42.297591824250446,
        longitude: -85.59946859072569,
      },
      starRating: 2,
    },
    status: 'Pending',
  },
];
