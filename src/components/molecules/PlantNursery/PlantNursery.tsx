import {ScrollView, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {height, safeAreaTop, width} from '../../../styles/globals';
import {Footer} from '../../atoms/Footer/Footer';
import Viverosfrente from '../../../assets/svg/Viveros/ViverosFrente.svg';
import ViverosAtras from '../../../assets/svg/Viveros/ViverosVuelta.svg';

export const PlantNursery: FC<{}> = props => {
  const totalH = height - safeAreaTop - 60;
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Viverosfrente height={totalH * 0.9} />
      <ViverosAtras height={totalH * 0.9} />
      <Footer url={'http://161.35.105.244/ficha/BrochureViveros.pdf'} />
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
