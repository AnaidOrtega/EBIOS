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

export const cardListStyles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: 10,
    ...(Platform.OS === 'android' ? shadowAndroid : shadowIos),
  },
  view: {
    borderRadius: 150,
  },
  contentScroll: {
    gap: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    padding: 10,
    borderRadius: 130,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  option: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  optionText: {
    fontSize: 10,
    marginRight: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  innerCircle: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 2,
    borderRadius: 130,
    width: 130,
    height: 130,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
