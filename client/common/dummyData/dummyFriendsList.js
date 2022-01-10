import { images } from '../../constants';

const { cat, dog } = images;

const dummyFriendsList = [{
  id: 1,
  name: 'Sam Jackson',
  avatar: cat,
  goldStars: 9000,
  status: true,
  currentErrands: [],
  // currentErrand: Object,
  // pastErrands: Array,
},
{
  id: 5,
  name: 'aaron',
  avatar: dog,
  gps: {
    latitude: 42.2966481,
    longitude: -85.6436558,
  },
  goldStars: 5,
  status: true,
  currentErrands: [{
    id: 1,
    name: 'Impromptu Bagel Run',
    chatId: 1,
  }],
},
{
  id: 2,
  name: 'LL Cool J',
  avatar: cat,
  goldStars: 9001,
  status: false,
  currentErrands: [],
  // currentErrand: Object,
  // pastErrands: Array,
},
{
  id: 3,
  name: 'The shark',
  avatar: cat,
  goldStars: 0,
  status: true,
  currentErrands: [],
  // currentErrand: Object,
  // pastErrands: Array,
}];

export default dummyFriendsList;
