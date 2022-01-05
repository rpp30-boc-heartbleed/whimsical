import React, { useState, useCallback } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilState } from 'recoil';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
} from 'react-native';
import { LOCAL_IP } from '@env';

import { images } from '../../../constants';
import ChatState from '../../../state/atoms/errandChat';

const { cat } = images;

const Chat = ({ navigation }) => {
  const [messages, setMessages] = useRecoilState(ChatState);
  // const [message, setMessage] = useState('');
  // const [msgs, setMsgs] = useState([]);
  const socket = io(LOCAL_IP);
  socket.on('chat message', (msg) => {
    console.log('client', msg);
    setMessages([...messages, msg]);
  });

  const submitMessage = useCallback((message) => {
    socket.emit('chat message', message);
  }, [socket]);

  const onSend = useCallback((message) => {
    console.log(message);
    submitMessage(message[0]);
    // setMessages([...messages, message]);
    // setMessages((previousMsgs) => GiftedChat.append(previousMsgs, message[0]));
  }, [submitMessage]);

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
