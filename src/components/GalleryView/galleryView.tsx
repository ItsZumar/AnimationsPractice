import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {GALLERY_IMAGES} from '../../constants';
import {GALLERY_IMAGES_I} from '../../interfaces';
import styles from './styles';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const IMAGE_SIZE = 80;
const SPACING = 10;

export const GalleryView = () => {
  const topRef = useRef<FlatList>(null);
  const thumbRef = useRef<FlatList>(null);

  const [activeIndex, setActiveIndex] = useState<number>(1);

  const [images, setImages] = useState<GALLERY_IMAGES_I[]>([
    {
      id: '1000',
      path: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]);

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);

    console.log('index: ', index);

    // topRef.current?.scrollToOffset({
    //   offset: index * width,
    //   animated: true,
    // });

    topRef.current?.scrollToIndex({
      index,
      animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      //   thumbRef?.current?.scrollToOffset({
      //     offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
      //     animated: true,
      //   });

      thumbRef.current?.scrollToIndex({
        index,
        animated: true,
      });
    }
  };

  useEffect(() => {
    setImages(GALLERY_IMAGES);
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <FlatList
          ref={topRef}
          horizontal
          pagingEnabled
          initialScrollIndex={activeIndex}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(
            ev: NativeSyntheticEvent<NativeScrollEvent>,
          ) => {
            const index: number = parseInt(
              (ev.nativeEvent.contentOffset.x / width).toFixed(0),
            );
            scrollToActiveIndex(index);
          }}
          data={images}
          keyExtractor={({id}) => id}
          renderItem={({item}: {item: GALLERY_IMAGES_I}) => (
            <View key={item.id} style={{width, height}}>
              <Image
                source={{uri: item.path}}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          )}
        />

        <FlatList
          ref={thumbRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          keyExtractor={({id}) => id}
          contentContainerStyle={{paddingHorizontal: SPACING}}
          style={{position: 'absolute', bottom: IMAGE_SIZE}}
          renderItem={({
            item,
            index,
          }: {
            item: GALLERY_IMAGES_I;
            index: number;
          }) => (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{uri: item.path}}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};
