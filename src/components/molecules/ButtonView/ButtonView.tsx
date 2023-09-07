import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {elevation10} from '../../../styles/globals';
import {Logout} from '../../../redux/feature/Usuario';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

export const ButtonView: FC<{}> = () => {
  const UsuarioName = useAppSelector(state => state.Usuario.Name);
  const UserId = useAppSelector(state => state.Usuario.id);
  const accestoken = useAppSelector(state => state.Usuario.AccessToken);

  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const EliminarCuenta = () => {
    console.log(UserId);
    fetch(
      `http://161.35.105.244/api/Users/${UserId}?access_token=${accestoken}`,
      {method: 'DELETE'},
    )
      .then(response => response.json())
      .then((responsebien: {count: string}) => {
        console.log(responsebien);
        if (responsebien.count) {
          dispatch(Logout());
        } else {
          console.log('salio mal');
        }
      });
  };
  const elimwarning = () => {
    Alert.alert('Seguró?', 'Seguró que quieres eliminar la cuenta? ', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Si', onPress: () => EliminarCuenta()},
    ]);
  };
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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              dispatch(Logout());
            }}>
            <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.eliminar}
            onPress={() => {
              elimwarning();
            }}>
            <Text style={styles.buttonText}>ELIMINAR CUENTA</Text>
          </TouchableOpacity>
        </View>
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
  eliminar: {
    backgroundColor: '#b4565c',
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
