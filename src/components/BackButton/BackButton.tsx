import {View, Text, Pressable} from 'react-native';
import React from 'react';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

type PropType = {
  onPress: () => void;
};

const BackButton = (props: PropType) => {
  return (
    <Pressable style={style.btnContainer} onPress={() => props.onPress()}>
      <FontAwesomeIcon icon={faArrowLeft} size={24} color="#022150" />
    </Pressable>
  );
};

export default BackButton;
