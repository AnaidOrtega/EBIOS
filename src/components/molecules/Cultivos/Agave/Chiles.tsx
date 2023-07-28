import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Divider} from '@rneui/themed';
import {Footer} from '../../../atoms/Footer/Footer';
import {ColorBar} from '../../../atoms/ColorBar/ColorBar';
import {ScrollView} from 'react-native-gesture-handler';
import {width} from '../../../../styles/globals';
import Header from '../../../../assets/img/HeadersCultivos/chiles.png';
import EBios from '../../../../assets/svg/Logos/EBIOS.svg';
import Plus from '../../../../assets/svg/Design/plus.svg';
import Minus from '../../../../assets/svg/Design/minus.svg';

export const Chiles: FC<{}> = props => {
  const [textSize, setTextSize] = useState(10);
  const handleClick = () => {
    if (textSize !== 30) {
      setTextSize(textSize + 5);
    }
  };
  const handleClickminus = () => {
    if (textSize !== 5) {
      setTextSize(textSize - 5);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={Header}
          style={{
            width: width - 20,
            height: 460,
            resizeMode: 'contain',
          }}
        />
        <View style={styles.headerLogo}>
          <EBios style={{width: 120, height: 120}} />
          <Divider style={{backgroundColor: 'grey', width: '100%'}} />
        </View>
        <View style={{flex: 1, padding: 15}}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <Text style={{fontSize: 10, paddingHorizontal: 20}}>zoom</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <TouchableOpacity style={[styles.button]} onPress={handleClick}>
              <Plus width={20} height={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleClickminus}>
              <Minus width={20} height={20} />
            </TouchableOpacity>
          </View>

          <Text style={{textAlign: 'justify', fontSize: textSize}}>
            <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
              ¿QUÉ ES?
            </Text>
            {'\n'}
            {'\n'}
            Chronos Life ® es un bioestimulante derivado de extractos vegetales,
            cuyo ingrediente esencial son poliaminas, las cuales le permiten a
            las plantas alcanzar mayor productividad al retrasar el inicio de la
            senescencia.{'\n'}
            {'\n'}
            <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
              ¿PARA QUÉ SIRVE?
            </Text>
            {'\n'}
            {'\n'}
            Mantiene la integridad de la membrana celular, retrasando los
            procesos degenerativos que conducen a la planta a un envejecimiento
            prematuro con los siguientes beneficios:{'\n'}
            {'\n'}● Mayor periodo en la etapa productiva (hasta un 15%). .{'\n'}
            {'\n'}● Reduce los daños por efectos oxidativos que genera muerte
            celular en la planta.{'\n'}
            {'\n'}● Disminuye la producción y dinámica del Etileno. Todo lo
            anterior da como resultado el retraso del inicio del proceso de
            envejecimiento de la planta. (SENESCENCIA){'\n'}
            {'\n'}
            <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
              ¿CÓMO FUNCIONA?
            </Text>
            {'\n'}
            {'\n'}
            Las poliaminas que contiene Chronos Life ® permiten que la membrana
            celular de la planta permanezca íntegra por más tiempo al mantener
            la formación continua de proteínas que le dan estructura a dicha
            membrana. {'\n'}
            {'\n'}Contiene el antioxidante más poderoso de la naturaleza.
            También contiene Citocininas y Auxinas derivadas de extractos
            vegetales, las cuales favorecen la división celular y
            organogénesis*.
            {'\n'}
            {'\n'}
            Los nutrientes que contiene postergan el inicio de la senescencia y
            disminuyen el impacto oxidativo, estos son: K, Ca, Zn, B, Co y Mo.
            {'\n'}
            {'\n'}
            Chronos Life ® mantiene constante la actividad radicular y la
            formación de frutos o de cualquier órgano de reserva.{'\n'}
            {'\n'}
            <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
              ¿CUÁLES SON SUS BENEFICIOS?{' '}
            </Text>
            {'\n'}
            {'\n'}
            1. Derivado de extractos vegetales. {'\n'}
            {'\n'}2. Ingredientes novedosos y únicos en el mercado: {'\n'}
            {'\n'} A. Poliaminas y Citocininas naturales NO Sintéticas. {'\n'}
            {'\n'} B. Alta concentración del antioxidante Glutation. {'\n'}
            {'\n'}3. Para lograr el mismo beneficio se requeriría aplicar más de
            tres productos.
          </Text>
        </View>
        <View style={styles.redFrame}>
          <Text style={{textAlign: 'justify'}}>
            ● Disminución del aborto floral.{'\n'}
            {'\n'}● Mayor amarre de fruta.{'\n'}
            {'\n'}● Frutos con mayor vida en anaquel.{'\n'}
            {'\n'}● Retrasa el envejecimiento en las plantas.{'\n'}
            {'\n'}● Requerimientos básicos para el crecimiento del fruto:
            {'\n'}
            {'\n'}
            Chronos Life ®, dá un adecuado balance hídrico y nutrimental.
            {'\n'}
            {'\n'}
            Chronos Life ®, retrasa el inicio de la senescencia.{'\n'}
            {'\n'}
          </Text>
        </View>
        <ColorBar />
        <View style={{flex: 1, padding: 15, paddingBottom: 0}}>
          <Text style={{textAlign: 'justify'}}>
            <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
              DOSIS{' '}
            </Text>
            {'\n'}
            {'\n'}Iniciar las aplicaciones en la 1era floración en su máxima
            expresión a dosis de 1/2 L por Ha, cada 15 días y después de cada
            corte.{'\n'}
            {'\n'}
            En bell pepper, iniciar las aplicaciones a partir del 1er cuajado de
            fruto y mantener esas aplicaciones a dosis de 1/2 L por Ha, cada 15
            días y después de cada corte.
          </Text>
        </View>
        <EBios style={{width: 120, height: 120}} />
        <Footer
          url={'http://161.35.105.244/ficha/CHILES%20EBIOS%20CHRONOS.pdf'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
  zoomable: {
    padding: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  headerLogo: {
    flex: 1,
    width: width,
    padding: 10,
    paddingTop: 0,
    alignItems: 'flex-end',
  },
  redFrame: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  button: {
    width: 35,
    color: 'white',
    paddingHorizontal: 4,
  },
});

/*  <View style={{flex: 1}}>
        <Text onPress={() => console.log()}>"hola"</Text>
        <ColorBar></ColorBar>
        <Footer url="www.youtube.com"></Footer>
      </View>*/
