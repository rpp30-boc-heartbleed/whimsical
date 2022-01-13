const moment = require('moment');
// require
moment().format();

const avatars = [
  'https://i.pinimg.com/originals/23/df/84/23df84f7150c9b456787e0174a840808.png',
  'https://freesvg.org/img/Comic-Hand-Peace-Sign.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
];

const dynamicDate = (sub) => {
  const now = new Date();
  const olderDate = moment(now).subtract(sub, 'minutes').toDate();
  return olderDate;
};

const mockRequestors = [
  {
    name: 'Orange',
    email: 'orange@gmail.com',
    stars: 0,
    picture: avatars[4],
    errandsCompleted: 0,
    location: '9548 Andes Ave, Kalamazoo, MI 49009',
  },
  {
    name: 'Rex Grossman',
    email: 'rex@rex.com',
    stars: 1994,
    picture: avatars[0],
    errandsCompleted: 35,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    name: 'Laweeza',
    email: 'laweeza@gmail.com',
    stars: 10,
    picture: avatars[3],
    errandsCompleted: 2,
    location: '1300 N Eagle Lake Dr, Kalamazoo, MI 49009',

  },
];

const mockRunners = [
  {
    picture: 'https://via.placeholder.com/50',
    email: 'amir@gmail.com',
    name: 'amir',
    stars: 53,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'billy@gmail.com',
    name: 'billy',
    stars: 20,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'carl@gmail.com',
    name: 'carl',
    stars: 7,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'david@gmail.com',
    name: 'david',
    stars: 9,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'eric@gmail.com',
    name: 'eric',
    stars: 5,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'farid@gmail.com',
    name: 'farid',
    stars: 0,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'gloria@gmail.com',
    name: 'gloria',
    stars: 1,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'hannah@gmail.com',
    name: 'hannah',
    stars: 3,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
  {
    picture: 'https://via.placeholder.com/50',
    email: 'irene@gmail.com',
    name: 'irene',
    stars: 2,
    errandsCompleted: 0,
    location: '1423 E Crooked Lake Dr, Kalamazoo, MI, 49009',
  },
];

const mockErrands = [
  {
    id: 1,
    // timeOfPost: '2022-01-06T01:24:44.124Z',
    timeOfPost: `${dynamicDate(30)}`,
    errandName: 'Impromptu Bagel Run',
    storeETA: '1:30 pm',
    storeName: 'Big Apple Bagels',
    storeAddress: {
      streetName: '4408 W Main St',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49006',
    },
    requestorLocation: {
      latitude: 42.295906,
      longitude: -85.601778,
    },
    storeLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    runnerLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    status: 'Pending',
    userAvatar: avatars[0],
    chat: 1,
  },
  {
    id: 2,
    timeOfPost: `${dynamicDate(27)}`,
    errandName: "Pick up my yeezy's",
    storeETA: '2:30 pm',
    storeName: 'Harper Funeral Home',
    storeAddress: {
      streetName: '521 Douglas Ave',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49007',
    },
    requestorLocation: {
      latitude: 42.29646497010875,
      longitude: -85.59983806167556,
    },
    storeLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    runnerLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    status: 'Pending',
    userAvatar: avatars[1],
    chat: 2,
  },
  {
    id: 3,
    timeOfPost: `${dynamicDate(24)}`,
    errandName: 'Biscuit Run',
    storeETA: '3:30 pm',
    storeName: "Daysha's Convenient Store",
    storeAddress: {
      streetName: '715 Douglas Ave',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49508',
    },
    requestorLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    storeLocation: {
      latitude: 42.293644,
      longitude: -85.603899,
    },
    runnerLocation: {
      latitude: 42.293644,
      longitude: -85.603899,
    },
    status: 'Pending',
    userAvatar: avatars[2],
    chat: 3,
  },
  {
    id: 4,
    timeOfPost: `${dynamicDate(20)}`,
    errandName: 'Wine Run',
    storeETA: '4:30 pm',
    storeName: 'Henderson Castle',
    storeAddress: {
      streetName: '100 Monroe St',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49006',
    },
    storeLocation: {
      latitude: 42.29287071224959,
      longitude: -85.60384602650498,
    },
    requestorLocation: {
      latitude: 42.29293886175921,
      longitude: -85.60509581073848,
    },
    runnerLocation: {
      latitude: 42.29287071224959,
      longitude: -85.60384602650498,
    },
    status: 'Pending',
    userAvatar: avatars[3],
    chat: 4,
  },
  {
    id: 5,
    timeOfPost: `${dynamicDate(19)}`,
    errandName: 'Pick up my dog',
    storeETA: '5:30 pm',
    storeName: 'Henderson Park',
    storeAddress: {
      streetName: '1300 Grand Ave',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49006',
    },
    requestorLocation: {
      latitude: 42.292547307892505,
      longitude: -85.60230124614648,
    },
    storeLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    runnerLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    status: 'Pending',
    userAvatar: avatars[4],
    chat: 5,
  },
  {
    id: 6,
    timeOfPost: `${dynamicDate(15)}`,
    errandName: 'Forgot my college papers',
    storeETA: '6:30 pm',
    storeName: 'Biscuit drive',
    storeAddress: {
      streetName: '106 Thompson St',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49006',
    },
    requestorLocation: {
      latitude: 42.2921873145571,
      longitude: -85.60113552296569,
    },
    storeLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    runnerLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    status: 'Pending',
    userAvatar: avatars[5],
    chat: 6,
  },
  {
    id: 7,
    timeOfPost: `${dynamicDate(12)}`,
    errandName: "It's steak night",
    storeETA: '7:30 pm',
    storeName: 'H Prime Chop Steakhouse',
    storeAddress: {
      streetName: '101 Monroe St',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49006',
    },
    requestorLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    storeLocation: {
      latitude: 42.29274054847618,
      longitude: -85.60374108715617,
    },
    runnerLocation: {
      latitude: 42.29274054847618,
      longitude: -85.60374108715617,
    },
    status: 'Pending',
    userAvatar: avatars[0],
    chat: 7,
  },
  {
    id: 8,
    timeOfPost: `${dynamicDate(10)}`,
    errandName: 'I forgot my hair',
    storeETA: '8:30 pm',
    storeName: 'Ultima Hair Salon',
    storeAddress: {
      streetName: '1604 W Main St',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49006',
    },
    requestorLocation: {
      latitude: 42.2966481,
      longitude: -85.6436558,
    },
    storeLocation: {
      latitude: 42.29416975689851,
      longitude: -85.60584734955037,
    },
    runnerLocation: {
      latitude: 42.29416975689851,
      longitude: -85.60584734955037,
    },
    status: 'Pending',
    userAvatar: avatars[1],
    chat: 8,
  },
  {
    id: 9,
    timeOfPost: `${dynamicDate(9)}`,
    errandName: 'Check out apartment',
    storeETA: '9:30 pm',
    storeName: 'Biscuit drive',
    storeAddress: {
      streetName: '735 Summit Ave',
      cityName: 'Kalamazoo',
      state: 'MI',
      zipCode: '49006',
    },
    requestorLocation: {
      latitude: 42.29838762690168,
      longitude: -85.60113840463173,
    },
    storeLocation: {
      latitude: 42.297591824250446,
      longitude: -85.59946859072569,
    },
    runnerLocation: {
      latitude: 42.297591824250446,
      longitude: -85.59946859072569,
    },
    status: 'Pending',
    userAvatar: avatars[2],
    chat: 9,
  },
];

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
    // timeOfPost: '2022-01-06T06:24:44.124Z',
    timeOfPost: `${dynamicDate(10)}`,
    username: 'Willy Wonka',
    userAvatar:
      'https://i.pinimg.com/originals/23/df/84/23df84f7150c9b456787e0174a840808.png',
    status: 'Pending',
    chat: 1,
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
    timeOfPost: `${dynamicDate(15)}`,
    username: 'Joey Trayduh',
    userAvatar: 'https://freesvg.org/img/Comic-Hand-Peace-Sign.png',
    status: 'Pending',
    chat: 2,
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
    timeOfPost: `${dynamicDate(17)}`,
    username: 'Morgan Stanley',
    userAvatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
    chat: 3,
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
    timeOfPost: `${dynamicDate(21)}`,
    username: 'Morgan Stanley',
    userAvatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
    chat: 4,
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
    timeOfPost: `${dynamicDate(26)}`,
    username: 'Morgan Stanley',
    userAvatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
    chat: 5,
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
    timeOfPost: `${dynamicDate(30)}`,
    username: 'Morgan Stanley',
    userAvatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Emoji_u1f9c0.svg/1200px-Emoji_u1f9c0.svg.png',
    status: 'Pending',
    chat: 6,
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

module.exports = {
  mockErrandsData,
  mockErrands,
  mockRequestors,
  mockRunners,
};
