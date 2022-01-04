import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
} from 'react-native';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  return (
    <View style={styles.chat}>
      <GiftedChat messages={messages} />
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    flex: 1,
  },
});

export default Chat;
