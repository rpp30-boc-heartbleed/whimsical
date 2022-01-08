// create new errand with
// 1. name of errand
// 2. store location
// 3. radius

// 1227 Jefferson Ave Kalamazoo, MI 49006
/*
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

export const mockErrandsData1 = [
  {
    id: 1,
    timeOfPost: '3:30pm',
    errandName: 'Impromptu Bagel Run',
    eta: null,
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
    chat: 1,
  },
  {
    id: 2,
    timeOfPost: '5:00pm',
    errandName: 'Pick up my yeezy\'s',
    eta: null,
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
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 20,
    },
    status: 'Pending',
    chat: 2,
  },
  {
    id: 3,
    timeOfPost: '7:00pm',
    errandName: 'Biscuit Run',
    eta: null,
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
    chat: 3,
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
    chat: 4,
  },
  {
    id: 5,
    timeOfPost: '7:45pm',
    errandName: 'Pick up my dog',
    eta: null,
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
    chat: 5,
  },
  {
    id: 6,
    timeOfPost: '8:00pm',
    errandName: 'Forgot my college papers',
    eta: null,
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
    chat: 6,
  },
  {
    id: 7,
    timeOfPost: '8:30pm',
    errandName: 'It\'s steak night',
    eta: null,
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
    chat: 7,
  },
  {
    id: 8,
    timeOfPost: '9:30pm',
    errandName: 'I forgot my hair',
    eta: null,
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
    chat: 8,
  },
  {
    id: 9,
    timeOfPost: '10:30pm',
    errandName: 'Can you check out the apartment?',
    eta: null,
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
    chat: 9,
  },
];
*/

const mockErrandsData = [
  {
    id: 1,
    storeName: 'Walmart',
    storeAddress: {
      streetName: '501 N 9th St',
      cityName: 'Kalamzoo',
      state: 'Michigan',
      zipCode: 49009,
    },
    storeETA: '1:45 pm',
    errandName: 'Watermelon Walmart Run!',
    timeOfPost: '2022-01-06T06:24:44.124Z',
    username: 'Willy Wonka',
    userAvatar: 'https://i.pinimg.com/originals/23/df/84/23df84f7150c9b456787e0174a840808.png',
    status: 'Pending',
  },
  {
    id: 2,
    storeName: 'Trader Joes',
    storeAddress: {
      streetName: '5099 Century Ave',
      cityName: 'Kalamzoo',
      state: 'Michigan',
      zipCode: 49009,
    },
    storeETA: '2:45 pm',
    errandName: 'Tomato Trader Joes Run!',
    timeOfPost: '2022-01-06T05:24:44.124Z',
    username: 'Joey Trayduh',
    userAvatar: 'https://freesvg.org/img/Comic-Hand-Peace-Sign.png',
    status: 'Pending',
  },
  {
    id: 3,
    storeName: 'MOMA',
    storeAddress: {
      streetName: '119 E Michigan Ave',
      cityName: 'Kalamazoo',
      state: 'Michigan',
      zipCode: 49007,
    },
    storeETA: '3:45 pm',
    errandName: 'Munster Cheese MOMA Run!',
    timeOfPost: '2022-01-06T04:04:44.124Z',
    username: 'Morgan Stanley',
    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
  },
  {
    id: 4,
    storeName: 'MOMA',
    storeAddress: {
      streetName: '119 E Michigan Ave',
      cityName: 'Kalamazoo',
      state: 'Michigan',
      zipCode: 49007,
    },
    storeETA: '4:45 pm',
    errandName: 'Munster Cheese MOMA Run!',
    timeOfPost: '2022-01-06T03:24:44.124Z',
    username: 'Morgan Stanley',
    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
  },
  {
    id: 5,
    storeName: 'MOMA',
    storeAddress: {
      streetName: '119 E Michigan Ave',
      cityName: 'Kalamazoo',
      state: 'Michigan',
      zipCode: 49007,
    },
    storeETA: '4:45 pm',
    errandName: 'Munster Cheese MOMA Run!',
    timeOfPost: '2022-01-06T02:24:44.124Z',
    username: 'Morgan Stanley',
    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
  },
  {
    id: 6,
    storeName: 'MOMA',
    storeAddress: {
      streetName: '119 E Michigan Ave',
      cityName: 'Kalamazoo',
      state: 'Michigan',
      zipCode: 49007,
    },
    storeETA: '4:45 pm',
    errandName: 'Munster Cheese MOMA Run!',
    timeOfPost: '2022-01-06T01:24:44.124Z',
    username: 'Morgan Stanley',
    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
  },
  {
    id: 7,
    storeName: 'MOMA',
    storeAddress: {
      streetName: '119 E Michigan Ave',
      cityName: 'Kalamazoo',
      state: 'Michigan',
      zipCode: 49007,
    },
    storeETA: '4:45 pm',
    errandName: 'Munster Cheese MOMA Run!',
    timeOfPost: '2022-01-06T01:24:44.124Z',
    username: 'Rex Grossman',
    userAvatar: 'https://external-preview.redd.it/bBV7Vv0PM2l8XfkcTVWgHf3l7jq0qQQdKFS5yR3jDWg.jpg?auto=webp&s=8aeb1958a94778aae7d3d1bb566fdbf1ff22b2f9',
    status: 'Delivered',
  },
];

module.exports = { mockErrandsData };

/*
{
  id: NUMBER,
  storeName: STRING,
  storeAddress: {
    streetName: STRING,
    cityName: STRING,
    state: STRING,
    zipCode: NUMBER,
  },
  storeETA: STRING,
  errandName: STRING,
  timeOfPost: STRING,
  username: STRING,
  userAvatar: STRING,
  status: STRING
}
 */
