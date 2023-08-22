import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

type PropType = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
};

const SingleDonationItem = (props: PropType) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image source={{uri: props.uri}} style={style.image} />
      </View>
      <View style={style.donationInformation}>
        <Header title={props.donationTitle} type={3} color={'#0a043c'} />
        <View style={style.priceContainer}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156cf7'}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleDonationItem;
