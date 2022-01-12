import React, { useState, useEffect, Component } from 'react';
import TimeAgo from 'react-native-timeago';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import { HOST_URL } from '@env';
import {
  View, Text, StyleSheet, TextInput, StatusBar, FlatList, Image, Avatar, TouchableOpacity,
} from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { errandState } from '../../state/atoms/errands';
import userProfileState from '../../state/atoms/userProfile';
import auth from '../../config/firebase';

const DashboardBody = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [errandsList, setErrands] = useRecoilState(errandState);
  const userProfile = useRecoilValue(userProfileState);
  const [newDataFromMongo, setNewDataFromMongo] = useState([]);

  const timeFormat = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };

  const compareTime = (time1, time2) => {
    const re = /^([012]?\d):([0-6]?\d)\s*(a|p)m$/i;
    time1 = time1.match(re);
    time2 = time2.match(re);
    if (time1 && time2) {
      const is_pm1 = /p/i.test(time1[3]) ? 12 : 0;
      const hour1 = (time1[1] * 1 + is_pm1) % 12;
      const is_pm2 = /p/i.test(time2[3]) ? 12 : 0;
      const hour2 = (time2[1] * 1 + is_pm2) % 12;
      if (hour1 !== hour2) return hour1 > hour2;

      const minute1 = time1[2] * 1;
      const minute2 = time2[2] * 1;
      return minute1 > minute2;
    }
  };

  useEffect(() => {
    axios
      .get(`${HOST_URL}/getErrandData`)
      // .get('http://172.20.10.9:3000/getErrandData')
      .then((data) => {
        const dataArr = [];
        // create new array of only 'Pending' posts (deleting 'Completed' posts)
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < data.data.length; i++) {
          const short = data.data[i];

          if (!compareTime(timeFormat(), short.storeETA)) {
            dataArr.push(short);
          }
        }
        // sorts posts -> most recent on top
        dataArr.sort((b, a) => {
          return a.timeOfPost.localeCompare(b.timeOfPost);
        });
        setNewDataFromMongo(dataArr);
        setErrands(dataArr);
      })
      .catch((err) => console.log('error', err));
  }, [isFocused, setErrands]);

  const { visible, onToggleSnackBar, onDismissSnackBar } = useSnackBar();

  const handleRequestErrand = async (errand) => {
    // V1:
    // can't request an already requested errand (only 1 requestor per errand right now)
    // can't request an errand that you are also the runner for
    if (errand.requestor || errand.runner.email === userProfile.email) {
      console.log(errand.runner.email);
      console.log(userProfile.email);
      onToggleSnackBar();
    } else {
      try {
        await axios.post(`${HOST_URL}/errands/request`, {
          errandId: errand._id,
          email: userProfile.email,
        });

        const errandsResp = await axios.get(`${HOST_URL}/getErrandData`);
        setErrands(errandsResp.data);

        navigation.push('ErrandRequests');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View>
      <FlatList
        style={styles.container0}
        data={errandsList}
        // data={newDataFromMongo}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.container2}>
              <View style={styles.container3}>
                <Image
                  source={{ uri: item.userAvatar }}
                  style={styles.avatar}
                />
                <View style={styles.container4}>
                  <View style={styles.container5}>
                    <Text style={styles.username}>{item.runner.name}</Text>
                    <TimeAgo time={item.timeOfPost} interval={120000} />
                  </View>

                  <View style={styles.container6}>
                    <Text style={[styles.cont6, styles.store]}>{item.storeName}</Text>
                    <Text style={[styles.cont6, styles.breakbar]}>|</Text>
                    <Text style={[styles.cont6, styles.errandname]}>{item.errandName}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.container7}>
                <Text style={styles.cont7}>Address: {item.storeAddress.streetName}</Text>
                <Text style={styles.cont7}>ETA: {item.storeETA || '5 minutes'}</Text>
              </View>

              <View style={[styles.buttons, styles.clickable]}>

                <TouchableOpacity
                  style={styles.messagetouch}
                  onPress={() => navigation.push('Chat', {
                    errandId: item._id,
                  })}
                >
                  <Image
                    source={{ uri: 'https://listimg.pinclipart.com/picdir/s/453-4531079_png-file-svg-message-box-icon-png-clipart.png' }}
                    style={styles.messagebox}
                  />
                </TouchableOpacity>

                <Text style={styles.clickable} />

                <TouchableOpacity
                  style={styles.statustouch}
                  onPress={() => navigation.navigate('ErrandTracker', { errand: item })}
                >
                  <Image
                    source={{ uri: 'https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png' }}
                    style={styles.status}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon
                    size={20}
                    name='shopping-basket'
                    onPress={() => handleRequestErrand(item)}
                    color={item.requestor || item.runner.email === userProfile.email ? 'gray' : 'blue'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.container}>
        <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
        <Snackbar
          duration={1500}
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Dismiss',
            onPress: onDismissSnackBar,
          }}
        >
          You cannot request this errand.
        </Snackbar>
      </View>
    </View>
  );
};

const useSnackBar = () => {
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return {
    onDismissSnackBar,
    onToggleSnackBar,
    visible,
  };
};

const styles = StyleSheet.create({
  container0: {
    height: 643,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#0782F9',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 18,
    width: 60,
    resizeMode: 'contain',
  },
  container4: {
    flex: 1,
    flexDirection: 'column',
  },
  minutesago: {
    fontSize: 10,
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cont6: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  store: {
    marginLeft: -20,
    paddingTop: 13,
  },
  errandname: {
    paddingTop: 13,
  },
  breakbar: {
    fontWeight: '200',
    marginHorizontal: 10,
    fontSize: 35,
  },
  container7: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  cont7: {
    fontSize: 13,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // justifyContent: 'center',
  },
  clickable: {
    fontSize: 10,
    color: 'gray',
    marginTop: 5,
  },
  messagebox: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 100,
  },
  messagetouch: {
    // borderWidth: 1,
  },
  status: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  statustouch: {
    // borderWidth: 1,
  },
});

export default DashboardBody;
