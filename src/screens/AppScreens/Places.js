import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Wrapper from '../../components/myWrapper/Wrapper';
import CustomHeader from '../../components/CustomHeader';
import {placesData} from '../../flatlistData/Data';
import {RF} from '../../shared/theme/Responsive';
import {find, map} from '../../assets';
import {inputBack} from '../../shared/theme';
import CustomText from '../../components/CustomText';
import {setKeyboardOpen, store} from '../../shared/redux';
import {useSelector} from 'react-redux';

const Places = ({navigation}) => {
  const {speed, tempValues} = useSelector(state => state.root.temp);
  const [searchQuery, setSearchQuery] = React.useState('');
  const {keyBoardOpen} = useSelector(state => state.root.user);
  const filteredData = placesData.filter(item =>
    item.place.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      store.dispatch(setKeyboardOpen(false));
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      store.dispatch(setKeyboardOpen(true));
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyBoardOpen]);

  const renderPlaces = ({item}) => {
    return (
      <ImageBackground
        style={{height: RF(150), width: '100%', marginTop: RF(10)}}
        imageStyle={{borderRadius: RF(20)}}
        source={{uri: item.imge}}>
        <View style={styles.itemListing}>
          <Image style={styles.icon} resizeMode={'contain'} source={map} />
          <CustomText
            title={item.place}
            regular
            color={'#fff'}
            weight={'500'}
            size={RF(18)}
          />
          <CustomText
            title={item.deg}
            mLeft={10}
            regular
            color={'#fff'}
            weight={'700'}
            size={RF(24)}
          />
        </View>
        <TouchableOpacity
          style={styles.fadeView}
          onPress={() => navigation.navigate('PlacesDetail', {items: item})}
        />
      </ImageBackground>
    );
  };
  return (
    <Wrapper
      padZero
      noPadding
      // statusBarBagColor={'rgb(242,239,244)'}
      translucent>
      <CustomHeader
        Clr={'#000'}
        title={'Places'}
        head
        size={RF(18)}
        navigateNotification={'Notification'}
        navigation={navigation}
      />
      <View style={{padding: RF(10)}}>
        <View style={styles.input_Container}>
          <TextInput
            style={{
              height: '100%',
              padding: 0,
              width: '80%',
              color: '#000',
            }}
            autoCapitalize={'none'}
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
            placeholder={'search'}
            placeholderTextColor={'gray'}
          />
          <Image style={[styles.icons, {tintColor: 'gray'}]} source={find} />
        </View>
        <View style={{paddingBottom: RF(120)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            data={filteredData}
            renderItem={renderPlaces}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Places;

const styles = StyleSheet.create({
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
  fadeView: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    width: '100%',
    zIndex: 100,
    borderRadius: RF(20),
  },
  itemListing: {
    marginLeft: RF(15),
    position: 'absolute',
    bottom: RF(25),
    zIndex: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: RF(20),
    width: RF(15),
    tintColor: '#fff',
    marginRight: RF(10),
  },
});
