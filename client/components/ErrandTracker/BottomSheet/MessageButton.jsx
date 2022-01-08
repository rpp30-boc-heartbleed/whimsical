import * as React from 'react';
import { Button, TouchableOpacity } from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';

const MessageButton = ({ navigation, errandId }) => {
  return (
    <View style={styles.parent}>
      <Button
        icon="message"
        title="Message"
        color='#0782F9'
        mode="contained"
        onPress={() => navigation.push('Chat', { errandId })}
      >
        <Text style={styles.text}>Message</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MessageButton;
