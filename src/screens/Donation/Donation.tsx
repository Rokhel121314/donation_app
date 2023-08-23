import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import style from './style';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import globalStyle from '../../../assets/styles/globalStyle';
import {DonationItemType} from '../../datas/donationItems';
import Badge from '../../components/Badge/Badge';
import {categories} from '../../datas/categoryList';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Donation = () => {
  const item = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );

  const title = categories.filter(value =>
    item?.categoryIds.includes(value.categoryId),
  )[0].name;
  console.log('title', title);

  return (
    <View style={[globalStyle.bgWhite, globalStyle.flex, style.mainContainer]}>
      <View>
        {/* IMAGE */}
        <View style={style.imageContainer}>
          <Image source={{uri: item?.image}} style={style.image} />
        </View>

        {/* BADGE */}
        <View style={style.badgeContainer}>
          <Badge title={title} size="large" />
        </View>

        {/* HEADER */}
        <View style={style.headerContainer}>
          <Header title={item?.name} type={1} />
        </View>

        {/* DETAILS */}
        <View style={style.descriptionContainer}>
          <Text style={style.description}>{item?.description}</Text>
        </View>
      </View>

      {/* BUTTON */}
      <View style={style.btnContainer}>
        <Button
          title={'Donate'}
          isDisabled={false}
          onPress={() => console.log('text')}
        />
      </View>
    </View>
  );
};

export default Donation;
