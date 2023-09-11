import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {notify} from '../assets';
import {Primary, statusBarClr} from '../shared/theme';
import {RF} from '../shared/theme/Responsive';

const CustomHeader = ({
  bgColor,
  istop,
  head,
  title,
  Clr,
  navigateNotification,
  navigation,
  noImage,
}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: istop ? 10 : 0,
        backgroundColor: bgColor,
        height: RF(80),
        padding: RF(10),
        alignItems: 'center',
      }}>
      <View>
        {head ? null : <CustomText title={'Welcome'} medium size={RF(18)} />}
        <CustomText
          title={title}
          medium
          color={Clr ? Clr : Primary}
          size={RF(18)}
        />
      </View>
      {noImage ? null : (
        <TouchableOpacity
          onPress={() => navigation.navigate(navigateNotification)}>
          <Image style={{height: RF(25), width: RF(25)}} source={notify} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
