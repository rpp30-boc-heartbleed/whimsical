import { selectorFamily } from 'recoil';
import chatState from '../atoms/chats';
// import friendsByNameState from '../atoms/friendsByName';
// import friendsOnErrandState from '../atoms/friendsOnErrand';

const findChat = selectorFamily({
  key: 'findChatSelector',
  get: (chatId) => {
    return ({ get }) => {
      const chats = get(chatState);
      const currentChat = chats[chatId];
      return currentChat;
    };
  },
});

export default findChat;
