import {ScrollView, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {height, safeAreaTop, width} from '../../../styles/globals';
import {Footer} from '../../atoms/Footer/Footer';
import Stoma2 from '../../../assets/svg/GeneraMain/0001.svg';
import Stoma1 from '../../../assets/svg/GeneraMain/0002.svg';

export const GeneraMain: FC<{}> = props => {
  const totalH = height - safeAreaTop - 120;
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <Stoma2 height={totalH * 0.75} width={width}></Stoma2>
       <Stoma1 height={totalH * 0.75} width={width} ></Stoma1>
    
     
     
      <Footer url={'http://161.35.105.244/ficha/BrochureGenera.pdf'} />
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
