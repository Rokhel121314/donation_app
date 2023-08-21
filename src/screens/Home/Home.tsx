import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import style from './style';
import globalStyle from '../../../assets/styles/globalStyle';

import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      <Search onSearch={value => console.log(value)} />
    </SafeAreaView>
  );
};

export default Home;
