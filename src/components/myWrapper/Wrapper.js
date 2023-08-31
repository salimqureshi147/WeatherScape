import {
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../shared/theme/Responsive';
import {Primary} from '../../shared/theme';

const Wrapper = ({
  children,
  translucent,
  statusBarStyle,
  statusBarBagColor,
  scrollfalse,
  padZero,
  bgClr,
  noPadding,
  onScroll,
  paddingBottom,
  paddingTop,
}) => {
  return (
    <ScrollView
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      style={[
        styles.main,
        {
          backgroundColor: bgClr ? bgClr : '#fff',
          paddingHorizontal: padZero ? 0 : RF(10),
          paddingBottom: paddingBottom ? paddingBottom : 20,
          padding: noPadding ? 0 : RF(20),
          paddingTop: paddingTop ? paddingTop : RF(20),
        },
      ]}
      scrollEnabled={scrollfalse ? false : true}>
      <StatusBar
        translucent={translucent ? true : false}
        barStyle={statusBarStyle ? statusBarStyle : 'dark-content'}
        backgroundColor={
          statusBarBagColor ? statusBarBagColor : 'rgb(242,239,244)'
        }
      />
      {children}
    </ScrollView>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
