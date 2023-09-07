import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Primary} from '../shared/theme';
import CustomText from './CustomText';
import {RF} from '../shared/theme/Responsive';
import {temp} from '../assets';

const SwitchButtons = ({
  icon,
  title,
  toggle1,
  toggle2,
  deg,
  onOptionChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(toggle1);
  const handleOptionChange = option => {
    setSelectedOption(option);
    onOptionChange(option); // Call the function passed from Settings
  };

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={icon}
          style={{width: RF(21), height: RF(25), marginRight: RF(10)}}
          resizeMode={'contain'}
        />
        <CustomText title={title} regular weight={'400'} size={RF(16)} />
      </View>
      <View style={styles.toggle_Container}>
        <TouchableOpacity
          style={[
            styles.switch,
            {backgroundColor: selectedOption === toggle1 ? Primary : '#fff'},
          ]}
          onPress={() => handleOptionChange(toggle1)}>
          <View style={{flexDirection: 'row'}}>
            <CustomText
              title={toggle1}
              size={RF(12)}
              regular
              weight={'500'}
              color={selectedOption === toggle1 ? '#fff' : Primary}
            />
            {deg ? (
              <Text
                style={{
                  color: selectedOption === toggle1 ? '#fff' : '#000',
                  fontSize: 10,
                  marginLeft: 2,
                }}>
                o
              </Text>
            ) : null}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.switch,
            {backgroundColor: selectedOption === toggle2 ? Primary : '#fff'},
          ]}
          onPress={() => handleOptionChange(toggle2)}>
          <View style={{flexDirection: 'row'}}>
            <CustomText
              title={toggle2}
              size={RF(12)}
              regular
              weight={'500'}
              color={selectedOption === toggle2 ? '#fff' : '#000'}
            />
            {deg ? (
              <Text
                style={{
                  color: selectedOption === toggle2 ? '#fff' : '#000',
                  fontSize: 10,
                  marginLeft: 2,
                }}>
                o
              </Text>
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SwitchButtons;

const styles = StyleSheet.create({
  toggle_Container: {
    height: 30,
    width: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 1,
  },
  switch: {
    height: '100%',
    width: '50%',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
