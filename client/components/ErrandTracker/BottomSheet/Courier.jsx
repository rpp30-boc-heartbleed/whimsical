import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { HOST_URL } from '@env';
import { Icon, LinearProgress } from 'react-native-elements';
import Modal from 'react-native-modal';
import {
  StyleSheet, View, Image, Text, TouchableOpacity,
} from 'react-native';
import { errandState } from '../../../state/atoms/errands';
import { COLORS, SIZES, icons } from '../../../constants';
import userProfileState from '../../../state/atoms/userProfile';

const Courier = ({ errand, eta, status }) => {
  const {
    runner, errandId, requestor, username,
  } = errand;
  const { stars, name } = runner;
  const [count, setCount] = useState(stars);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const setErrands = useSetRecoilState(errandState);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    console.log('name', name, 'email', runner.name);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRating = async () => {
    try {
      const response = await axios.put(`${HOST_URL}/userProfile/stars`, {
        ...runner,
        stars: runner.stars + 1,
      });
      setCount(count + 1);
      setModalVisible(false);
      setClicked(true);
      const errandsResp = await axios.get(`${HOST_URL}/getErrandData`);
      console.log(errandsResp.data);
      setErrands(errandsResp.data);
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Modal
            isVisible={isModalVisible}
            animationIn='zoomInDown'
            animationOut='zoomOutUp'
            hasBackdrop
            backdropColor='black'
            backdropOpacity={0.7}
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}
          >
            <View style={{ backgroundColor: '#ffff' }}>
              <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16 }}>
                Errand Complete! Give
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {runner.name}
                </Text>{' '}
                a star?
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 20,
                }}
              >
                <Text style={{ marginRight: 20 }}>
                  <Icon
                    raised
                    size={30}
                    name='star'
                    type='font-awesome'
                    color='#F3D250'
                    onPress={handleRating}
                    disabled={isClicked}
                  />
                </Text>
                <Text style={{ marginLeft: 20 }}>
                  <Icon
                    raised
                    size={30}
                    name='meho'
                    type='antdesign'
                    onPress={toggleModal}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <Text style={styles.profileName}>{runner.name}</Text>
        <Image source={icons.star} style={styles.starImage} />
        <Text style={styles.starCount}>{count}</Text>
      </View>
      <View>
        <Text style={styles.starBtn}>
          {
            // eslint-disable-next-line no-constant-condition
            (status === 'Pending') || (username === runner.name) ? (
              <Icon
                raised
                name='star'
                type='font-awesome'
                color='#5F6368'
                onPress={toggleModal}
                disabled
              />
            ) : (
              <Icon
                raised
                name='star'
                type='font-awesome'
                color='#F3D250'
                onPress={toggleModal}
              />
            )
          }
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileName: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  starBtn: {
    marginTop: 7,
  },
  starImage: {
    marginTop: 22,
    marginLeft: 5,
    width: 20,
    height: 20,
    marginRight: SIZES.padding,
  },
  starCount: {
    marginTop: 22,
    marginRight: 5,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Courier;
