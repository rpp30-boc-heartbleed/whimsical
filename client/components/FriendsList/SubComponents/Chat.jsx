import React from 'react';
import { useRecoilState } from 'recoil';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
} from 'react-native';
import ChatState from '../../../state/atoms/errandChat';

const Chat = ({ navigation }) => {
  const [messages, setMessages] = useRecoilState(ChatState);

  return (
    <View style={styles.chat}>
      <GiftedChat
        messages={messages}
        user='jbel'
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
