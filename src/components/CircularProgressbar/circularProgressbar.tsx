import React, {useCallback} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';

import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Circle, Svg} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

import {CHANGE_VALUE, CIRCLE_LENGTH, RADIUS} from '../../constants/progressBar';
import styles from './styles';
import {Colors} from '../../theme';

const {width, height} = Dimensions.get('window');

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export const CircularProgressBar = () => {
  const progress = useSharedValue<number>(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const animatedIncButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value >= 1 ? 0.5 : 1,
      pointerEvents: progress.value >= 1 ? 'none' : 'auto',
    };
  }, []);

  const animatedDecButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value === 0 ? 0.5 : 1,
      pointerEvents: progress.value <= 0 ? 'none' : 'auto',
    };
  }, []);

  const onIncreasePress = useCallback(() => {
    if (progress.value < 1) {
      console.log('Increase: ', progress.value);
      progress.value = withSpring(Math.min(progress.value + CHANGE_VALUE, 1), {
        stiffness: 350,
        damping: 600,
      });
    }
  }, [progress]);

  const onDecreasePress = useCallback(() => {
    if (progress.value > 0) {
      console.log('Decrease: ', progress.value);
      progress.value = withSpring(Math.max(progress.value - CHANGE_VALUE, 0), {
        stiffness: 100,
      });
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      <Svg style={{position: 'absolute'}}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={RADIUS}
          stroke={Colors.BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
          fill={'transparent'}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={RADIUS}
          stroke={Colors.WHITE}
          strokeWidth={15}
          fill={'transparent'}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg>

      <View style={styles.buttonContainer}>
        <AnimatedButton
          onPress={onIncreasePress}
          style={[styles.button, animatedIncButtonStyle]}>
          <Icon name="plus" size={25} color={Colors.WHITE} />
        </AnimatedButton>

        <AnimatedButton
          onPress={onDecreasePress}
          style={[styles.button, animatedDecButtonStyle]}>
          <Icon name="minus" size={25} color={Colors.WHITE} />
        </AnimatedButton>
      </View>
    </View>
  );
};
