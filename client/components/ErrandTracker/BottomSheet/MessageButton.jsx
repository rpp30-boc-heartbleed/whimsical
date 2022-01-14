import * as React from 'react';
import { Icon } from 'react-native-elements';

const MessageButton = ({ navigation, errandId }) => {
  return (
    <Icon
      raised
      name='commenting'
      type='font-awesome'
      color='#f50'
      onPress={() => navigation.push('Chat', { errandId })}
    />
  );
};

export default MessageButton;
