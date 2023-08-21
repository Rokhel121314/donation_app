import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(50),
  },
  tabText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontScale(14),
    lineHeight: fontScale(17),
    color: '#fff',
    textAlign: 'center',
  },
  inActiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inActiveText: {
    color: '#79869F',
  },
});

export default style;
