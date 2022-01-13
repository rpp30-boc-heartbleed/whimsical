import React, { useEffect } from 'react';
import {
  FlatList, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRecoilValue } from 'recoil';
import { Badge } from 'react-native-paper';
import filteredErrandsState from '../../state/selectors/filterErrandsByRequestor';
import { errandState, refreshErrandsState } from '../../state/atoms/errands';
import NavBarContainer from '../NavBar/NavBarContainer';

const ErrandRequests = ({ navigation }) => {
  const errands = useRecoilValue(filteredErrandsState);
  const refresh = useRecoilValue(refreshErrandsState);
  console.log(
    '========================= errands length:',
    errands.length,
    '===========================================',
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={errands}
        keyExtractor={(item, index) => index}
        extraData={errands}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.friend}
              onPress={() => navigation.navigate('ErrandTracker', { errand: item })}
            >
              <View style={styles.item}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.title}>{item.errandName}</Text>
                  <Text>Runner: {item.runner.name}</Text>
                </View>
                <View>
                  {item.status === 'Delivered' ? (
                    <Badge
                      size={25}
                      style={{
                        backgroundColor: '#90f4b8',
                        color: 'white',
                      }}
                    >
                      Delivered
                    </Badge>
                  ) : (
                    <Badge
                      size={25}
                      style={{ backgroundColor: '#f4909a', color: 'white' }}
                    >
                      Pending
                    </Badge>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View>
        <NavBarContainer navigation={navigation} />
      </View>
    </View>
  );
};

export default ErrandRequests;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  item: {
    borderColor: '#EFEFEF',
    borderBottomWidth: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  friend: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    height: 80,
    marginTop: 15,
  },
  avatar: {
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
  },
  text: {
    flex: 4,
    // flexDirection: 'row',
    fontSize: 14,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    height: 60,
    padding: 10,
  },
  star: {
    width: 20,
    height: 20,
  },
  title: {
    fontWeight: 'bold',
  },
});
