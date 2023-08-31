import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../shared/theme/Responsive';
import {arrow, onBorad1, onBorad2} from '../../assets';
import CustomText from '../../components/CustomText';
import {light_gray, Primary, Secondary} from '../../shared/theme';

const OnBoarding1 = ({navigation}) => {
  const [color, setColor] = useState(Secondary);
  const [color2, setColor2] = useState(light_gray);
  const [change, setChange] = useState(false);
  const Toggle = () => {
    setChange(true);
    setColor('gray');
    setColor2(Secondary);
    if (change) {
      navigation.navigate('MyTabs');
    }
  };
  return (
    <ImageBackground
      style={styles.Container}
      imageStyle={change ? null : styles.imageStyle}
      source={change ? onBorad2 : onBorad1}
      resizeMode={change ? 'cover' : 'contain'}>
      {change ? <View style={styles.fade_View} /> : null}
      <View style={{width: '100%', alignItems: 'flex-end'}}>
        <CustomText
          title={'Skip'}
          semiBold
          weight={'600'}
          size={RF(18)}
          color={change ? '#fff' : '#000'}
        />
      </View>
      <View style={{position: 'absolute', bottom: RF(40), alignSelf: 'center'}}>
        <CustomText
          title={
            'Weather Wisdom, News Nuggets, Local Marvels: Your Ultimate App for Today and Beyond.'
          }
          weight={'700'}
          size={RF(18)}
          color={change ? '#fff' : '#000'}
          opensans
        />
        <CustomText
          title={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
          weight={'400'}
          top={10}
          size={RF(13)}
          color={change ? '#fff' : '#000'}
          opensans
        />
        <View style={styles.bottom_comp}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.rect, {backgroundColor: color}]} />
            <View style={[styles.rect, {backgroundColor: color2}]} />
          </View>
          <TouchableOpacity style={styles.arrow_Cont} onPress={Toggle}>
            <Image
              style={{width: RF(25)}}
              source={arrow}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
  rect: {
    height: RF(5),
    width: RF(20),
    marginLeft: RF(5),
    borderRadius: 4,
  },
  Container: {
    flex: 1,
    padding: RF(20),
  },
  bottom_comp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow_Cont: {
    height: RF(38),
    width: RF(60),
    borderRadius: RF(40),
    backgroundColor: Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fade_View: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
