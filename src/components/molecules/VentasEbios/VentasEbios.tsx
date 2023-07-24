import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {container, biosLogo, title1, title2} from './VentasEbios.module.scss';
// props from the rootstackparamlist and the screen home

export const VentasEBIOS = () => {
  return (
    <View style={container as StyleProp<ViewStyle>}>
      <View style={biosLogo as StyleProp<ViewStyle>}>
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
    </View>
  );
};
