import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import style from './style';
import globalStyle from '../../../assets/styles/globalStyle';

import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

import usePagination from '../../hooks/usePagination';
import {
  resetDonations,
  setSelectedDonationInformation,
} from '../../redux/reducers/Donation';
import {DonationItemType} from '../../datas/donationItems';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import type {RootStackScreenProps} from '../../navigation/navigationType';
import {resetToInitialState} from '../../redux/reducers/User';
import {logout} from '../../api/firebase/user';

const Home = ({navigation}: RootStackScreenProps<'Home'>) => {
  //
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);
  const dispatch: AppDispatch = useDispatch();

  const handleUpdateSelectedCategory = (categoryId: number) => {
    dispatch(updateSelectedCategoryId(categoryId));
  };

  const {loadMoreData, dataList} = usePagination(categories.categories);

  const [donationItems, setDonationItems] = useState<DonationItemType[]>();

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.username}>
              <Header title={user.displayName + ' ' + ' 👋'} />
            </View>
          </View>
          <View>
            <Image source={{uri: user.uri}} style={style.profileImage} />
            <Pressable
              onPress={async () => {
                dispatch(resetToInitialState());
                await logout();
              }}>
              <Header title={'Logout'} type={3} color={'#156cf7'} />
            </Pressable>
          </View>
        </View>

        {/* SEARCH BOX */}
        <View style={style.searchBox}>
          <Search onSearch={() => console.log('test')} />
        </View>

        {/* IMAGE */}
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../../assets/images/highlighted_image.png')}
          />
        </Pressable>

        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>

        {/* CATEGORIES */}
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => loadMoreData()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  title={item.name}
                  inActive={item.categoryId !== categories.selectedCategoryId}
                  tabId={item.categoryId}
                  onPress={handleUpdateSelectedCategory}
                />
              </View>
            )}
          />
        </View>

        {/* DONATION ITEMS */}
        {donationItems !== undefined && donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => (
              <View
                key={value.donationItemId}
                style={style.singleDonationItemContainer}>
                <SingleDonationItem
                  price={parseFloat(value.price)}
                  badgeTitle={
                    categories.categories.filter(
                      val => val.categoryId === categories.selectedCategoryId,
                    )[0].name
                  }
                  uri={value.image}
                  donationTitle={value.name}
                  donationItemId={value.donationItemId}
                  onPress={selectedDonationId => {
                    dispatch(
                      setSelectedDonationInformation(selectedDonationId),
                    );
                    navigation.navigate('Donation');
                  }}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
