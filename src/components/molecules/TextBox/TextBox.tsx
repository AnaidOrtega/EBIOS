import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import User from '../../../assets/svg/Design/User.svg';
import Password from '../../../assets/svg/Design/Password.svg';
import RightArrow from '../../../assets/svg/rightarrow.svg';
import {Input} from '../../atoms/Input/Input';
import {useAppDispatch} from '../../../redux/hooks';
import {SetAccessToken} from '../../../redux/feature/Usuario';

interface UserData {
  id: string;
  ttl: number;
  created: string;
  userId: string;
}
interface UserInfo {
  email: string;
  id: string;
  name: string;
}

import {Login} from '../../../redux/feature/Usuario';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const TextBox: FC<{}> = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const loginInput = [
    {
      Icon: User,
      placeholder: 'ejemplo@ejemplo.com',
      secure: false,
      label: 'Usuario (Correo electrónico)',
      key: 'user',
    },
    {
      Icon: Password,
      placeholder: 'Contraseña',
      secure: true,
      label: 'Contraseña',
      key: 'password',
    },
  ];
  const setText = (value: any, type: any) => {
    console.log('entre=');

    type == 'user' ? setemail(value) : setpassword(value);
    console.log(email, password);
  };

  const SetUser = (UserId: any, accestoken: any) => {
    fetch(
      `http://161.35.105.244/api/Users/${UserId}?access_token=${accestoken}`,
    )
      .then(response => response.json())
      .then((responseData: UserInfo) => {
        if (responseData.name) {
          dispatch(Login(responseData.name));
          navigate('Home');
        } else {
          Alert.alert('Algo Salió mal', 'Contacta a los desarrolladores');
        }
        // You can access the properties of responseData as needed
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const login = (email: any, password: any) => {
    const requestBody = {
      email: email,
      password: password,
    };
    fetch('http://161.35.105.244/api/Users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then((responseData: UserData) => {
        if (responseData.id) {
          dispatch(SetAccessToken(responseData.id));
          SetUser(responseData.userId, responseData.id);
        } else {
          Alert.alert('Inicio de sesión incorrecto', '');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      {loginInput.map((item, index) => (
        <Input item={item} key={index} change={setText.bind(this)} />
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login(email, password);
        }}>
        <Text style={styles.btnText}>INICIA SESIÓN</Text>
        <RightArrow />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.passwordButton}
        onPress={() => {
          console.log('hi');
        }}>
        <Text style={styles.passwordText}>Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(60,154,175,1)',

    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  passwordText: {
    fontSize: 15,
  },
  passwordButton: {
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
