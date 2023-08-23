import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginHorizontal: horizontalScale(24),
    alignItems: 'center',
  },
  image: {
    height: verticalScale(240),
    width: horizontalScale(300),
    resizeMode: 'contain',
  },
  badgeContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(10),
  },
  headerContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(21),
  },
  descriptionContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(7),
  },
  description: {
    fontFamily: 'Inter',
    fontSize: fontScale(14),
    fontWeight: '400',
    lineHeight: fontScale(22),
    color: '#000',
  },
  btnContainer: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(20),
  },
});

export default style;
