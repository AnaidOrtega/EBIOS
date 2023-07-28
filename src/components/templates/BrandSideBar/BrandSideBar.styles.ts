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

export const sidebarStyles = StyleSheet.create({
  outterIcon: {
    width: 165,
    margin: 15,
    padding: 3,
    height: 165,
    borderWidth: 2,
    borderRadius: 165,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(255,255,255,0.5)',
    ...(Platform.OS === 'android' ? shadowAndroid : shadowIos),
  },
  icon: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
