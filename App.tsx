import React from 'react';

import 'react-native-reanimated';
import 'react-native-gesture-handler';

import {
  CircularProgressBar,
  FloatingMenu,
  CounterApp,
  PostCardList,
  ScrollToIndex,
  WavyIndicator,
  LoadingIndicatorAnimation,
  SwtichButton,
  GalleryView,
  AnimatedFlatlist,
  AnimatedCarousel,
  StickyFooter,
} from './src/components';
import {Products} from './src/screens';

export default function App() {
  return (
    <>
      {/* <CircularProgressBar /> */}
      {/* <FloatingMenu /> */}
      {/* <CounterApp /> */}
      {/* <ScrollToIndex /> */}
      {/* <WavyIndicator /> */}
      {/* <LoadingIndicatorAnimation /> */}
      {/* <SwtichButton /> */}
      {/* <GalleryView /> */}
      {/* <AnimatedFlatlist /> */}
      {/* <AnimatedCarousel /> */}
      {/* <StickyFooter /> */}
      <Products />

      {/* <PostCardList /> */}
    </>
  );
}
