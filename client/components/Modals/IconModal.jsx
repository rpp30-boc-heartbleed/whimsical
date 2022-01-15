import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Modal, Portal, Text, IconButton, Provider,
} from 'react-native-paper';

const IconModal = ({ icon, size, style }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Modal Template.  Click outside this area to close.</Text>
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

export default IconModal;
