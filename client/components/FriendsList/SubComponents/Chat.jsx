import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';

import {
  initiateSocketConnection,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
  receiveNewMessage,
} from '../../../socket/connect';
import { images } from '../../../constants';
import userProfileState from '../../../state/atoms/userProfile';
// import findChat from '../../../state/selectors/findChat';
import chatState from '../../../state/atoms/chats';

const { cat } = images;

const Chat = ({ route, navigation }) => {
  const { errandId } = route.params;
  const [user] = useRecoilState(userProfileState);
  const [chats, setChats] = useRecoilState(chatState);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const onSend = (message) => {
    sendMessage(message, errandId);
  };

  useEffect(() => {
    initiateSocketConnection();
    subscribeToChat(errandId, user._id, (msgs) => {
      setMessages(msgs);
    });
    receiveNewMessage((msg) => {
      setMessages((previousMsgs) => GiftedChat.append(previousMsgs, msg));
    });
    return () => {
      disconnectSocket();
    };
  }, [errandId, user]);

  return (
    <View
      style={styles.chat}
      accessible
      accessiblilityLabel='main'
    >
      <GiftedChat
        messages={messages}
        onSend={(message) => onSend(message[0])}
        user={{
          _id: user._id,
          name: user.name,
          avatar: user.picture,
        }}
        scrollToBottom
        keyboardShouldPersistTaps='never'
        inverted={Platform.OS !== 'web'}
        infiniteScroll
        timeTextStyle={{ left: { color: 'red' }, right: { color: 'yellow' } }}
      // isTyping
      // loadEarlier
      // inverted={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    flex: 1,
  },
});

export default Chat;
