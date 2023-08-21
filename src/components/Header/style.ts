import {StyleSheet} from 'react-native';
import {fontScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: fontScale(24),
    lineHeight: fontScale(29),
    color: '#000',
  },
  title2: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: fontScale(18),
    lineHeight: fontScale(22),
    color: '#000',
  },
  title3: {
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: fontScale(16),
    lineHeight: fontScale(19),
    color: '#000',
  },
});

export default style;
