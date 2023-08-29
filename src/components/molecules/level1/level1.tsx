import React, {FC} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Platform,
  PermissionsAndroid,
  PermissionStatus,
} from 'react-native';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {useAppSelector} from '../../../redux/hooks';
import {height} from '../../../styles/globals';
import BG from '../../../assets/img/backgrounds/fondoepsi.png';
import {width} from '../../../styles/globals';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Login} from '../../../redux/feature/Usuario';
import {useState} from 'react';
import {elevation10} from '../../../styles/globals';
import {Aviso} from '../../atoms/Aviso/Aviso';
import Camera from '../../../assets/svg/Design/camera.svg';
import Back from '../../../assets/svg/Design/back.svg';
import ImagePicker from 'react-native-image-crop-picker';
const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Ebios Camera Permission',
          message:
            'Ebios needs access to your camera ' +
            'Asi puedes subir las fotos ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};
const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Ebios Camera Permission',
          message:
            'Ebios needs access to your camera ' +
            'Asi podras subir las fotos ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
    }
    return false;
  } else return true;
};

interface ChildProps {
  onUpdateValue: (newValue: number) => void;
  OnUpdateImage: (ObjectValue: any) => void;
}

export const Level1: FC<ChildProps> = ({onUpdateValue, OnUpdateImage}) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const [childValue, setChildValue] = useState<number>(1);

  const handleValueChange = (newValue: number) => {
    // Convert text to integer
    setChildValue(newValue);
    onUpdateValue(newValue);
  };

  const chooseFile = async () => {
    let isCameraPermitted = await requestCameraPermission();
    if (isCameraPermitted) {
      ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: false,
      })
        .then(image => {
          OnUpdateImage(image);
          handleValueChange(2);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  const captureImage = async () => {
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted) {
      console.log('is permitted');
      ImagePicker.openCamera({
        mediaType: 'photo',
        cropping: false,
      })
        .then(image => {
          OnUpdateImage(image);
          handleValueChange(2);
        })
        .catch(err => {
          console.log(err);
        });
    }

    console.log(isCameraPermitted, isStoragePermitted);
  };
  return (
    <View style={styles.container}>
      <Aviso></Aviso>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          chooseFile();
        }}>
        <Text style={styles.buttont}>ESCOGER FOTO DE LA BIBLIOTECA</Text>
        <View style={styles.icon}>
          <Camera width={30} height={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          captureImage();
        }}>
        <Text style={styles.buttont}>TOMAR UNA FOTO</Text>
        <View style={styles.icon}>
          <Camera width={30} height={30} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonCancel}
        onPress={() => {
          navigate('amigos');
        }}>
        <Back width={30} height={30} />
        <Text style={styles.cancel}>CANCELAR</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 'auto',
    margin: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d4e1d8',
    ...elevation10,
  },
  buttont: {
    color: '#121e2f',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 20,
  },
  text: {color: 'white', fontStyle: 'italic'},
  icon: {
    borderRadius: 100,
    backgroundColor: 'rgba(72,146,167,0.4)',
    padding: 10,
  },
  buttonCancel: {
    padding: 10,
    width: '100%',
    backgroundColor: '#4e9a2d',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cancel: {color: '#ffffff', fontWeight: 'bold', marginLeft: 10},
});
