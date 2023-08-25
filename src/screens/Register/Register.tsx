import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';
import BackButton from '../../components/BackButton/BackButton';
import {RootStackScreenProps} from '../../navigation/navigationType';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {createUser} from '../../api/firebase/user';

const Register = ({navigation}: RootStackScreenProps<'Register'>) => {
  //
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('detail', fullName, email, password);

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
              onChangeText={text => setFullName(text)}
            />
          </View>

          <View style={globalStyle.marginBottom24}>
            <Input
              label={'Email'}
              keyboardType={'email-address'}
              placeHolder={'youremail@gmail.com'}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={globalStyle.marginBottom24}>
            <Input
              label={'Password'}
              placeHolder="******"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Button
              title="Register"
              onPress={async () => {
                await createUser(fullName, email, password);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
