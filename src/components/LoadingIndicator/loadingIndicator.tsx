import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {MotiView} from 'moti';

const SIZE = 80;

interface LoadingIndicatorI {
  size: number;
}

const LoadingIndicator = ({size}: LoadingIndicatorI) => {
  return (
    <MotiView
      from={{
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        borderWidth: 0,
      }}
      animate={{
        width: SIZE + 20,
        height: SIZE + 20,
        borderRadius: (SIZE + 20) / 2,
        borderWidth: SIZE / 10,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
        // repeat: 3,
      }}
      style={styles.loadingStyle}
    />
  );
};

export const LoadingIndicatorAnimation = () => {
  return (
    <View style={styles.container}>
      <LoadingIndicator size={300} />
    </View>
  );
};
