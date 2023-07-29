import React, {FC} from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {header, headerText} from './Header.module.scss';
import OatLeft from '../../../assets/svg/oatleft.svg';
import OatRight from '../../../assets/svg/oatleft.svg';

export interface HeaderProps {
  label?: string;
}

export const Header: FC<HeaderProps> = ({label}) => {
  return (
    <View style={header as StyleProp<ViewStyle>}>
      <OatLeft />
      <Text style={headerText as StyleProp<ViewStyle>}>
        {label ?? 'B I E N V E N I D O'}
      </Text>
      <OatRight />
    </View>
  );
};
