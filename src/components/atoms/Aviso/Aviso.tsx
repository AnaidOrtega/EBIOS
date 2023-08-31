import React from 'react';
import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ebios from '../../../assets/svg/Logos/EBIOS.svg';
export const Aviso: FC<{}> = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>Estimado Amigo de los Amaneceres:</Text>
      <Text style={styles.body}>
        Las imágenes que nos compartes, serán expuestas únicamente en nuestra
        app. {'\n'} {'\n'}
        Evita cargar imágenes que no sean de tu autoría o que incluyan el nombre
        de otros productos y/o marcas ya que podrían eliminarse.
      </Text>
      <Text style={styles.textBot}>Gracias</Text>
      <Ebios width={100} height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textBot: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  body: {color: 'black', fontSize: 15, textAlign: 'justify'},
});
