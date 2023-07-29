import {StyleSheet} from 'react-native';
import {elevation5} from '../../../styles/globals';

export const stylesheet = StyleSheet.create({
  dataPart: {
    padding: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  input: {
    padding: 10,
    ...elevation5,
    width: '100%',
    color: 'black',
    height: 'auto',
    borderRadius: 25,
    borderWidth: 0.5,
    marginVertical: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.2)',
  },
  btn: {
    width: '100%',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  btnTxt: {
    fontSize: 15,
    color: '#FFFFFF',
  },
});
