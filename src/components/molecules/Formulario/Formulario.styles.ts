import {StyleSheet} from 'react-native';
import {elevation10, elevation5} from '../../../styles/globals';
export const stylesheet = StyleSheet.create({
  dataPart: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    // backgroundColor: 'white',
    ...elevation10,
  },
  input: {
    color: 'black',
    height: 'auto',
    alignSelf: 'center',
    borderRadius: 25,
    borderWidth: 0.5,
    ...elevation5,
    padding: 10,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    width: '90%',
    backgroundColor: 'white',
  },
  btn: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  btnTxt: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});
