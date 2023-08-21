import {View, Text} from 'react-native';
import React, {useState, useRef} from 'react';

import {horizontalScale} from '../../../assets/styles/scaling';
import style from './style';

type PropType = {
  title: string;
};

const Badge = (props: PropType) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const horizontalPadding = 10;
  const badgeWidth = {
    width: horizontalScale(horizontalPadding * 2 + width),
  };
  return (
    <View style={[style.badge, badgeWidth]}>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.badgeText]}>
        {props.title}
      </Text>
    </View>
  );
};

export default Badge;
