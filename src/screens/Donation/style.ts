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
    marginTop: verticalScale(12),
  },
  image: {
    height: verticalScale(240),
    width: '100%',
    resizeMode: 'cover',
  },
  badgeContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(24),
    width: '100%',
  },
  badgeWrapper: {
    marginRight: horizontalScale(10),
  },
  headerContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(16),
  },
  descriptionContainer: {
    marginHorizontal: horizontalScale(30),
    marginVertical: verticalScale(7),
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
    backgroundColor: '#fff',
  },
  backBtnContainer: {
    marginHorizontal: horizontalScale(20),
  },
});

export default style;
