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
} from 'react-native';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {useAppSelector} from '../../../redux/hooks';
import {height} from '../../../styles/globals';
import Bg from '../../../assets/img/backgrounds/fondoepsi.png';
import Bios from '../../../assets/svg/Logos/epsilon.svg';
import {TextBox} from '../../molecules/TextBox/TextBox';
import {RegistroView} from '../../molecules/RegistroView/RegistroView';

export const LoginComponent: FC<{}> = () => {
  return (
    <ImageBackground source={Bg} style={styles.bg}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={styles.card}>
              <Bios width={150} height={150} />
              <TextBox />
              <RegistroView />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {flex: 1, minHeight: height},
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
