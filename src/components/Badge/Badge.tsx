import {View, Text} from 'react-native';
import React, {useState, useRef} from 'react';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/styles/scaling';
import style from './style';

type PropType = {
  title: string;
  size?: string;
};

const Badge = (props: PropType) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const horizontalPadding = 10;
  const badgeWidth = {
    width: horizontalScale(horizontalPadding * 2 + width),
  };
  return (
    <View
      style={[
        style.badge,
        badgeWidth,
        props.size === 'large' && {height: verticalScale(27)},
      ]}>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[
          style.badgeText,
          props.size === 'large' && {
            fontSize: fontScale(14),
            lineHeight: fontScale(17),
          },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

export default Badge;
