import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
  },
  donationDetail: {
    marginTop: verticalScale(12),
  },
  btnContainer: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(12),
  },
});

export default style;
