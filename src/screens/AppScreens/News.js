import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Wrapper from '../../components/myWrapper/Wrapper';
import CustomText from '../../components/CustomText';
import {
  HP,
  RF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../shared/theme/Responsive';
import {
  Black,
  Primary,
  Secondary,
  statusBarClr,
  WHITE,
} from '../../shared/theme';
import {NewsData} from '../../flatlistData/Data';
import {arrow} from '../../assets';

const News = ({navigation}) => {
  console.log('navigation', navigation);
  const renderNews = ({item, index}) => {
    return (
      <View style={{marginVertical: RF(10)}}>
        <CustomText title={item.title} size={RF(16)} weight={'500'} regular />
        <ImageBackground
          style={styles.imageBack}
          imageStyle={{borderRadius: RF(20)}}
          source={{uri: item.img}}
          resizeMode={'contain'}>
          <View style={styles.card_insideContainer}>
            <CustomText
              title={item.about}
              regular
              weight={'600'}
              size={RF(14)}
            />
            <CustomText
              title={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
              }
              regular
              weight={'300'}
              color={Black}
              top={RF(10)}
              size={RF(13)}
            />
            <TouchableOpacity
              style={styles.detail_Button}
              onPress={() =>
                navigation.navigate('NewsBlogDetail', {item: item.img})
              }>
              <CustomText color={WHITE} title={'View Details'} size={RF(14)} />
              <Image
                style={{height: RF(20), width: RF(20)}}
                source={arrow}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <Wrapper paddingTop={RF(50)} bgClr={statusBarClr}>
      <CustomText title={'News Blog'} semiBold size={RF(18)} margin={RF(10)} />
      <View style={{paddingBottom: 100}}>
        <FlatList
          data={NewsData}
          renderItem={renderNews}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Wrapper>
  );
};

export default News;

const styles = StyleSheet.create({
  imageBack: {
    height: RF(250),
    width: '100%',
    marginTop: RF(10),
    marginBottom: RF(30),
    borderRadius: RF(40),
    justifyContent: 'flex-end',
  },
  card_insideContainer: {
    height: RF(155),
    width: '100%',
    backgroundColor: WHITE,
    borderBottomLeftRadius: RF(18),
    borderBottomRightRadius: RF(18),
    elevation: 2,
    padding: RF(20),
  },
  detail_Button: {
    height: RF(33),
    marginTop: 5,
    borderRadius: 100,
    width: RF(135),
    backgroundColor: Primary,
    paddingHorizontal: RF(10),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'red',
    padding: RF(10),
  },
});
