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
import {loginUser} from '../../api/firebase/user';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {login, resetToInitialState} from '../../redux/reducers/User';

const Login = ({navigation, route}: RootStackScreenProps<'Login'>) => {
  //
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    const user = await loginUser(email, password);
    if (!user.data) {
      setError(user.error);
    } else {
      setError('');
      dispatch(login(user.data));
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            title={'Login'}
            isDisabled={email.length <= 2 || password.length <= 5}
            onPress={() => handleLogin()}
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
