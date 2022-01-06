// create new errand with
// 1. name of errand
// 2. store location
// 3. radius

// 1227 Jefferson Ave Kalamazoo, MI 49006
/*
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
    longitude: -85.601778,
  },
};

export const mockErrandsData1 = [
  {
    id: 1,
    timeOfPost: '3:30pm',
    errandName: 'Impromptu Bagel Run',
    time: '1:45pm',
    addressName: 'Einsteins',
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
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 2,
    timeOfPost: '3:30pm',
    errandName: 'Bacon Run',
    time: '9:45pm',
    addressName: 'Walmart',
    address: {
      street: '602 S Main St',
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
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 3,
    timeOfPost: '3:30pm',
    errandName: 'Biscuit Run',
    time: '3:45',
    addressName: 'Target',
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
      name: 'joe',
      gps: {
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 4,
    timeOfPost: '3:30pm',
    errandName: 'Banana Run',
    time: '8:45pm',
    addressName: 'Whole Foods',
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
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 5,
    timeOfPost: '3:30pm',
    errandName: 'Butter Run',
    time: '9:45',
    addressName: 'HEB',
    address: {
      street: '602 S Main St',
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
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 6,
    timeOfPost: '3:30pm',
    errandName: 'Donut Run',
    time: '3:45',
    addressName: 'Shipleys',
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
      name: 'joe',
      gps: {
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 7,
    timeOfPost: '3:30pm',
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
      name: 'aaron',
      gps: {
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 8,
    timeOfPost: '3:30pm',
    errandName: 'Bacon Run',
    time: '9:45',
    addressName: 'Big Bacon',
    address: {
      street: '602 S Main St',
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
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
  },
  {
    id: 9,
    timeOfPost: '3:30pm',
    errandName: 'Biscuit Run',
    time: '3:45',
    addressName: 'Biscuit drive',
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
      name: 'joe',
      gps: {
        latitude: 42.2966481,
        longitude: -85.6436558,
      },
      starRating: 5,
    },
    status: 'Pending',
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
    timeOfPost: '1:00 pm',
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
    timeOfPost: '2:00 pm',
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
    timeOfPost: '3:00 pm',
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
    timeOfPost: '4:00 pm',
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
    timeOfPost: '4:00 pm',
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
    timeOfPost: '4:00 pm',
    username: 'Morgan Stanley',
    userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
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
