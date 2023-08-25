import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registerBtn: {
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
});

export default style;
