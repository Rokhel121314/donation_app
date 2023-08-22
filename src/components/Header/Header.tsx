import {View, Text} from 'react-native';
import React from 'react';

import style from './style';

type PropType = {
  title: string;
  type: number;
  color: string;
};

const Header = (props: PropType) => {
  //
  const headerStyle = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  return (
    <View>
      <Text style={[headerStyle(), props.color && {color: props.color}]}>
        {props.title}
      </Text>
    </View>
  );
};

Header.default = {
  title: '',
  type: 1,
  color: '#000',
};

export default Header;
