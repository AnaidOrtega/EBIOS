import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {container, title, view} from './Socials.module.scss';
import {stylesheet} from './Socials.styles';
import {socials} from '../../../assets/constants/data';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg';
export interface ListSocialsItems {
  title: string;
  Icon: FC<SvgProps>;
  url: string;
}
export interface SocialsListProps {
  items?: ListSocialsItems[];
}

export const Socials: FC<SocialsListProps> = ({items}) => {
  return (
    <View style={container as StyleProp<ViewStyle>}>
      {items?.map((item, index) => (
        <TouchableOpacity
          style={view as StyleProp<ViewStyle>}
          key={index}
          onPress={() => {
            Linking.openURL(item.url);
          }}>
          <View style={stylesheet.card}>
            <Text style={title as StyleProp<ViewStyle>}>{item.title}</Text>
            <item.Icon width="30px" height="30px" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
