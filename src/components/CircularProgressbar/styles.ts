import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../theme';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 50,
    width: width,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: Colors.BACKGROUND_STROKE_COLOR,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 1.0,
  },
});

export default styles;
