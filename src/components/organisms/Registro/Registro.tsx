import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import BG from '../../../assets/img/backgrounds/fondoepsi.png';
import {Form} from '../../molecules/Form/Form';
export const Registro: FC<{}> = () => {
  return (
    <ImageBackground source={BG} style={styles.bg}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <Form />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    width: '100%',
    padding: 10,
  },
});
