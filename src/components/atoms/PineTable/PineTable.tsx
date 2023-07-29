import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const PineTable: FC<{}> = () => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>MOMENTO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Plantilla</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Desarrollo vegetativo</Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>APLICACIÓN</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            1.5 ml por litro de agua, se puede mezclar con productos de reacción
            ácida.
          </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBSERVACIONES</Text>
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
            Se pueden realizar 2 o 3 aplicaciones en el ciclo vegetativo
            combinando con aplicación nutricional o de correcciones.
          </Text>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>MOMENTO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Post-Inducción</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            Incrementar número de ojos bajando la cantidad de Etileno acumulada
            en la planta.
          </Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>APLICACIÓN</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            1.5 ml por litro de agua, se puede mezclar con productos de reacción
            ácida.
          </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBSERVACIONES</Text>
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
            Incorporar microelementos más Calcio y Boro para la correcta
            formación de flores.
          </Text>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>MOMENTO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Caída de flor</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            Desarrollo, formación de hombros y llenado de fruta.
          </Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>APLICACIÓN</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            1.5 ml por litro de agua, se puede mezclar con productos de reacción
            ácida.
          </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBSERVACIONES</Text>
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
            Adicionar con Calcio y Potasio para consistencia y llenado.
          </Text>
        </View>
      </View>

      <View style={{flex: 1, width: '100%', padding: 10}}>
        <View
          style={[
            styles.redHeader,
            {borderTopLeftRadius: 10, borderTopRightRadius: 10},
          ]}>
          <Text style={styles.header}>MOMENTO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>Inicio de cambio de color</Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBJETIVO</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            Retrasar maduración para incrementar peso o esperar mejor precio.
          </Text>
        </View>
        <View style={styles.redHeader}>
          <Text style={styles.header}>APLICACIÓN</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentT}>
            1.5 ml por litro de agua, se puede mezclar con productos de reacción
            ácida.
          </Text>
        </View>
        <View style={styles.greenHeader}>
          <Text style={styles.header}>OBSERVACIONES</Text>
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
            Aplicar al iniciar el cambio de color de la fruta.
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
