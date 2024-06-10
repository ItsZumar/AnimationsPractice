import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const SIZE = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
  },
  loadingStyle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: SIZE / 10,
    borderColor: Colors.WHITE,
    shadowColor: Colors.WHITE,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default styles;
