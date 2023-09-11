import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {back} from '../assets';
import CustomText from './CustomText';
import {RF} from '../shared/theme/Responsive';
import {Black} from '../shared/theme';

const NavHeader = ({navigation, title, bgnone, color}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: RF(80),
        backgroundColor: bgnone ? 'transparent' : 'rgb(242,239,244)',
        paddingLeft: RF(10),
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={back}
          style={{
            tintColor: bgnone ? '#fff' : Black,
            height: RF(20),
            width: RF(18),
            marginRight: RF(10),
          }}
          resizeMode={'contain'}
        />
        <CustomText title={title} color={color} size={RF(18)} medium />
      </TouchableOpacity>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({});
