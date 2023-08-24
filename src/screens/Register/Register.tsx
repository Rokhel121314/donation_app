import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';
import BackButton from '../../components/BackButton/BackButton';
import {RootStackScreenProps} from '../../navigation/navigationType';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Register = ({navigation}: RootStackScreenProps<'Register'>) => {
  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={style.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <View style={style.fieldContainer}>
          <View style={globalStyle.marginBottom24}>
            <Header type={1} title={'Hello and Welcome !'} />
          </View>

          <View style={globalStyle.marginBottom24}>
            <Input
              label={'First & Last Name'}
              placeHolder={'Enter your Full Name..'}
            />
          </View>

          <View style={globalStyle.marginBottom24}>
            <Input
              label={'Email'}
              keyboardType={'email-address'}
              placeHolder={'youremail@gmail.com'}
            />
          </View>

          <View style={globalStyle.marginBottom24}>
            <Input
              label={'Password'}
              placeHolder="******"
              secureTextEntry={true}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Button
              title="Register"
              onPress={() => {
                {
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
