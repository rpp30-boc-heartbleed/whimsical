import * as React from 'react';
import { Button } from 'react-native-paper';

//Click to go eventual message chat room with errand runner

const MessageButton = () => (
  <Button icon="message" color='#0782F9' compact={true} mode="contained" onPress={() => console.log('Pressed')}>
    Message
  </Button>
);



export default MessageButton;