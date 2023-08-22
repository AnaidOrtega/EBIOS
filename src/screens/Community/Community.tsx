import React, {FC} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import {Formulario} from '../../components/molecules/Formulario/Formulario';
import {VentasEBIOS} from '../../components/molecules/VentasEbios/VentasEbios';
import BG from '../../assets/img/backgrounds/fondoepsi.png';
import {Divider} from '@rneui/themed';
import Mundito from '../../assets/svg/Design/mundito.svg';
import {elevation10, height} from '../../styles/globals';
import Camera from '../../assets/svg/Design/camera.svg';
import {Comunidad} from '../../components/organisms/Comunidad/Comunidad';

// props from the rootstackparamlist and the screen home
export type HomeStackProps = NativeStackScreenProps<
  RootStackParamList,
  'amigos'
>;

export const Community: FC<HomeStackProps> = () => {
  return (
    <ImageBackground source={BG} style={styles.container}>
      <ScrollView>
        <View style={styles.biosLogo}>
          <Text style={styles.title1}>Bienvenido</Text>
          <Text style={styles.titleGreen}>@ Usuario</Text>
          <Divider style={styles.divider} />
          <Text style={styles.welcome}>
            ¡Hola! Estas a sólo un paso de compartir tu imagen en la comunidad
            Epsilon Bios,ahora podrás interactuar compartiendo tus mejores
            fotografías.
          </Text>
          <Mundito style={{width: 30, height: 30}} />
          <Text style={styles.welcome}>
            Sólo dá clic en el botón {'\n'}"Compartir imagen" {'\n'}para que
            todos puedan verla
          </Text>
        </View>

        {/*banner part on other project javascript  */}
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('press');
            }}>
            <Text style={styles.buttont}>Compartir imagen</Text>
            <View style={styles.icon}>
              <Camera width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>
        <Comunidad></Comunidad>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%'},
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  titleGreen: {
    color: '#89D00B',
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  biosLogo: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    //width: width - 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    borderColor: '#C2C2C2',
  },
  welcome: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  divider: {
    backgroundColor: 'lightgrey',
    //width: width - 60,
    margin: 10,
  },
  // part 2 banner
  container2: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    backgroundColor: '#0d1a1b',
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
});
