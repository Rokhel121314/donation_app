import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    height: verticalScale(155),
    width: horizontalScale(170),
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  priceContainer: {
    marginTop: verticalScale(5),
  },
});

export default style;
