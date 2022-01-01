import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Modal, Portal, Provider, Headline, Colors } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import { COLORS, SIZES, icons } from '../../constants';
import errandState from '../../state/atoms/errands'
import Loading from './../Shared/Loading.jsx';
import Avatar from './../Shared/Avatar.jsx';
import Header from './../Shared/Header.jsx';
import TestModal from './../Modals/TestModal.jsx';
import AccordianList from './../Shared/AccordianList.jsx';
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const ErrandMap = ({ streetName, duration, errandLocation, navigation }) => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={icons.redPin}
            style={{
              width: 25,
              height: 25,
              marginRight: SIZES.padding,
            }}
          />
          <View
            style={{
              flex: 1,
            }}>
            <Text>4408 W Main St</Text>
          </View>
          <Text>{Math.ceil(10)} mins</Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding * 3,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: SIZES.width * 0.9,
                paddingVertical: SIZES.padding * 3,
                paddingHorizontal: SIZES.padding * 2,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={icons.cat}
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: SIZES.padding,
                  }} />
                <Text>Cat</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.star}
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: SIZES.padding,
                    }} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ErrandMap;

