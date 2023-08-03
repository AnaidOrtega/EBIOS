import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {width} from '../../../styles/globals';
import {Divider} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {elevation10} from '../../../styles/globals';
import {Linking} from 'react-native';
interface FooterProps {
  url: string;
}

export const Footer: FC<FooterProps> = props => {
  console.log(props.url);
  const openFile = () => {
    Linking.openURL(props.url);
  };
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 15, paddingTop: 0}}>
        <Text style={styles.greyText}>
          Los efectos anteriormente mencionados logran en la planta el siguiente
          beneficio:
        </Text>
        <Text style={styles.greenText}>
          MANTENER A LA PLANTA EN LA ETAPA REPRODUCTIVA POR MÁS TIEMPO.
        </Text>
      </View>
      <View style={styles.footer}>
        <Divider style={styles.dividerBot} />
        <Text style={{fontSize: 15, fontStyle: 'italic'}}>
          Descarga la ficha técnica!
        </Text>
        <TouchableOpacity onPress={openFile} style={[styles.button]}>
          <Text style={{color: 'white'}}>Descargar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#0d1a1b',
    //justifyContent: 'space-between',
    borderRadius: 20,
    margin: 20,
    ...elevation10,
  },
  footer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    width: width,
  },
  dividerBot: {backgroundColor: 'grey', width: '100%', marginBottom: 20},

  greenText: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#137a36',
    fontSize: 15,
  },
  greyText: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#757574',
  },
});
