import {FC} from 'react';
import {View, Text, StyleProp, ViewStyle, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView} from 'react-native';
import {container, banner, bannerText} from './Cotizacion.module.scss';
// props from the rootstackparamlist and the screen home
export type HomeStackProps = NativeStackScreenProps<
  RootStackParamList,
  'cotizacion'
>;
// components

import {VentasEBIOS} from '../../components/molecules/VentasEbios/VentasEbios';

import {Formulario} from '../../components/molecules/Formulario/Formulario';

export const Cotizacion: FC<HomeStackProps> = ({navigation}) => {
  const ConfirmOrder = (datos: string) => {
    console.log('datos');
  };
  return (
    <ScrollView style={{flex: 1}}>
      <KeyboardAvoidingView>
        <View style={container as StyleProp<ViewStyle>}>
          <VentasEBIOS />

          <View style={banner as StyleProp<ViewStyle>}>
            <Text style={bannerText as StyleProp<ViewStyle>}>
              - Llena nuestro formulario de pedidos -
            </Text>
          </View>

          <Formulario order={ConfirmOrder.bind(this)} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
