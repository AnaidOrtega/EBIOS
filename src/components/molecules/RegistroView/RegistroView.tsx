import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RightArrow from '../../../assets/svg/rightarrow.svg';
import {Divider} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export const RegistroView: FC<{}> = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <Divider style={styles.divider} />
      <Text style={styles.regis}>No tienes cuenta? Regístrate!</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Registro');
        }}
        style={styles.button}>
        <Text style={styles.btnText}>REGISTRARME</Text>
        <RightArrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  regis: {
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  divider: {backgroundColor: 'grey', width: '100%', marginVertical: 20},
  button: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(117,166,84)',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    margin: 20,
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
