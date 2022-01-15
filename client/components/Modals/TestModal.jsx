import React, { useState } from 'react';
import {
  Modal, Portal, Text, Button, Provider,
} from 'react-native-paper';

// Test Modal Template to Share

const TestModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  console.log('hi');
  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Modal Template.  Click outside this area to close.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};

export default TestModal;
