import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {back} from '../assets';
import CustomText from './CustomText';
import {RF} from '../shared/theme/Responsive';
import {Black} from '../shared/theme';

const NavHeader = ({navigation, title}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: RF(130),
        backgroundColor: 'rgb(242,239,244)',
        padding: RF(20),
      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: RF(40)}}>
        <Image
          source={back}
          style={{
            tintColor: Black,
            height: RF(20),
            width: RF(18),
            marginRight: RF(10),
          }}
          resizeMode={'contain'}
        />
        <CustomText title={title} size={RF(18)} weight={'500'} medium />
      </View>
    </TouchableOpacity>
  );
};

export default NavHeader;

const styles = StyleSheet.create({});
