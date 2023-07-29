import {Platform, StyleSheet} from 'react-native';

const shadowAndroid = {
  elevation: 20,
  shadowColor: '#52006A',
};

const shadowIos = {
  shadowRadius: 3,
  shadowOpacity: 0.2,
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
};

export const ventasStyles = StyleSheet.create({
  container: {
    ...(Platform.OS === 'android' ? shadowAndroid : shadowIos),
  },
});
