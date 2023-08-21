import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f5f9',
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(10),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: fontScale(14),
    lineHeight: fontScale(14),
    color: '#686c7a',
  },
});

export default style;
