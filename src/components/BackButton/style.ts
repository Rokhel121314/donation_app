import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  btnContainer: {
    height: horizontalScale(44),
    width: horizontalScale(44),
    borderRadius: horizontalScale(26),
    marginTop: verticalScale(7),
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
