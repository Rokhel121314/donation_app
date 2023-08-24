import {StyleSheet} from 'react-native';
import {fontScale, verticalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#36455a',
    fontSize: fontScale(12),
    lineHeight: fontScale(15),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167, 0.5)',
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    fontWeight: '500',
  },
});

export default style;
