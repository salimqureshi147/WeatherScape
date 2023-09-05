import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Wrapper from '../../components/myWrapper/Wrapper';
import CustomHeader from '../../components/CustomHeader';
import CustomText from '../../components/CustomText';
import {
  Black,
  icon_gray,
  light_gray,
  Primary,
  Secondary,
  statusBarClr,
  WHITE,
} from '../../shared/theme';
import {RF} from '../../shared/theme/Responsive';
import {cloud, cloudyMoon, sun, wind} from '../../assets';
import {Data} from '../../flatlistData/Data';
import Geolocation from 'react-native-geolocation-service';
import {setWeatherData, store} from '../../shared/redux';
import {useSelector} from 'react-redux';
import moment from 'moment-timezone';
import {momentHourOnly} from '../../utils/functions';
const Home = ({navigation}) => {
  const {weatherData} = useSelector(state => state.root.user);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    fetchDataFromApi();
    requestLocationPermission();
  }, []);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission granted, get current position
        Geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log('my location', latitude);
          },
          error => {
            console.error('Error getting location:', error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };
  const openWeatherKey = `5cc03c2fee95ac3c8531f262aefdeed7`;
  const fetchDataFromApi = async () => {
    // console.log(lat, 'latttttttttttttttttttttttttt');
    // console.log(long, 'longgggggggggggggggggggggg');
    if (latitude && longitude) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherKey}`,
      )
        .then(res => res.json())
        .then(data => {
          // setIsLoading(true);
          // setWeather(data);
     
          store.dispatch(setWeatherData(data));

        });
    }
  };

  // const weatherDataLength = Object.keys(weatherData.hourly).length;
  // console.log('Length of weatherData:', weatherData.daily[0]);

  const [selectedButton, setSelectedButton] = useState('Today');
  const Cloud_Inner = ({icon, name, des, mLeft}) => {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
        }}>
        <View style={[styles.cloudAssets]}>
          <Image
            style={{height: RF(15), width: RF(16), marginRight: RF(10)}}
            source={icon}
            resizeMode={'contain'}
          />
          <CustomText title={name} regular size={RF(16)} weight={'500'} />
        </View>
        <View style={[styles.des_Cont]}>
          <CustomText title={des} regular size={RF(16)} weight={'500'} />
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => {
    // const format = moment(item.dt * 1000).format('ddd');
    // console.log(item, 'wekkly');
    return (
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          height: RF(70),
          marginRight: RF(15),
        }}>
        <CustomText
          title={
            selectedButton == 'Weekly'
              ? moment(item.dt * 1000).format('ddd')
              : momentHourOnly(item.dt)
          }
          regular
          weight={'500'}
          size={RF(14)}
        />
        <Image style={{height: RF(18), width: RF(18)}} source={cloudyMoon} />
        <View style={{flexDirection: 'row'}}>
          <CustomText
            title={
              selectedButton == 'Weekly'
                ? Math.floor(item.temp.max)
                : Math.floor(item.temp)
            }
            regular
            weight={'500'}
            size={RF(14)}
          />
          <Text
            style={{
              bottom: 3,
              fontSize: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            o
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Wrapper bgClr={statusBarClr}>
      <CustomHeader
        title={'John Duo!'}
        navigateNotification={'Notification'}
        navigation={navigation}
      />
      <View
        style={{
          width: '100%',
          padding: RF(40),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <CustomText
            title={Math.floor(weatherData.current.temp)}
            size={36}
            weight={'600'}
            semiBold
          />
          <CustomText title={'o'} size={28} weight={'600'} semiBold />
        </View>
        <View style={{borderLeftWidth: 3, borderColor: light_gray}}></View>
        <View>
          <CustomText title={'Cloudy'} size={26} weight={'600'} semiBold />
          <CustomText title={'Tuesday,21 October'} weight={'400'} />
        </View>
      </View>

      <View style={styles.cloudCard}>
        <Image style={styles.cloudImage} source={cloud} />
        <View style={[styles.Container]}>
          <Cloud_Inner
            icon={wind}
            name={'Wind'}
            des={Math.floor(weatherData.current.wind_speed) + ' ' + `${'km/h'}`}
          />
          <Cloud_Inner icon={sun} name={'Sun'} des={'32%'} />
        </View>
      </View>
      <View style={{width: '100%', flexDirection: 'row', marginTop: RF(30)}}>
        <View
          style={[
            styles.days_pattern,
            {
              borderBottomColor:
                selectedButton == 'Today' ? Secondary : icon_gray,
            },
          ]}>
          <TouchableOpacity onPress={() => setSelectedButton('Today')}>
            <CustomText
              title={'Today'}
              regular
              weight={'600'}
              size={RF(14)}
              color={selectedButton == 'Today' ? Secondary : Black}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.days_pattern,
            {
              borderBottomColor:
                selectedButton == 'Tomorrow' ? Secondary : icon_gray,
            },
          ]}>
          <TouchableOpacity onPress={() => setSelectedButton('Tomorrow')}>
            <CustomText
              title={'Tomorrow'}
              regular
              weight={'600'}
              size={RF(14)}
              color={selectedButton == 'Tomorrow' ? Secondary : Black}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.days_pattern,
            {
              borderBottomColor:
                selectedButton == 'Weekly' ? Secondary : icon_gray,
            },
          ]}>
          <TouchableOpacity onPress={() => setSelectedButton('Weekly')}>
            <CustomText
              title={'Weekly'}
              regular
              weight={'600'}
              size={RF(14)}
              color={selectedButton == 'Weekly' ? Secondary : Black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: RF(20), paddingBottom: 100}}>
        <FlatList
          data={
            selectedButton == 'Weekly'
              ? weatherData.daily
              : selectedButton == "Tomorrow"? weatherData.hourly.slice(24, 48):  weatherData.hourly.slice(0, 24)
          }
          // data={weatherData.hourly}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: RF(30),
            alignSelf: 'center',
          }}>
          <View
            style={[
              styles.rect,
              {
                backgroundColor:
                  selectedButton == 'Today' ? Primary : Secondary,
                width: selectedButton == 'Today' ? RF(11) : RF(5),
              },
            ]}
          />
          <View
            style={[
              styles.rect,
              {
                backgroundColor:
                  selectedButton == 'Tomorrow' ? Primary : Secondary,
                width: selectedButton == 'Tomorrow' ? RF(11) : RF(5),
              },
            ]}
          />
          <View
            style={[
              styles.rect,
              {
                backgroundColor:
                  selectedButton == 'Weekly' ? Primary : Secondary,
                width: selectedButton == 'Weekly' ? RF(11) : RF(5),
              },
            ]}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  cloudCard: {
    height: RF(170),
    marginTop: 50,
    width: '100%',
    borderRadius: RF(30),
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudImage: {
    height: RF(150),
    width: RF(200),
    borderWidth: 1,
    position: 'absolute',
    bottom: RF(105),
    alignSelf: 'center',
  },
  cloudAssets: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
    alignItems: 'center',
  },
  des_Cont: {
    borderLeftWidth: 1,
    borderColor: icon_gray,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container: {
    justifyContent: 'space-between',
    height: RF(70),
    width: RF(170),
    marginTop: RF(15),
  },
  days_pattern: {
    width: '33%',
    borderBottomWidth: 2,
    borderBottomColor: light_gray,
    alignItems: 'center',
    paddingBottom: 10,
  },
  rect: {
    height: RF(5),
    width: RF(5),
    marginLeft: RF(5),
    borderRadius: 4,
  },
});
