import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {biosLogo, title1, title2} from './VentasEbios.module.scss';
import {ventasStyles} from '../../../screens/Cotizacion/Cotizacion.styles';
// props from the rootstackparamlist and the screen home

export const VentasEBIOS = () => {
  return (
    <View style={[biosLogo as StyleProp<ViewStyle>, ventasStyles.container]}>
      <Text style={title1 as StyleProp<ViewStyle>}>
        Proceso de venta de productos
      </Text>
      <Text
        style={[
          title1 as StyleProp<ViewStyle>,
          title2 as StyleProp<ViewStyle>,
        ]}>
        Epsilon Bios
      </Text>
    </View>
  );
};
