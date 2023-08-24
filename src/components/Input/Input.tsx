import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';
import React, {useState} from 'react';

import style from './style';

type PropType = {
  label: string;
  placeHolder?: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry: boolean;
  onChangeText: (val: string) => void;
};

const Input = (props: PropType) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeHolder}
        value={value}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};

const defaultProps = {
  label: 'label',
  keyboardType: 'default',
  secureTextEntry: false,
  onChangeText: () => {},
};

Input.defaultProps = defaultProps;

export default Input;
