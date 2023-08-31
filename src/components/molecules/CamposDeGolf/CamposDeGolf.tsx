import {ScrollView, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import GolfField from '../../../assets/svg/Golfield/GolField.svg';
import {height, safeAreaTop, width} from '../../../styles/globals';
import {Footer} from '../../atoms/Footer/Footer';
export const CamposDeGolf: FC<{}> = props => {
  const totalH = height - safeAreaTop - 60;
  return (
    <ScrollView>
      <GolfField height={totalH * 1.5} width={width} />
      <Footer url={'http://161.35.105.244/ficha/BROCHUREGOLF.pdf'} />
    </ScrollView>
  );
};
