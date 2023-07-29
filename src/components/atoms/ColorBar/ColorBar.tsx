import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {width} from '../../../styles/globals';

export const ColorBar: FC<{}> = () => {
  return (
    <View style={{flex: 1, padding: 10, width: width}}>
      <View style={styles.yellowF}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          INTEGRIDAD CELULAR
        </Text>
      </View>
      <View style={styles.blueF}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>ANTIOXIDANTE</Text>
      </View>
      <View style={styles.redF}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>ANTIETILENO</Text>
      </View>
      <View style={styles.greenF}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>ANTISENESCENTE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yellowF: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f3ce10',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  blueF: {
    flex: 1,
    padding: 10,
    backgroundColor: '#52a4ca',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  redF: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e42424',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  greenF: {
    flex: 1,
    padding: 10,
    backgroundColor: '#43a63c',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
