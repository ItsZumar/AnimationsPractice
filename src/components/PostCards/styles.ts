import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: Colors.LIGHT_PURPLE,
    borderRadius: 7,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // backgroundColor: Colors.WHITE,
  },
  postDetail: {
    marginLeft: 10,
  },
  title: {
    color: Colors.LIGHT_GREY,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    marginBottom: 2,
    textTransform: 'capitalize',
    width: width / 1.6,
  },
  description: {
    color: Colors.LIGHT_GREY,
    marginBottom: 7,
    textTransform: 'capitalize',
    width: width / 1.6,
  },
});

export default styles;
