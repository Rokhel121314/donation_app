import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

type PropType = {
  donationItemId: number;
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress: (props: number) => void;
};

const SingleDonationItem = (props: PropType) => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image source={{uri: props.uri}} style={style.image} />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0a043c'}
          numberOfLines={1}
        />
        <View style={style.priceContainer}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156cf7'}
          />
        </View>
      </View>
    </Pressable>
  );
};

const defaultProps = {
  onPress: () => {},
};

SingleDonationItem.defaultProps = defaultProps;

export default SingleDonationItem;
