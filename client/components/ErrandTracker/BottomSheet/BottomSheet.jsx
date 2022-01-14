/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Alert,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';
import { HOST_URL } from '@env';
import { Icon, LinearProgress } from 'react-native-elements';
import { errandState, refreshErrandsState } from '../../../state/atoms/errands';
import MessageButton from './MessageButton';
import Courier from './Courier';

const { width, height } = Dimensions.get('window').width;

const BottomSheet = ({
  navigation, eta, errand, showModal,
}) => {
  const {
    errandName,
    errandId,
    status,
    runner,
  } = errand;
  const { stars } = runner;
  const [count, setCount] = useState(stars);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRating = async () => {
    console.log(stars);
    try {
      const response = await axios.put(`${HOST_URL}/userProfile/stars`, {
        ...runner,
        stars: runner.stars + 1,
      });
      console.log('user stars response', response);
      setCount(count + 1);
      return response;
    } catch (err) {
      return 'Unable to give gold star';
    }
  };

  return (
    <View style={styles.container}>
      {/* <Button title='Show modal' onPress={toggleModal} /> */}
      <View>
        <Modal
          isVisible={isModalVisible}
          animationIn='slideInUp'
          animationOut='slideOutDown'
        >
          <View style={{ backgroundColor: '#ffff' }}>
            <Text>Context here</Text>
            <Button title='Hide modal' onPress={toggleModal} />
          </View>
        </Modal>
      </View>
      <View style={styles.content}>
        <Text style={styles.errand}>{errandName}</Text>
        <Text style={styles.eta}>Arrives in
          <Text style={styles.time}> {Math.floor(eta)} min</Text>
        </Text>
        <Text style={styles.status}>Status: <Text style={styles.pend}>{status}</Text></Text>
      </View>
      <View style={styles.progress}>
        <LinearProgress color='#F78888' />
      </View>
      <View style={styles.content2}>
        <Courier errand={errand} />
        <Text style={styles.starBtn}>
          {/* {
            // eslint-disable-next-line no-constant-condition
            { status } === 'Pending' || eta > 0
              ? <Icon
                  disabled
                  raised
                  name='star'
                  type='font-awesome'
                  color='#5F6368'
                  onPress={toggleModal}
              /> */}
              {/* :  */}
              <Icon
                  raised
                  name='star'
                  type='font-awesome'
                  color='#F3D250'
                  onPress={toggleModal}
              />
          {/* } */}
        </Text>
        <View style={styles.button}>
          <MessageButton navigation={navigation} errandId={errandId} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    height: Dimensions.get('window').height * 0.5,
  },
  content: {
    marginLeft: 10,
    marginTop: 10,
  },
  content2: {
    flexDirection: 'row',
    marginTop: 65,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 1,
    borderColor: '#EFEFEF',
  },
  starBtn: {
    marginTop: 7,
  },
  button: {
    marginRight: 30,
    marginBottom: 30,
  },
  errand: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  eta: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  time: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#D92B37',
    marginLeft: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: '700',
    justifyContent: 'flex-end',
  },
  pend: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default BottomSheet;
