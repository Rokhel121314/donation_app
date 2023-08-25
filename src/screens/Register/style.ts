import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    flex: 1,
  },
  fieldContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
  success: {
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    color: '#28a745',
    marginBottom: verticalScale(24),
  },
});

export default style;
