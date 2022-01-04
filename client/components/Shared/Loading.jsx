import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = () => (
  <ActivityIndicator animating color={Colors.blue800} />
);

export default Loading;
