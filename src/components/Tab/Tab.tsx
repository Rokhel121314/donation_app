import {View, Text, Pressable} from 'react-native';
import React, {useState, useRef} from 'react';

import style from './style';
import {horizontalScale} from '../../../assets/styles/scaling';

type PropType = {
  title: string;
  inActive: boolean;
  tabId: number;
  onPress: (props: number) => void;
};

const Tab = (props: PropType) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const horizontalPadding = 33;
  const tabWidth = {
    width: horizontalScale(horizontalPadding * 2 + width),
  };
  return (
    <Pressable
      style={[style.tab, props.inActive && style.inActiveTab, tabWidth]}
      onPress={() => props.onPress(props.tabId)}>
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

const defaultProps: PropType = {
  title: 'item',
  inActive: false,
  tabId: 1,
  onPress: () => {},
};

Tab.defaultProps = defaultProps;

export default Tab;
