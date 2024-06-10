import React, {useRef} from 'react';
import {Animated, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {BG_IMG, FLATLIST_DATA, ITEM_SIZE, ITEM_SPACING} from '../../constants';
import styles from './styles';

export const AnimatedFlatlist = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
      />

      <Animated.FlatList
        data={FLATLIST_DATA}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          padding: ITEM_SPACING,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              key={item.key}
              style={[styles.listCard, {transform: [{scale}], opacity}]}>
              <Image source={{uri: item.image}} style={styles.profilePic} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </Animated.View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
