import React, {FC} from 'react';
import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import {header, headerText, headersito, name} from './Header.module.scss';
import OatLeft from '../../../assets/svg/oatleft.svg';
import OatRight from '../../../assets/svg/oatleft.svg';
import Dots from '../../../assets/svg/Design/Icon Dots.svg';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {useAppSelector} from '../../../redux/hooks';
export interface HeaderProps {
  label?: string;
  headerprops: DrawerHeaderProps;
}

export const Header: FC<HeaderProps> = ({label, headerprops}) => {
  console.log(label);
  const UsuarioName = useAppSelector(state => state.Usuario.Name);
  return (
    <View
      style={[
        header as StyleProp<ViewStyle>,
        {justifyContent: headerprops ? 'space-between' : 'center'},
      ]}>
      {headerprops && (
        <TouchableOpacity onPress={() => headerprops.navigation.openDrawer()}>
          <Dots width={30} height={30} />
        </TouchableOpacity>
      )}

      <View style={headersito as StyleProp<ViewStyle>}>
        <OatLeft />
        <Text style={headerText as StyleProp<ViewStyle>}>
          {label ?? 'B I E N V E N I D O'}
        </Text>

        <OatRight />
      </View>
    </View>
  );
};
