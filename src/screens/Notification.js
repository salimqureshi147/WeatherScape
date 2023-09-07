import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import Wrapper from '../components/myWrapper/Wrapper';
import NavHeader from '../components/NavHeader';
import {icon_gray, inputBack, SecondaryYellow} from '../shared/theme';
import {RF, SCREEN_HEIGHT} from '../shared/theme/Responsive';
import {find, notifyIcon} from '../assets';
import CustomText from '../components/CustomText';

const Notification = ({navigation}) => {
  // const RenderNotification = () => {
  //   return (
  //     <View style={{flex: 1, backgroundColor: WHITE, marginTop: 10}}>
  //       <View style={{padding: RF(20)}}>
  //         <View
  //           style={{
  //             height: RF(120),
  //             width: '100%',
  //             backgroundColor: '#fff',
  //           }}>
  //           <View style={{flexDirection: 'row'}}>
  //             <Image
  //               style={{height: RF(50), width: RF(50), marginRight: RF(10)}}
  //               source={notifyIcon}
  //               resizeMode={'contain'}
  //             />
  //             <View>
  //               <CustomText
  //                 title={'New Blog Uploaded'}
  //                 semiBold
  //                 size={RF(15)}
  //               />
  //               <CustomText
  //                 title={'30th July 2023 | 10:00 AM'}
  //                 regular
  //                 size={RF(12)}
  //                 color={Black}
  //                 top={RF(5)}
  //               />
  //             </View>
  //             <View style={styles.dot} />
  //           </View>
  //           <CustomText
  //             title={
  //               'You have Successfully booked the art workshop. the event will be held on Monday 30th July at Sangur The Living Venue. Timing is 10:00 AM. Enjoy the evnet!'
  //             }
  //             regular
  //             size={RF(12)}
  //             color={Black}
  //             top={RF(10)}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <Wrapper
      bgClr={'rgb(242,239,244)'}
      padZero
      noPadding
      statusBarBagColor={'transparent'}
      translucent>
      <NavHeader title={'Notification'} navigation={navigation} />
      {/* <RenderNotification />
      <RenderNotification />
      <RenderNotification />
      <RenderNotification /> */}

      <View
        style={{
          height: SCREEN_HEIGHT / 1.2,
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          padding: RF(10),
        }}>
        <View style={styles.input_Container}>
          <TextInput
            style={{
              height: '100%',
              padding: 0,
              width: '80%',
              color: '#000',
            }}
            autoCapitalize={'none'}
            // onChangeText={text => setSearchQuery(text)}
            // value={searchQuery}
            placeholder={'search'}
            placeholderTextColor={'gray'}
          />
          <Image style={[styles.icons, {tintColor: 'gray'}]} source={find} />
        </View>
        <View
          style={{position: 'absolute', alignSelf: 'center', bottom: RF(250)}}>
          <CustomText
            title={'No Notification'}
            regular
            size={RF(18)}
            color={'gray'}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Notification;

const styles = StyleSheet.create({
  dot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: SecondaryYellow,
    position: 'absolute',
    alignSelf: 'center',
    right: 0,
  },
  input_Container: {
    height: RF(45),
    marginVertical: RF(10),
    marginTop: RF(30),
    paddingHorizontal: RF(10),
    width: '98%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: RF(40),
    backgroundColor: inputBack,
    alignSelf: 'center',
    alignItems: 'center',
  },
  icons: {height: RF(20), width: RF(20), position: 'absolute', left: RF(10)},
});
