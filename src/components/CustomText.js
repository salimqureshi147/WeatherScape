import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomText = ({
  title,
  regular,
  semiBold,
  bold,
  medium,
  light,
  weight,
  size,
  color,
  top,
  opensans,
  mLeft,
  margin,
  width,
  numLines,
}) => {
  return (
    <View>
      <Text
        numberOfLines={numLines}
        style={{
          marginTop: top ? top : 0,
          marginLeft: mLeft ? mLeft : 0,
          margin: margin ? margin : 0,
          fontSize: size,
          width: width ? width : null,
          fontWeight: weight,
          fontFamily: regular
            ? 'Poppins-Regular'
            : null || bold
            ? 'Poppins-Bold'
            : null || semiBold
            ? 'Poppins-SemiBold'
            : null || medium
            ? 'Poppins-Medium'
            : null || light
            ? 'Poppins-Light' || opensans
              ? 'open-sans.italic'
              : null
            : null,
          color: color ? color : '#000',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
