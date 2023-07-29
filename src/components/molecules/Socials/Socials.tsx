import React from 'react';
import {
  View,
  Text,
  Linking,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import {stylesheet} from './Socials.styles';
import {container, title, view} from './Socials.module.scss';
export interface ListSocialsItems {
  url: string;
  title: string;
  Icon: FC<SvgProps>;
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
