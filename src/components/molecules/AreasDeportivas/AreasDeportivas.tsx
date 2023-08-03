import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import CamposDeportivosFrente from '../../../assets/svg/AreasDeportivas/CamposDeportivosFrente.svg';
import CamposDeportivosAtras from '../../../assets/svg/AreasDeportivas/CamposDeportivosVuelta.svg';
import {height, safeAreaTop, width} from '../../../styles/globals';
import {Footer} from '../../atoms/Footer/Footer';

export const AreasDeportivas: FC<{}> = props => {
  const totalH = height - safeAreaTop - 60;
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <CamposDeportivosFrente height={totalH * 0.8} width={width} />
      <CamposDeportivosAtras height={totalH * 1} />
      <Footer
        url={'http://161.35.105.244/ficha/BrochureCamposDeFutbol.pdf'}></Footer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#111d2c',
    height: 60,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  left: {flex: 1, justifyContent: 'center'},
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
