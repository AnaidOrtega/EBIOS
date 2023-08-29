import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {height} from '../../../styles/globals';
import {width} from '../../../styles/globals';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Platform} from 'react-native';
interface ImageInfoProps {
  ImageInfo: {
    height: number;
    mime: string;
    modificationDate: string;
    path: string;
    size: number;
    width: number;
  };
}
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {Alert} from 'react-native';
import moment from 'moment';

const createFormData = (photo: ImageInfoProps, body: any, name: String) => {
  const data = new FormData();
  let string1 = moment().format().replace(':', '_');
  let string2 = string1.replace('-', '_');
  let extension = photo.ImageInfo.mime.split('/');

  data.append('photo', {
    name: `&&${name}&&${string2}.${extension[1]}`,
    type: photo.ImageInfo.mime,
    uri:
      Platform.OS === 'android'
        ? photo.ImageInfo.path
        : photo.ImageInfo.path.replace('file://', ''),
  });
  return data;
};

export const ImageOverlay: FC<ImageInfoProps> = ImageInfo => {
  const UsuarioName = useAppSelector(state => state.Usuario.Name);
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const upload = (name: String, Imageinfo: ImageInfoProps) => {
    let data = createFormData(Imageinfo, 0, name);
    console.log(data);
    fetch(`http://161.35.105.244/api/archivos/imagenes/upload`, {
      method: 'POST',
      body: data,
    })
      .then(json => {
        console.log('AQUI JSON');
        console.log(json);

        if (json.status == 200) {
          Alert.alert(
            'Perfecto!',
            'Tu foto se ha subido con éxito!',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigate('Home');
                },
              },
            ],
            {cancelable: false},
          );
        } else {
          Alert.alert(
            'Algo salió mal!',
            'Tu foto no se pudo subir',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigate('Home');
                },
              },
            ],
            {cancelable: false},
          );
        }

        return json;
      })
      .catch(err => {
        console.log(err);
        console.log('ERROR POST2');
        //alert('Error', 'Hubo un error al obtener los datos.');
      });
  };
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image source={{uri: ImageInfo.ImageInfo.path}} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => {
              navigate('amigos');
            }}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.uploadButton]}
            onPress={() => upload(UsuarioName, ImageInfo)}>
            <Text style={styles.buttonText}>Subir Imagen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#111d2c',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: width,
    height: height / 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#FF6B6B',
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
