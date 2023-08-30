import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';

import style from './style';
import globalStyle from '../../../assets/styles/globalStyle';

import {RootStackScreenProps} from '../../navigation/navigationType';
import Header from '../../components/Header/Header';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import Button from '../../components/Button/Button';

const Payment = ({navigation}: RootStackScreenProps<'Payment'>) => {
  //
  const {selectedDonationInformation} = useSelector(
    (state: RootState) => state.donations,
  );

  console.log('donations', selectedDonationInformation);

  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView style={style.container}>
        <Header title={'Making a Donation'} />
        <Text
          style={
            style.donationDetail
          }>{`You are about to donate: $${selectedDonationInformation?.price}`}</Text>
      </ScrollView>
      <View style={style.btnContainer}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
