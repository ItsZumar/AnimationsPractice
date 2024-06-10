import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import {AVATAR_SIZE, ITEM_SPACING} from '../../constants';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  listCard: {
    flexDirection: 'row',
    padding: ITEM_SPACING,
    marginBottom: ITEM_SPACING,
    backgroundColor: 'rgba(255,255,255,.9)',
    borderRadius: 12,
    // elevation: 1,
  },
  profilePic: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: ITEM_SPACING / 2,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  jobTitle: {
    fontSize: 17,
    opacity: 0.8,
  },
  email: {
    fontSize: 14,
    opacity: 0.8,
    color: Colors.SKY_BLUE,
  },
});

export default styles;
