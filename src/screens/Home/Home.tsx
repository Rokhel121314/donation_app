import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';

import style from './style';
import globalStyle from '../../../assets/styles/globalStyle';

import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.username}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image source={{uri: user.uri}} style={style.profileImage} />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
