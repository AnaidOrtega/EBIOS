import React, {FC} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import {container, banner, bannerText} from './Cotizacion.module.scss';
import {Formulario} from '../../components/molecules/Formulario/Formulario';
import {VentasEBIOS} from '../../components/molecules/VentasEbios/VentasEbios';

// props from the rootstackparamlist and the screen home
export type HomeStackProps = NativeStackScreenProps<
  RootStackParamList,
  'cotizacion'
>;

export const Cotizacion: FC<HomeStackProps> = () => {
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
          <Formulario />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
