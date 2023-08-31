import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {WHITE} from '../shared/theme';
import {imageBack} from '../utils/styles';
import {RF} from '../shared/theme/Responsive';
import {back} from '../assets';

const HeaderBacground = ({title, backImage, navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ImageBackground style={imageBack} source={{uri: backImage}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            marginTop: RF(60),
            alignItems: 'center',
            paddingLeft: RF(20),
          }}>
          <Image
            style={{height: RF(12), width: RF(15), marginRight: 20}}
            source={back}
            resizeMode={'contain'}
          />
          <CustomText
            title={title}
            weight={'500'}
            size={18}
            semiBold
            color={WHITE}
          />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

export default HeaderBacground;

const styles = StyleSheet.create({});
