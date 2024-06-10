import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  LayoutChangeEvent,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import {articleParagraphs} from '../../constants';

const {width, height} = Dimensions.get('screen');

const getImage = (i: number) =>
  `https://source.unsplash.com/600x${400 + i}/?blackandwhite`;

export const StickyFooter = () => {
  const [bottomActions, setBottomActions] = useState<any>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const topEdge = bottomActions?.y - height + bottomActions?.height;

  useEffect(() => {
    console.log(bottomActions);
  }, [bottomActions]);

  return (
    <SafeAreaView style={{marginTop: -24}}>
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{padding: 20}}>
        <Text style={styles.heading}>Black and White</Text>
        {articleParagraphs.map((text, index) => {
          return (
            <View key={index}>
              {index % 3 === 0 && (
                <Image source={{uri: getImage(index)}} style={styles.image} />
              )}
              <Text style={styles.paragraph}>{text}</Text>
            </View>
          );
        })}

        <View
          style={styles.bottomActions}
          onLayout={(ev: LayoutChangeEvent) =>
            setBottomActions(ev.nativeEvent.layout)
          }
        />

        <View>
          <Text style={styles.featuredTitle}>Featured</Text>
          {articleParagraphs.slice(0, 3).map((text, index) => {
            return (
              <View
                key={`featured-${index}`}
                style={{flexDirection: 'row', marginBottom: 10}}>
                <Image
                  source={{uri: getImage(index)}}
                  style={styles.featuredImage}
                />
                <Text numberOfLines={3} style={styles.paragraph}>
                  {text}
                </Text>
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>

      {bottomActions && (
        <Animated.View
          style={[
            styles.bottomActions,
            {
              paddingHorizontal: 20,
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-1, 0, topEdge - 1, topEdge, topEdge + 1],
                    outputRange: [1, 0, 0, 0, -1],
                  }),
                },
              ],
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo
              name="adjust"
              size={24}
              color="black"
              style={{marginHorizontal: 10}}
            />
            <Text>326</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.icon]}>
              <Entypo name="export" size={24} color="black" />
            </View>
            <View style={[styles.icon]}>
              <Entypo name="credit" size={24} color="green" />
            </View>
            <View style={[styles.icon]}>
              <Entypo name="share-alternative" size={24} color="black" />
            </View>
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};
