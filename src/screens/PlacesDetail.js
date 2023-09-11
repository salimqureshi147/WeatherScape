import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Wrapper from '../components/myWrapper/Wrapper';
import HeaderBacground from '../components/HeaderBacground';
import {
  clearSky,
  sun,
  fewClouds,
  haze,
  rain,
  snow,
  thunderStorm,
  wind,
  scatteredClouds,
} from '../assets';
import {RF} from '../shared/theme/Responsive';
import CustomText from '../components/CustomText';
import {Black, icon_gray, Primary} from '../shared/theme';
import {placesWeather} from '../flatlistData/Data';
import moment from 'moment-timezone';
import {momentHourOnly} from '../../utils/functions';
import Loader from '../components/Loader';
import {useSelector} from 'react-redux';
import {setDegreeValue} from '../shared/redux/reducers/settingsTempReducer';
import {setLocationData, store} from '../shared/redux';

const PlacesDetail = ({route, navigation}) => {
  const {tempValues, speed} = useSelector(state => state.root.temp);
  const {locationData} = useSelector(state => state.root.user);

  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    // store.dispatch(setDegreeValue(LocationData?.current?.temp));
    fetchDataFromApi();
  }, []);
  const openWeatherKey = `5cc03c2fee95ac3c8531f262aefdeed7`;
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${items.latitude}&lon=${items.longitude}&units=metric&appid=${openWeatherKey}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      store.dispatch(setLocationData(data));
    } catch (error) {
      // console.error('An error occurred while fetching data:', error);
      // You can handle the error here, for example, show an error message to the user
    } finally {
      setIsloading(false); // Set loading state to false whether it succeeds or fails
    }
  };
  const speedConvert = locationData?.current?.wind_speed;
  const multiplyWithSpeed = 0.621371 * speedConvert;
  const degreeConvert = locationData?.current?.temp;
  const multiplyWithDegree = (degreeConvert * 9) / 5 + 32;
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
  //  console.log(items.latitude, 's iiiii');
  const weatherCondition = locationData?.current?.weather[0].main;

  if (isLoading) {
    return <Loader />;
  }
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
              source={
                weatherCondition == 'Clear'
                  ? clearSky
                  : weatherCondition == 'Clouds'
                  ? scatteredClouds
                  : weatherCondition == 'Haze'
                  ? haze
                  : weatherCondition == 'Thunderstorm'
                  ? thunderStorm
                  : weatherCondition == 'Snow'
                  ? snow
                  : weatherCondition == 'Rain'
                  ? rain
                  : fewClouds
              }
              style={{height: RF(60), width: RF(60)}}
              resizeMode={'contain'}
            />
            <View style={{alignItems: 'flex-end'}}>
              <CustomText
                title={moment(locationData?.current?.dt * 1000).format(
                  'dddd' + ' ' + 'MMM' + ' ' + 'D,' + ' ' + 'yyyy',
                )}
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
                  title={
                    tempValues === 'C'
                      ? locationData?.current?.temp + ' ' + `${tempValues}`
                      : multiplyWithDegree.toFixed(2) + ' ' + `${tempValues}`
                  }
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
                title={locationData?.current?.weather[0].description}
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
            <Cloud_Inner
              icon={wind}
              name={'Wind,'}
              des={
                speed === 'KM'
                  ? locationData?.current?.wind_speed?.toFixed(2) +
                    ' ' +
                    `${'km/h'}`
                  : multiplyWithSpeed.toFixed(2) + ' ' + `${speed}`
              }
              right={10}
            />
            <Cloud_Inner
              icon={scatteredClouds}
              name={locationData?.current?.weather[0]?.main}
              des={locationData?.current?.clouds + '%'}
            />
          </View>
        </View>
        <CustomText
          size={RF(18)}
          weight={'600'}
          semiBold
          title={'Details'}
          top={20}
        />
        <View style={styles.DetailView}>
          <CustomText
            title={'Humidity'}
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
          <CustomText
            title={locationData?.current?.humidity + '%'}
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
        </View>
        <View style={styles.DetailView}>
          <CustomText
            title={'Wind Speed'}
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
          <CustomText
            title={
              speed === 'KM'
                ? locationData?.current?.wind_speed?.toFixed(2) +
                  ' ' +
                  `${'km/h'}`
                : multiplyWithSpeed.toFixed(2) + ' ' + `${speed}`
            }
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
        </View>
        <View style={styles.DetailView}>
          <CustomText
            title={'Pressure'}
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
          <CustomText
            title={locationData?.current?.pressure + ' ' + 'pa'}
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
        </View>
        <View style={styles.DetailView}>
          <CustomText
            title={'cloudy'}
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
          <CustomText
            title={locationData?.current?.clouds >= 50 ? 'Yes' : 'NO'}
            weight={'400'}
            size={RF(16)}
            regular></CustomText>
        </View>
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
  DetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
