import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {elevation5} from '../../../styles/globals';
import Bios from '../../../assets/svg/Logos/epsilon.svg';
import {Formik} from 'formik';
import {Input} from '../../atoms/Input/Input';
import RightArrow from '../../../assets/svg/rightarrow.svg';
import {useState} from 'react';
import {useAppDispatch} from '../../../redux/hooks';
import {SetAccessToken} from '../../../redux/feature/Usuario';
interface User {
  email: string;
  id: string;
  name: string;
}
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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Login} from '../../../redux/feature/Usuario';
export const Form: FC<{}> = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const dispatch = useAppDispatch();

  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const regFields = [
    {
      placeholder: 'Nombre',
      key: 'name',
      secure: false,
      cap: 'sentences',
      label: 'Nombre Completo',
    },
    {
      placeholder: 'Email',
      key: 'email',
      secure: false,
      cap: 'none',
      label: 'Email',
    },
    {
      placeholder: 'Contraseña',
      key: 'password',
      secure: true,
      cap: 'none',
      label: 'Contraseña',
    },
  ];

  const setText = (value: any, type: any) => {
    console.log(value, type);
    if (type == 'name') {
      setname(value);
    }

    if (type == 'email') {
      setemail(value);
    }

    if (type == 'password') {
      setpassword(value);
    }
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
          Alert.alert(
            'Inicio de sesion Incorrecto',
            'Contacta a los desarrolladores',
          );
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
          Alert.alert(
            'Inicio de sesion incorrecto',
            'Contacta a los desarrolladores',
          );
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        Alert.alert('Algo Salió mal', 'Contacta a los desarrolladores');
      });
  };
  const Register = (name: any, email: any, password: any) => {
    const requestBody = {
      email: email,
      password: password,
      name: name,
    };
    fetch('http://161.35.105.244/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then((responseData: User) => {
        if (responseData.id && responseData.email && responseData.name) {
          login(email, password);
        } else {
          Alert.alert('Algo Salió mal', 'Contacta a los desarrolladores');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Bios width={150} height={150} />
      <Formik
        initialValues={() => console.log('hi')}
        onSubmit={formikValues => {
          console.log(formikValues);
        }}>
        <React.Fragment>
          {regFields.map((item, index) => (
            <Input item={item} key={index} change={setText.bind(this)} />
          ))}
          <TouchableOpacity
            onPress={() => Register(name, email, password)}
            style={styles.button}>
            <Text style={styles.btnText}>Registrarme</Text>
            <RightArrow />
          </TouchableOpacity>
        </React.Fragment>
      </Formik>
      {/*<Footer navigation={this.props.navigation} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    ...elevation5,
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
    margin: 20,
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
