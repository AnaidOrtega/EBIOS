import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Linking} from 'react-native';

export const LemonTable: FC<{}> = props => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>ETAPA FENOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}> </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>ETAPA FISIOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Botón cerrado</Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Disminuir caída</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>DOSIS</Text>
        </View>
        <View
          style={[
            styles.content,
            {
              borderBottomWidth: 1,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}>
          <Text style={styles.contentT}> 1.5 ml por litro de agua.</Text>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>ETAPA FENOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Floración</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>ETAPA FISIOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Caída de pétalos</Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Disminuir caída</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>DOSIS</Text>
        </View>
        <View
          style={[
            styles.content,
            {
              borderBottomWidth: 1,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}>
          <Text style={styles.contentT}> 1.5 ml por litro de agua.</Text>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>ETAPA FENOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}> </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>ETAPA FISIOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Cánica</Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Disminuir caída fisiológica</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>DOSIS</Text>
        </View>
        <View
          style={[
            styles.content,
            {
              borderBottomWidth: 1,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}>
          <Text style={styles.contentT}>
            1.5 ml por litro de agua antes de la caída fisiológica para
            disminuir la generación de abscísico y el aborto de frutos.
          </Text>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>ETAPA FENOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Llenado de fruta</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>ETAPA FISIOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Calibre 250</Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            Mantenimiento del color verde en la fruta
          </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>DOSIS</Text>
        </View>
        <View
          style={[
            styles.content,
            {
              borderBottomWidth: 1,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}>
          <Text style={styles.contentT}>
            1.5 ml por litro de agua combinado con las aplicaciones foliares
            cada 15 días hasta el corte de la fruta para evitar la pérdida de
            color.
          </Text>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>ETAPA FENOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Época de sequía</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>ETAPA FISIOLÓGICA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Al inicio de la canícula</Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            Bajar las especies reactivas del oxígeno (disminuir el estrés
            oxidativo)
          </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>DOSIS</Text>
        </View>
        <View
          style={[
            styles.content,
            {
              borderBottomWidth: 1,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          ]}>
          <Text style={styles.contentT}>
            1.5 ml por litro cada 15-20 días hasta salir de la época crítica.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {fontSize: 15, color: 'white', fontWeight: 'bold'},
  redHeader: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e42424',
  },
  greenHeader: {
    //  borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#43a63c',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  contentT: {
    fontSize: 15,
    color: 'black',
    textAlign: 'justify',
  },
});
