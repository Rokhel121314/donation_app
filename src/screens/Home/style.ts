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
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(7),
    marginBottom: verticalScale(16),
  },
  donationItemsContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItemContainer: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default style;
