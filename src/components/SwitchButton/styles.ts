import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.LIGHT_PURPLE,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackContainer: {
    position: 'absolute',
    backgroundColor: Colors.ACTIVE_BUTTON,
  },
  knobContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default styles;
