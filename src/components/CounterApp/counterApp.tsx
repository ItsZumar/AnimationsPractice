import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';

import {incrementStrNumber} from '../../utils/incrementNumber';
import {Colors} from '../../theme';

const CHANGE_NUMBER = 5;

export const CounterApp = () => {
  const totalPrice = useSharedValue<string>('100');

  const totalPriceText = useDerivedValue(() => {
    return `${Math.floor(parseInt(totalPrice.value))}`;
  });

  const onIncreasePress = useCallback(() => {
    totalPrice.value = withTiming(
      incrementStrNumber(totalPrice.value, CHANGE_NUMBER),
      {duration: 1000},
    );
  }, []);

  const onDecreasePress = useCallback(() => {}, []);

  const animatedTextStyle = StyleSheet.create({
    progressText: {},
  });

  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <ReText
          text={totalPriceText}
          style={[animatedTextStyle.progressText, styles.progressText]}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onIncreasePress} style={styles.button}>
          <Icon name="plus" size={25} color={Colors.WHITE} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDecreasePress} style={styles.button}>
          <Icon name="minus" size={25} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
