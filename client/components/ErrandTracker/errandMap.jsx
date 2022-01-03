import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Modal,
  Portal,
  Provider,
  Headline,
  Colors,
} from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import {
  COLORS,
  SIZES,
  icons,
  images,
} from '../../constants';
import errandState from '../../state/atoms/errands';
import Loading from '../Shared/Loading';
import Avatar from '../Shared/Avatar';
import Header from '../Shared/Header';
import TestModal from '../Modals/TestModal';
import AccordianList from '../Shared/AccordianList';

const { GOOGLE_MAPS_API_KEY } = process.env;

const ErrandMap = ({
  streetName,
  duration,
  errandLocation,
  navigation,
}) => {
  const location = {
    latitude: 42.2966481,
    longitude: -85.6436558,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };
  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        apiKey={GOOGLE_MAPS_API_KEY}
        region={location}
        style={{ flex: 1 }}
      >
        <MapViewDirection
          strokeColor={COLORS.primary}
        />
      </MapView>
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
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
            }}
          >
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
        }}
      >
        <View
          style={{
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding * 3,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: SIZES.width * 0.9,
                paddingVertical: SIZES.padding * 3,
                paddingHorizontal: SIZES.padding * 2,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={images.cat}
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: SIZES.padding,
                  }}
                />
                <Text>Cat</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={icons.star}
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: SIZES.padding,
                    }}
                  />
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
