import {Dimensions, StyleSheet} from 'react-native';
import {SPACING} from '../../constants';
import {Colors} from '../../theme';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    marginRight: SPACING,
    padding: SPACING,
    borderWidth: 2,
    borderColor: Colors.DULL_YELLOW,
    borderRadius: 12,
  },
  listItemText: {
    color: Colors.DARK_GREY,
    fontWeight: '700',
  },
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SPACING * 10,
  },
  headingText: {
    color: Colors.DARK_GREY,
    fontWeight: '700',
    marginBottom: SPACING,
  },
  leftButtonsContainer: {
    flexDirection: 'row',
    width: width / 2,
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: SPACING,
    backgroundColor: Colors.DULL_YELLOW,
    borderRadius: SPACING,
    marginRight: SPACING,
  },
  alignSpacing: {alignItems: 'center'},
});

export default styles;
