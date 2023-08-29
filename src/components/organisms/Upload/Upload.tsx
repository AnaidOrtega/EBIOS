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
import {Level1} from '../../molecules/level1/level1';
import {ImageOverlay} from '../../molecules/ImageOverlay/ImageOverlay';
export const Upload: FC<{}> = () => {
  const [level, setlevel] = useState(1);

  const updateValue = (newValue: number) => {
    setlevel(newValue);
  };
  const [ObjectImage, setObjectImage] = useState({});
  const updateObjectImage = (objectimage: any) => {
    setObjectImage(objectimage);
  };
  const Console = () => {
    console.log('level info');
    console.log(level);
    console.log('Este es mi console de la imagen ');
    console.log(ObjectImage);
  };

  return (
    <ImageBackground source={BG} style={styles.bg}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.containter}>
          {level == 1 && (
            <Level1
              onUpdateValue={updateValue}
              OnUpdateImage={updateObjectImage}></Level1>
          )}
          <TouchableOpacity onPress={Console}></TouchableOpacity>
          {level == 2 && <ImageOverlay ImageInfo={ObjectImage}></ImageOverlay>}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bg: {
    height: height,
    width: width,
  },
  containter: {
    width: '100%',
    padding: 10,
  },
});
