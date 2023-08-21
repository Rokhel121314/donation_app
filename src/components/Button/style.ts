import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(50),
  },
  disabled: {
    opacity: 0.5,
  },

  btnText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontScale(16),
    lineHeight: fontScale(19),
    color: '#fff',
    textAlign: 'center',
  },
});

export default style;
