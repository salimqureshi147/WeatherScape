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
import NavHeader from './NavHeader';

const HeaderBacground = ({title, backImage, navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ImageBackground style={imageBack} source={{uri: backImage}}>
        <View style={{marginTop: RF(50)}}>
          <NavHeader
            title={title}
            bgnone
            color={'#fff'}
            navigation={navigation}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default HeaderBacground;

const styles = StyleSheet.create({});
