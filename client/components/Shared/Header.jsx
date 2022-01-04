import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const theme = ({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
});

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.secondary,
  },
});

export default memo(Header);
