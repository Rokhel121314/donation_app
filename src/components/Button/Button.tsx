import {View, Text, Pressable} from 'react-native';
import React from 'react';
import style from './style';

type PropType = {
  title: string;
  isDisabled: boolean;
  onPress: () => void;
};

const Button = (props: PropType) => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.disabled]}
      onPress={() => props.onPress()}>
      <Text style={style.btnText}>{props.title}</Text>
    </Pressable>
  );
};
const defaultProps = {
  isDisabled: false,
  onPress: () => {},
};

Button.defaultProps = defaultProps;

export default Button;
