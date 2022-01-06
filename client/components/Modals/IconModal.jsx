import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, TouchableOpacity,
} from 'react-native';
import {
  Modal, Portal, Text, IconButton, Provider,
} from 'react-native-paper';

const IconModal = ({
  icon, size, style, currentErrands, navigation,
}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  // const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <FlatList
            data={currentErrands}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.friend}>
                  <TouchableOpacity style={styles.avatar}>
                    <Text onPress={() => navigation.push('Chat', { errand: item })}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
          />
        </Modal>
      </Portal>
      <IconButton
        icon={icon}
        size={size}
        style={style}
        onPress={showModal}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 20,
  },
});

export default IconModal;
