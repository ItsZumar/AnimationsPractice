import {View, Pressable} from 'react-native';
import React, {useMemo, useState} from 'react';

import {Easing} from 'react-native-reanimated';
import {MotiTransitionProp, MotiView} from 'moti';

import {Colors} from '../../theme';
import styles from './styles';

interface CustomSwtichButtonI {
  size: number;
  isActive: boolean;
  onPress?: () => void;
}

const SIZE = 50;

const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};

const CustomSwtichButton = ({size, onPress, isActive}: CustomSwtichButtonI) => {
  const trackWidth = useMemo(() => {
    return size * 1.5;
  }, [size]);

  const trackHeight = useMemo(() => {
    return size * 0.4;
  }, [size]);

  const knobSize = useMemo(() => {
    return size * 0.6;
  }, [size]);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive
              ? Colors.ACTIVE_BUTTON
              : Colors.IN_ACTIVE_BUTTON,
          }}
          animate={{
            backgroundColor: isActive
              ? Colors.ACTIVE_BUTTON
              : Colors.IN_ACTIVE_BUTTON,
          }}
          style={[
            styles.trackContainer,
            {
              width: trackWidth,
              height: trackHeight,
              borderRadius: trackHeight / 2,
            },
          ]}
        />
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={[
            styles.knobContainer,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}>
          {/* knob indicator */}
          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : knobSize,
              borderColor: isActive
                ? Colors.ACTIVE_BUTTON
                : Colors.IN_ACTIVE_BUTTON,
            }}
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              borderWidth: size * 0.1,
              borderColor: Colors.ACTIVE_BUTTON,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

export const SwtichButton = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSwitchPress = () => setIsActive(prev => !prev);

  return (
    <View style={styles.container}>
      <CustomSwtichButton
        size={SIZE}
        onPress={onSwitchPress}
        isActive={isActive}
      />
    </View>
  );
};
