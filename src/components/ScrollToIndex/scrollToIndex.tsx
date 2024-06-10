import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import {LIST_DATA, SPACING} from '../../constants';
import {Colors} from '../../theme';
import {MotiView} from 'moti';

export const ScrollToIndex = () => {
  const flatlistRef = useRef<FlatList>(null);
  const [index, setIndex] = useState<number>(0);
  const [viewPosition, setViewPosition] = useState<number>(0);

  useEffect(() => {
    'worklet';

    flatlistRef.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: viewPosition === 0.5 || viewPosition === 1 ? 0 : SPACING,
      viewPosition,
    });
  }, [index, viewPosition]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
        initialScrollIndex={index}
        style={{flexGrow: 0}}
        data={LIST_DATA}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingLeft: SPACING}}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index: fIndex}) => {
          return (
            <TouchableOpacity onPress={() => setIndex(fIndex)}>
              <MotiView
                animate={{
                  backgroundColor:
                    fIndex === index ? Colors.DULL_YELLOW : Colors.WHITE,
                  opacity: fIndex === index ? 1 : 0.6,
                }}
                transition={{duration: 500}}
                style={[styles.listItem]}>
                <Text style={styles.listItemText}>{item.data}</Text>
              </MotiView>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.alignSpacing}>
          <Text style={styles.headingText}>Scroll position</Text>
          <View style={styles.leftButtonsContainer}>
            <TouchableOpacity
              onPress={() => {
                setViewPosition(0);
              }}>
              <View style={styles.buttonContainer}>
                <Entypo name="align-left" size={24} color={Colors.DARK_GREY} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewPosition(0.5)}>
              <View style={styles.buttonContainer}>
                <Entypo
                  name="align-horizontal-middle"
                  size={24}
                  color={Colors.DARK_GREY}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewPosition(1)}>
              <View style={styles.buttonContainer}>
                <Entypo name="align-right" size={24} color={Colors.DARK_GREY} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.alignSpacing}>
          <Text style={styles.headingText}>Navigation</Text>
          <View style={styles.leftButtonsContainer}>
            <TouchableOpacity
              onPress={() => {
                if (index === 0) return;

                setIndex(index - 1);
              }}>
              <View style={styles.buttonContainer}>
                <Feather name="arrow-left" size={24} color={Colors.DARK_GREY} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (index === LIST_DATA.length - 1) return;

                setIndex(index + 1);
              }}>
              <View style={[styles.buttonContainer, {marginRight: -SPACING}]}>
                <Feather
                  name="arrow-right"
                  size={24}
                  color={Colors.DARK_GREY}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
