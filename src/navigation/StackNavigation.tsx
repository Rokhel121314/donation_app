import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Route';

// screens
import Home from '../screens/Home/Home';
import Donation from '../screens/Donation/Donation';
import {RootStackParamList} from './navigationType';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    //  screenOptions={{header: () => null, headerShown: false}}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Donation"
        component={Donation}
        options={{headerTitle: () => null}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
