import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

import {CIRCLE_SCALE} from '../../constants';
import styles from './styles';
import {Colors} from '../../theme';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const FloatingMenu = () => {
  const openMenu = useSharedValue<boolean>(false);
  const animatedRef = useAnimatedRef<Animated.View>();

  const toggle = () => (openMenu.value = !openMenu.value);

  const progress = useDerivedValue(() =>
    openMenu.value ? withSpring(1.3) : withSpring(0),
  );

  const scalingStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0, CIRCLE_SCALE]);

    return {
      transform: [{scale}],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const translateX = withTiming(openMenu.value ? 0 : 300, {duration: 500});
    const opacity = withTiming(openMenu.value ? 1 : 0, {duration: 500});

    return {
      opacity,
      transform: [{translateX}],
    };
  });

  const animatedMenuIconStyle = useAnimatedStyle(() => ({
    opacity: openMenu.value ? 0 : 1,
  }));

  const animatedCloseIconStyle = useAnimatedStyle(() => ({
    opacity: openMenu.value ? 1 : 0,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.menuItemsContainer}>
        <Animated.View style={[styles.menuItem, animatedTextStyle]}>
          <Text style={styles.menuItemText}>Contact Us</Text>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon name="phone-alt" size={16} color={Colors.PURPLE} />
          </View>
        </Animated.View>
        <Animated.View style={[styles.menuItem, animatedTextStyle]}>
          <Text style={styles.menuItemText}>About</Text>
          <View style={styles.iconContainer}>
            <Icon name="person" size={16} color={Colors.PURPLE} />
          </View>
        </Animated.View>
        <Animated.View style={[styles.menuItem, animatedTextStyle]}>
          <Text style={styles.menuItemText}>Settings</Text>
          <View style={styles.iconContainer}>
            <Icon name="settings-sharp" size={16} color={Colors.PURPLE} />
          </View>
        </Animated.View>
      </View>

      <View style={styles.buttonContainer}>
        <Animated.View style={[styles.expandingCircle, scalingStyles]} />

        <TouchableOpacity onPress={toggle}>
          <Animated.View style={styles.fab} ref={animatedRef}>
            <AnimatedIcon
              name={'ellipsis-vertical-sharp'}
              size={30}
              color={Colors.WHITE}
              style={[styles.menuIcon, animatedMenuIconStyle]}
            />
            <AnimatedIcon
              name={'close-sharp'}
              size={35}
              color={Colors.WHITE}
              style={[styles.menuIcon, animatedCloseIconStyle]}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
