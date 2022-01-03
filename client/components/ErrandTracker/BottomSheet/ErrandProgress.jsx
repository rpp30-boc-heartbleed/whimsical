import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ErrandProgress = () => (
  <ErrandProgress progress={0.5} color={Colors.red800} style={styles.bar} />
);

const styles = StyleSheet.create({
  bar: {
    height: 10,
  }
})

export default ErrandProgress;