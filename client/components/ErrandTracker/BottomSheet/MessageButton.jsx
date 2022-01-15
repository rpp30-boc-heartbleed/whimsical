import * as React from 'react';
import { Button, TouchableOpacity } from 'react-native-paper';
import { StyleSheet, View, Text, Alert } from 'react-native';

//Click to go eventual message chat room with errand runner

const MessageButton = () => {
  return (
    <View style={styles.parent}>
      <Button
        icon="message"
        title="Message"
        color='#0782F9'
        mode="contained"
        onPress={() =>
          Alert.alert('Message Lady Beth')}
      >
        <Text style={styles.text}>Message</Text>
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  parent: {
    width: 120,
    height: 100,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    marginHorizontal: '10 %',
    marginBottom: 10,
    borderRadius: 3,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  }
})



export default MessageButton;