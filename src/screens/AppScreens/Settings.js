import {StyleSheet, View} from 'react-native';
import React from 'react';
import Wrapper from '../../components/myWrapper/Wrapper';
import {RF} from '../../shared/theme/Responsive';
import {notify, temp, timming, windSpeed} from '../../assets';
import NavHeader from '../../components/NavHeader';
import SwitchButtons from '../../components/SwitchButtons';

const Settings = ({navigation}) => {
  return (
    <Wrapper padZero noPadding translucent>
      <NavHeader navigation={navigation} title={'Settings'} />
      <View style={{marginTop: RF(20), padding: RF(10)}}>
        <View style={styles.list_View}>
          <SwitchButtons
            deg={true}
            icon={temp}
            title={'Temperature'}
            toggle1={'C'}
            toggle2={'F'}
          />
        </View>
        <View style={styles.list_View}>
          <SwitchButtons
            icon={windSpeed}
            title={'Wind Speed'}
            toggle1={'KM'}
            toggle2={'Mph'}
          />
        </View>
        <View style={styles.list_View}>
          <SwitchButtons
            icon={timming}
            title={'Timing Hours'}
            toggle1={'24hr'}
            toggle2={'12hr'}
          />
        </View>
        <View style={styles.list_View}>
          <SwitchButtons
            icon={notify}
            title={'Temperature'}
            toggle1={'No'}
            toggle2={'Yes'}
          />
        </View>
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
