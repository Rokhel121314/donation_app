import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

import style from './style';
import globalStyle from '../../../assets/styles/globalStyle';

import {RootStackScreenProps} from '../../navigation/navigationType';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = ({navigation, route}: RootStackScreenProps<'Login'>) => {
  //
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('email', email);
  console.log('password', password);

  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Email'}
            placeHolder={'Enter your email...'}
            keyboardType={'email-address'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Password'}
            placeHolder={'******'}
            keyboardType={'default'}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button
            title={'Login'}
            isDisabled={false}
            onPress={() => {
              {
              }
            }}
          />
        </View>
        <Pressable
          style={style.registerBtn}
          onPress={() => navigation.navigate('Register')}>
          <Header type={3} title={"Don't have an account?"} color={'#156cf7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
