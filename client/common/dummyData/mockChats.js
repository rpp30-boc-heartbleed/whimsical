import { images } from '../../constants';

const { cat, dog } = images;

const mockMessages = [
  {
    _id: 1,
    text: 'meow',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Cat',
      avatar: cat,
    },
  },
  {
    _id: 2,
    text: 'woof',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Dog',
      avatar: dog,
    },
  },
  {
    _id: 3,
    text: 'purr',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Cat',
      avatar: cat,
    },
  },
  {
    _id: 4,
    text: 'bark',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Dog',
      avatar: dog,
    },
  },
];

const mockChats = {
  1: mockMessages, // 1 being the id of the chat
};

export default mockChats;
