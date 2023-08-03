import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import GolfField from '../../../assets/svg/Golfield/GolField.svg';
import {height, safeAreaTop, width} from '../../../styles/globals';
import {Footer} from '../../atoms/Footer/Footer';
export const CamposDeGolf: FC<{}> = props => {
  const totalH = height - safeAreaTop - 60;
  return (
    <ScrollView>
      <GolfField height={totalH * 1.5} width={width} />
      <Footer url={'http://161.35.105.244/ficha/BROCHUREGOLF.pdf'}></Footer>
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
