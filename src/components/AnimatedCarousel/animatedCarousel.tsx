import {
  View,
  StatusBar,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {CAROUSEL_IMAGES} from '../../constants';
import styles from './styles';

const {width} = Dimensions.get('screen');

export const AnimatedCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={StyleSheet.absoluteFillObject}>
        {CAROUSEL_IMAGES.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{uri: image}}
              style={[StyleSheet.absoluteFillObject, {opacity}]}
              blurRadius={15}
            />
          );
        })}
      </View>

      <Animated.FlatList
        data={CAROUSEL_IMAGES}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}: {item: string; index: number}) => {
          return (
            <View key={index} style={styles.imageContainer}>
              <Image source={{uri: item}} style={styles.image} />
            </View>
          );
        }}
      />
    </View>
  );
};
