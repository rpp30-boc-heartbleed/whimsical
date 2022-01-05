import React, { useState, useCallback } from 'react';
import io from 'socket.io-client';
import { useRecoilState } from 'recoil';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
} from 'react-native';
import { LOCAL_IP } from '@env';
import ChatState from '../../../state/atoms/errandChat';

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

  const onSend = useCallback((message = []) => {
    submitMessage(message);
    setMessages((previousMsgs) => GiftedChat.append(previousMsgs, message));
  }, [submitMessage, setMessages]);

  return (
    <View style={styles.chat}>
      <GiftedChat
        messages={messages}
        onSend={(message) => onSend(message)}
        user={{
          _id: 1,
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
