import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(22),
  },
  badgeText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: fontScale(10),
    lineHeight: fontScale(12),
    color: '#fff',
    textAlign: 'center',
  },
});

export default style;
