import React, {FC} from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {containerSection, title} from './SectionDivider.module.scss';

export interface SectionDividerProps {
  titulo: string;
}

export const SectionDivider: FC<SectionDividerProps> = ({titulo}) => {
  return (
    <View style={containerSection as StyleProp<ViewStyle>}>
      <Text style={title as StyleProp<ViewStyle>}>{titulo} </Text>
    </View>
  );
};
