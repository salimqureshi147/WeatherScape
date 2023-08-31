import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {RF} from '../../shared/theme/Responsive';
import CustomText from '../../components/CustomText';
import HeaderBacground from '../../components/HeaderBacground';

const NewsBlogDetail = ({route, navigation}) => {
  const {item} = route.params;

  console.log(item, 'itemmmmmmmmmmm');
  return (
    <ScrollView style={styles.container}>
      <HeaderBacground
        navigation={navigation}
        backImage={item}
        title={'Downton Weather Report'}
      />

      <View style={{padding: RF(20)}}>
        <CustomText
          title={'Downton Weather Report'}
          weight={'600'}
          size={18}
          semiBold
        />
        <CustomText top={10} title={'Blog'} weight={'500'} size={16} regular />
        <CustomText
          top={10}
          title={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          weight={'300'}
          size={14}
          regular
        />
        <CustomText
          top={10}
          title={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
          weight={'500'}
          size={16}
          regular
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsBlogDetail;
