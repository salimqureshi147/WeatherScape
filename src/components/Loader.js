import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Primary } from '../shared/theme'
// import LottieView from 'lottie-react-native'

const Loader = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <ActivityIndicator size={'large'} color={Primary}></ActivityIndicator>
    {/* <LottieView style={{height:100,width:100}}></LottieView> */}
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})