import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import { COLORS, SIZES, icons } from '../../constants';
import errandState from '../../state/atoms/errands'
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const ErrandMap = ({ streetName, duration }) => {
  return (
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
          // source={icons.redPin}
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
  );
};

export default ErrandMap;