import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import Home from '../screens/AppScreens/Home';
import CustomTabs from '../components/customTabs';
import {home, news, places, settings} from '../assets';
import News from '../screens/AppScreens/News';
import Places from '../screens/AppScreens/Places';
import Settings from '../screens/AppScreens/Settings';
import Splash from '../screens/Splash';
import OnBoarding1 from '../screens/AppScreens/OnBoarding1';
import NewsBlogDetail from '../screens/AppScreens/NewsBlogDetail';
import PlacesDetail from '../screens/PlacesDetail';
import {Primary} from '../shared/theme';


import { Keyboard } from 'react-native';

import Notification from '../screens/Notification';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs({navigation}) {
  const {isKeyboardOpen}=useSelector(state=>state.root.user)
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        navigation.setOptions({
          tabBarStyle: { display: 'none' },
        });
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        navigation.setOptions({
          tabBarStyle: null,
        });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [navigation]);
  return (
    <Tab.Navigator 
      screenOptions={{
       tabBarHideOnKeyboard:true,
        tabBarActiveTintColor: Primary,
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: 'red',
        headerShown: false,
        tabBarStyle: !isKeyboardOpen ? { display: 'none' } : {},
      }}
      tabBar={props => (
        <BottomFabBar
          mode={'default'}
          isRtl={false}
          focusedButtonStyle={{
            shadowColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
          }}
          // Add Shadow for active tab bar button
          // - You can add the style below to show screen content under the tab-bar
          // - It will makes the "transparent tab bar" effect.
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs title={'Home'} img={home} focused={focused} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs title={'News'} img={news} focused={focused} />
          ),
        }}
        name="News"
        component={News}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs title={'Places'} img={places} focused={focused} />
          ),
        }}
        name="Places"
        component={Places}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs title={'Settings'} img={settings} focused={focused} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="NewsBlogDetail" component={NewsBlogDetail} />
      <Stack.Screen name="PlacesDetail" component={PlacesDetail} />
      <Stack.Screen name="Notification" component={Notification} />
      
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
