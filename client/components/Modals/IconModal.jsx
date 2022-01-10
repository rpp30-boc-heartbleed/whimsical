import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, TouchableOpacity,
} from 'react-native';
import {
  Modal, Portal, Text, IconButton, Provider,
} from 'react-native-paper';

const IconModal = ({
  disable, icon, size, style, currentErrands, navigation,
}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  // const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <Provider>
      <Portal>
        <Modal
          animation='slide'
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}
        >
          <View style={styles.modalView}>
            <FlatList
              data={currentErrands}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.friend}>
                    <TouchableOpacity style={styles.avatar}>
                      <Text disable={disable} onPress={() => navigation.push('Chat', { errandId: item.errandId })}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
              keyboardShouldPersistTaps="handled"
            />
          </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default IconModal;
