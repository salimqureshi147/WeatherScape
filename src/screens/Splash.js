import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {splash_bac, WHITE} from '../shared/theme';
import {RF} from '../shared/theme/Responsive';
import {splash_Frame} from '../assets';
import CustomText from '../components/CustomText';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate('OnBoarding1');
    }, 3000);
  }, []);
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={splash_bac} />
      <Image style={{height: RF(210), width: RF(210)}} source={splash_Frame} />
      <View style={styles.powered}>
        <CustomText
          size={RF(13)}
          regular
          title={'Powered by Webevis Technologies'}
          weight={'500'}
          color={WHITE}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: splash_bac,
    justifyContent: 'center',
    alignItems: 'center',
  },
  powered: {
    position: 'absolute',
    bottom: RF(20),
  },
});
