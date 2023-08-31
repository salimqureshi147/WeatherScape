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
import {Primary} from '../shared/theme';
import {RF} from '../shared/theme/Responsive';

const CustomHeader = ({
  istop,
  head,
  title,
  Clr,
  navigateNotification,
  navigation,
}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: istop ? 10 : 0,
        height: RF(130),
        padding: RF(10),
        alignItems: 'center',
        backgroundColor: 'rgb(242,239,244)',
      }}>
      <View style={{marginTop: RF(40)}}>
        {head ? null : (
          <CustomText title={'Welcome'} regular weight={'400'} size={RF(18)} />
        )}
        <CustomText
          title={title}
          semiBold
          weight={'400'}
          color={Clr ? Clr : Primary}
          size={RF(18)}
        />
      </View>
      <TouchableOpacity
        style={{marginTop: RF(40)}}
        onPress={() => navigation.navigate(navigateNotification)}>
        <Image style={{height: RF(25), width: RF(25)}} source={notify} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
