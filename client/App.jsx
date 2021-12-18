import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Placeholder from './components/Placeholder';

const App = () => (
  <Router>
    <Stack key='root'>
      <Scene key='placeholder' component={Placeholder} title='Placeholder' />
    </Stack>
  </Router>
);

export default App;

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
