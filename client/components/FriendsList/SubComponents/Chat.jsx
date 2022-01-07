import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
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
import findChat from '../../../state/selectors/findChat';

const { cat } = images;

const Chat = ({ route, navigation }) => {
  const { chatId } = route.params;
  const [user] = useRecoilState(userProfileState);
  const chat = useRecoilValue(findChat(chatId));
  const [messages, setMessages] = useState([]);

  const onSend = (message) => {
    sendMessage(message, chatId);
  };

  useEffect(() => {
    initiateSocketConnection();
    subscribeToChat(chatId, user._id, (msgs) => {
      setMessages(msgs);
    });
    receiveNewMessage((msg) => {
      setMessages((previousMsgs) => GiftedChat.append(previousMsgs, msg));
    });
    return () => {
      disconnectSocket();
    };
  }, [chatId, user]);

  return (
    <View style={styles.chat}>
      <GiftedChat
        messages={messages}
        onSend={(message) => onSend(message[0])}
        user={{
          _id: 1,
          name: 'cat',
          avatar: cat,
        }}
        // isTyping
        // infiniteScroll
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
