import {StyleSheet, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../theme';
import styles, {CIRCLE_SIZE} from './styles';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

export const WavyIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              from={{opacity: 0.7, scale: 1}}
              animate={{opacity: 0, scale: 4}}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                repeatReverse: false,
                loop: true,
              }}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
              key={index}
            />
          );
        })}
        <Feather
          name="phone-outgoing"
          size={CIRCLE_SIZE * 0.5}
          color={Colors.WHITE}
        />
      </View>
    </View>
  );
};
