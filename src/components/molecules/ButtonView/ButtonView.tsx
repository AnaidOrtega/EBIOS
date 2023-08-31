import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {elevation10} from '../../../styles/globals';
import {Logout} from '../../../redux/feature/Usuario';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

export const ButtonView: FC<{}> = () => {
  const UsuarioName = useAppSelector(state => state.Usuario.Name);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.buttonView}>
      {UsuarioName == '' && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate('login');
          }}>
          <Text style={styles.buttonText}>INICIA SESIÓN/REGÍSTRATE</Text>
        </TouchableOpacity>
      )}
      {UsuarioName != '' && (
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            dispatch(Logout());
          }}>
          <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#8FC177',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  close: {
    backgroundColor: '#56aab4',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    ...elevation10,
  },
});
