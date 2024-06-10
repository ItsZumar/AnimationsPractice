import {Text, View} from 'react-native';

import {PostCardI} from '../../interfaces';
import {Colors} from '../../theme';
import styles from './styles';

export const PostCard = ({item}: PostCardI) => (
  <View style={styles.postContainer}>
    <View
      style={[styles.imageContainer, {backgroundColor: Colors.WHITE}]}></View>
    <View style={styles.postDetail}>
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <Text numberOfLines={2} style={styles.description}>
        {item.body}
      </Text>
    </View>
  </View>
);
