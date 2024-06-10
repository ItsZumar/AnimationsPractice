import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import {C_IMG_HEIGHT, C_IMG_WIDTH} from '../../constants';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  imageContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  image: {
    width: C_IMG_WIDTH,
    height: C_IMG_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 16,
  },
});

export default styles;
