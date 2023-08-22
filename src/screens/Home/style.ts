import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    lineHeight: fontScale(19),
    fontWeight: '400',
    color: '#636776',
  },

  username: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    resizeMode: 'contain',
    height: verticalScale(50),
    width: horizontalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(23),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    resizeMode: 'contain',
    height: verticalScale(160),
    width: '100%',
  },
});

export default style;
