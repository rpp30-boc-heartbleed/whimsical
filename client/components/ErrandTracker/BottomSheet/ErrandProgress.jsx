import * as React from 'react';
import { ProgressBar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ErrandProgress = () => (
  <ErrandProgress progress={0.5} color="#00BCD4" style={styles.bar} />
);

const styles = StyleSheet.create({
  bar: {
    marginTop: 30,
    width: 20,
  }
})

export default ErrandProgress;