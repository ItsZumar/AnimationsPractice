import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../theme';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {},
  numberText: {
    fontSize: 41,
    fontWeight: 'bold',
    letterSpacing: 5,
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
  progressText: {
    fontSize: 80,
    // color: 'rgba(256,256,256,0.7)',
    width: 200,
    textAlign: 'center',
  },
});

export default styles;
