import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import style from './style';
import globalStyle from '../../../assets/styles/globalStyle';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

import {categories} from '../../datas/categoryList';
import {RootStackScreenProps} from '../../navigation/navigationType';

import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Donation = ({navigation}: RootStackScreenProps<'Donation'>) => {
  const item = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );

  const categoryBadge = categories.filter(value =>
    item?.categoryIds.includes(value.categoryId),
  );

  return (
    <SafeAreaView
      style={[globalStyle.bgWhite, globalStyle.flex, style.mainContainer]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        {/* IMAGE */}
        <View style={style.imageContainer}>
          <Image source={{uri: item?.image}} style={style.image} />
        </View>

        {/* BADGE */}
        <View style={style.badgeContainer}>
          {categoryBadge.map(value => (
            <View style={style.badgeWrapper}>
              <Badge title={value.name} size="large" key={value.categoryId} />
            </View>
          ))}
        </View>

        {/* HEADER */}
        <View style={style.headerContainer}>
          <Header title={item?.name} type={1} />
        </View>

        {/* DETAILS */}
        <View style={style.descriptionContainer}>
          <Text style={style.description}>{item?.description}</Text>
          <Text style={style.description}>{item?.description}</Text>
          <Text style={style.description}>{item?.description}</Text>
          <Text style={style.description}>{item?.description}</Text>
        </View>
      </ScrollView>

      {/* BUTTON */}
      <View style={[style.btnContainer, globalStyle.bgWhite]}>
        <Button
          title={'Donate'}
          isDisabled={false}
          onPress={() => console.log('text')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Donation;
