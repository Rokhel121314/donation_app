import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {PrivateScreens, PublicScreens} from './StackNavigation';

const RootNavigation = () => {
  const user = useSelector((state: RootState) => state.user);
  return user.isLoggedIn ? <PrivateScreens /> : <PublicScreens />;
};

export default RootNavigation;
