import {StyleSheet, TextStyle} from 'react-native';
import {MENU_BUTTON_SIZE} from '../../constants';
import {Colors} from '../../theme';

const CircleStyle: TextStyle = {
  width: MENU_BUTTON_SIZE,
  height: MENU_BUTTON_SIZE,
  borderRadius: MENU_BUTTON_SIZE / 2,
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  fab: {
    ...CircleStyle,
    backgroundColor: Colors.PURPLE,
    zIndex: 2,
  },
  expandingCircle: {
    ...CircleStyle,
    backgroundColor: Colors.PURPLE,
    position: 'absolute',
    zIndex: 0,
  },
  actionBtn: {
    ...CircleStyle,
    backgroundColor: Colors.PURPLE,
    position: 'absolute',
    zIndex: -1,
  },
  menuItemsContainer: {
    position: 'absolute',
    bottom: 70,
    right: 31,
    zIndex: 100,
  },
  menuItem: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuItemText: {
    color: Colors.WHITE,
    fontSize: 19,
    letterSpacing: 1,
    marginRight: 10,
  },
  iconContainer: {
    backgroundColor: Colors.WHITE,
    padding: 7,
    borderRadius: 30,
  },
  menuIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -15}, {translateY: -15}],
  },
});

export default styles;
