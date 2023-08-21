import {View, Text, Pressable} from 'react-native';
import React, {useState, useRef} from 'react';

import style from './style';
import {horizontalScale} from '../../../assets/styles/scaling';

type PropType = {
  title: string;
  inActive: boolean;
  onPress: () => void;
};

const Button = (props: PropType) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const horizontalPadding = 33;
  const tabWidth = {
    width: horizontalScale(horizontalPadding * 2 + width),
  };
  return (
    <Pressable
      disabled={props.inActive}
      style={[style.tab, props.inActive && style.inActiveTab, tabWidth]}
      onPress={() => props.onPress()}>
      <Text
        onTextLayout={e => {
          setWidth(e.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.tabText, props.inActive && style.inActiveText]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Button.default = {
  inActive: false,
  onPress: () => {},
};

export default Button;
