import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import Wrapper from '../components/myWrapper/Wrapper';
import HeaderBacground from '../components/HeaderBacground';
import {back, sun, sunCloud, wind} from '../assets';
import {RF} from '../shared/theme/Responsive';
import CustomText from '../components/CustomText';
import {Black, icon_gray, Primary} from '../shared/theme';
import {placesWeather} from '../flatlistData/Data';

const PlacesDetail = ({route, navigation}) => {
  const renderDetails = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: RF(10),
        }}>
        <CustomText title={item.title} weight={'400'} size={RF(16)} regular />
        <CustomText title={item.des} weight={'400'} size={RF(16)} regular />
      </View>
    );
  };
  const {items} = route.params;
  const Cloud_Inner = ({icon, name, des, right}) => {
    return (
      <View style={{flexDirection: 'row', marginLeft: 5, marginRight: right}}>
        <View style={styles.cloudAssets}>
          <Image
            style={{height: 15, width: 16, marginRight: 5}}
            source={icon}
            resizeMode={'contain'}
          />
          <CustomText title={name} regular size={12} weight={'500'} />
        </View>
        <View style={styles.des_Cont}>
          <CustomText title={des} regular size={12} weight={'500'} />
        </View>
      </View>
    );
  };

  console.log(items, 's iiiii');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderBacground
        navigation={navigation}
        backImage={items.imge}
        title={items.place}
      />
      <View style={{padding: RF(20)}}>
        <View style={styles.container}>
          <View style={styles.cloudView}>
            <Image
              source={sunCloud}
              style={{height: RF(60), width: RF(60)}}
              resizeMode={'contain'}
            />
            <View style={{alignItems: 'flex-end'}}>
              <CustomText
                title={'Monday Aug 16, 2023'}
                size={RF(16)}
                semiBold
                weight={'500'}
                color={Black}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginVertical: RF(10),
                }}>
                <CustomText
                  title={items.deg}
                  size={RF(30)}
                  regular
                  weight={'700'}
                  color={Primary}
                />
                <CustomText
                  title={'o'}
                  size={RF(12)}
                  regular
                  weight={'700'}
                  color={Primary}
                />
              </View>
              <CustomText
                title={'Mostly Sunnt'}
                size={RF(10)}
                regular
                weight={'500'}
                color={'#92979D'}
              />
              <CustomText
                title={'Throughout the day'}
                size={RF(10)}
                regular
                weight={'500'}
                color={'#92979D'}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Cloud_Inner icon={wind} name={'Wind,'} des={'4km/h'} right={10} />
            <Cloud_Inner icon={sun} name={'Sun'} des={'32%'} />
          </View>
        </View>
        <CustomText
          size={RF(18)}
          weight={'600'}
          semiBold
          title={'Details'}
          top={20}
        />
        <FlatList data={placesWeather} renderItem={renderDetails} />
      </View>
    </View>
  );
};

export default PlacesDetail;

const styles = StyleSheet.create({
  container: {
    height: RF(160),
    padding: 10,
    width: '100%',
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  cloudView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cloudAssets: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  des_Cont: {
    borderColor: icon_gray,
    marginLeft: 5,
  },
  rect: {
    height: RF(5),
    width: RF(20),
    marginLeft: RF(5),
    borderRadius: 4,
  },
});
