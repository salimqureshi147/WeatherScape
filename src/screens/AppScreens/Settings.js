import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Wrapper from '../../components/myWrapper/Wrapper';
import CustomText from '../../components/CustomText';
import {RF} from '../../shared/theme/Responsive';
import {back} from '../../assets';
import {Black, Primary} from '../../shared/theme';
import NavHeader from '../../components/NavHeader';
import {settingsData} from '../../flatlistData/Data';

const Settings = ({navigation}) => {
  const [items, setItems] = useState(settingsData);
  const handleButton1Press = itemId => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? {
              ...item,
              button1Color: Primary,
              button2Color: '#fff',
              txtColor: '#fff',
              txtColor2: '#000',
            }
          : item,
      ),
    );
  };
  const handleButton2Press = itemId => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? {
              ...item,
              button1Color: '#fff',
              button2Color: Primary,
              txtColor: '#000',
              txtColor2: '#fff',
            }
          : item,
      ),
    );
  };
  const renderSettings = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: RF(20),
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={item.icon}
            style={{width: RF(21), height: RF(25), marginRight: RF(10)}}
            resizeMode={'contain'}
          />
          <CustomText title={item.name} regular weight={'400'} size={RF(16)} />
        </View>
        <View style={styles.toggle_Container}>
          <TouchableOpacity
            style={[styles.switch, {backgroundColor: item.button1Color}]}
            onPress={() => {
              handleButton1Press(item.id, item.switch1); // Call the Toggle function with the index
            }}>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                title={item.switch1}
                size={RF(12)}
                regular
                weight={'500'}
                color={item.txtColor}
              />
              <Text style={{color: item.txtColor, fontSize: 10, marginLeft: 2}}>
                {item.degIcon}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleButton2Press(item.id); // Call the Toggle function with the index
            }}
            style={[styles.switch, {backgroundColor: item.button2Color}]}>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                title={item.switch2}
                size={RF(12)}
                regular
                weight={'500'}
                color={item.txtColor2}
              />
              <Text
                style={{color: item.txtColor2, fontSize: 10, marginLeft: 2}}>
                {item.degIcon}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Wrapper padZero noPadding translucent>
      <NavHeader navigation={navigation} title={'Settings'} />
      <View style={{marginTop: RF(20), padding: RF(10)}}>
        <FlatList
          scrollEnabled={false}
          data={items}
          renderItem={renderSettings}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </Wrapper>
  );
};

export default Settings;

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
