import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge } from 'react-native-elements';

const withBadge = (onErrand, options = {}) => (WrappedComponent) => {
  const {
    top = -5, right = 0, left = 0, bottom = 0, hidden = true,
  } = options;
  return (
    <View>
      <WrappedComponent />
      {hidden && (
        <Badge
          badgeStyle={styles.badge}
          textStyle={styles.badgeText}
          containerStyle={[styles.badgeContainer, {
            top, right, left, bottom,
          }]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18,
    color: 'green',
  },
  badgeContainer: {
    position: 'absolute',
  },
});

export default withBadge;
