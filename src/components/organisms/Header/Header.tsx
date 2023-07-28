import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {card, header, headerText} from './Header.module.scss';
import OatLeft from '../../../assets/svg/oatleft.svg';
import OatRight from '../../../assets/svg/oatleft.svg';
export const Header = () => {
  return (
    <View style={card as StyleProp<ViewStyle>}>
      <View style={header as StyleProp<ViewStyle>}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={headerText as StyleProp<ViewStyle>}>
            <OatLeft />
            B I E N V E N I D O
            <OatRight />
          </Text>

          {/* Funcionalidad de aparecer el nombre and stuff */}
        </View>
      </View>
    </View>
  );
};
