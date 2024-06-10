import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const CIRCLE_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE,
    backgroundColor: Colors.LIGHT_PURPLE,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
