import * as React from 'react';
import { Icon } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';

const MessageButton = ({ navigation, errandId }) => {
  return (
    <View style={styles.parent}>
      <Icon
        raised
        name='commenting'
        type='font-awesome'
        color='#f50'
        onPress={() => navigation.push('Chat', { errandId })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    marginRight: 8,
    justifyContent: 'flex-end',
  },
});

export default MessageButton;
