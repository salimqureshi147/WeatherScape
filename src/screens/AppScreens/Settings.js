import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import Wrapper from '../../components/myWrapper/Wrapper';
import NavHeader from '../../components/NavHeader';
import SwitchButtons from '../../components/SwitchButtons';
import {RF} from '../../shared/theme/Responsive';
import {setColor, setColor2, store} from '../../shared/redux';
import {
  setTempValues,
  setSpeed,
  setHours,
} from '../../shared/redux/reducers/settingsTempReducer';
import {notify, temp, timming, windSpeed} from '../../assets';
import {Primary} from '../../shared/theme';

const Settings = ({navigation}) => {
  const {speed, tempValues} = useSelector(state => state.root.temp);
  // console.log(speed, 'myspeed');
  const handleOptionChange = (selectedOption, action) => {
    if (action === 'speed') {
      if (selectedOption === 'KM') {
        store.dispatch(setSpeed(selectedOption));
      } else if (selectedOption === 'Mph') {
        store.dispatch(setSpeed(selectedOption));
      }
    } else if (action === 'temp') {
      if (selectedOption === 'C') {
        store.dispatch(setTempValues(selectedOption));
      } else if (selectedOption === 'F') {
        store.dispatch(setTempValues(selectedOption));
      }
    } else if (action === 'timing') {
      if (selectedOption === '12hr') {
        store.dispatch(setHours(selectedOption));
      } else if (selectedOption === '24hr') {
        store.dispatch(setHours(selectedOption));
      }
    }
  };
  return (
    <Wrapper padZero noPadding>
      <NavHeader navigation={navigation} title={'Settings'} />
      <View style={{marginTop: RF(20), padding: RF(10)}}>
        {[
          {
            icon: temp,
            title: 'Temperature',
            toggle1: 'C',
            toggle2: 'F',
            action: 'temp',
          },
          {
            icon: windSpeed,
            title: 'Wind Speed',
            toggle1: 'KM',
            toggle2: 'Mph',
            action: 'speed',
          },
          {
            icon: timming,
            title: 'Timing Hours',
            toggle1: '12hr',
            toggle2: '24hr',
            action: 'timing',
          },
          {
            icon: notify,
            title: 'Notification',
            toggle1: 'No',
            toggle2: 'Yes',
            action: 'notify',
          },
        ].map((item, index) => (
          <View style={styles.list_View} key={index}>
            <SwitchButtons
              deg={item.action === 'temp'}
              icon={item.icon}
              title={item.title}
              toggle1={item.toggle1}
              toggle2={item.toggle2}
              onOptionChange={selectedOption =>
                handleOptionChange(selectedOption, item.action)
              }
            />
          </View>
        ))}
      </View>
    </Wrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({
  list_View: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RF(20),
    justifyContent: 'space-between',
  },
});
