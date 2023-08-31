import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {RF} from '../shared/theme/Responsive';
import {icon_gray, Primary, Secondary, WHITE} from '../shared/theme';

const CustomTabs = ({title, img, focused, color}) => {
  return (
    <>
      {focused ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={img}
            style={[styles.focusedImg, {tintColor: '#fff'}]}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={img}
            style={[styles.focusedImg, {tintColor: color}]}
          />
          <Text
            style={{color: focused ? Primary : icon_gray, fontSize: RF(13)}}>
            {title}
          </Text>
        </View>
      )}
    </>
  );
};

export default CustomTabs;

const styles = StyleSheet.create({
  focusedImg: {
    height: RF(20),
    width: RF(24),
  },
  unfocusedImg: {
    height: 24,
    width: 24,
  },
  round: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Primary,
    height: RF(64),
    width: RF(64),
    borderRadius: 40,
  },
});
