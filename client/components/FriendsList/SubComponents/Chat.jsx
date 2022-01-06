import React, { useState, useCallback } from 'react';
// import io from 'socket.io-client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
} from 'react-native';
// import { LOCAL_IP } from '@env';

import { images } from '../../../constants';
import findChat from '../../../state/selectors/findChat';

const { cat } = images;

const Chat = ({ route, navigation }) => {
  const { errand } = route.params;
  const chat = useRecoilValue(findChat(errand.chatId));
  const [messages, setMessages] = useState(chat);
  // const [messages, setMessages] = useRecoilState(chatState);
  // const [msgs, setMsgs] = useState([]);
  // const socket = io(LOCAL_IP);
  // socket.on('chat message', (msg) => {
  //   console.log('client', msg);
  //   setMessages([...messages, msg]);
  // });

  // const submitMessage = (message) => {
  //   socket.emit('chat message', message);
  // };

  const onSend = (message) => {
    console.log(message);
    // submitMessage(message[0]);
    // setMessages([...messages, message]);
    setMessages((previousMsgs) => GiftedChat.append(previousMsgs, message[0]));
  };

  return (
    <View style={styles.chat}>
      <GiftedChat
        messages={messages}
        onSend={(message) => onSend(message)}
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
