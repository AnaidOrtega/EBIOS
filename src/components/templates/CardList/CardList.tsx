import React, {FC, ReactNode} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {cardListStyles} from './CardList.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {width} from '../../../styles/globals';

export interface ListItems {
  label: string;
  screen: string;
  subScreen?: string;
  params?: {
    [key: string]: string | {[key: string]: string};
  };
  icon: ReactNode;
}

export interface CardListProps {
  items?: ListItems[];
}

export const CardList: FC<CardListProps> = ({items}) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const handleNavigation = (item: ListItems) => {
    navigate(item.screen, {
      screen: item.subScreen,
      params: item.params,
    });
  };

  return (
    <ScrollView
      horizontal
      style={{width}}
      contentContainerStyle={{gap: 30, paddingHorizontal: 20}}>
      {items?.map(item => (
        <TouchableOpacity
          key={item.label}
          style={cardListStyles.view}
          onPress={() => handleNavigation(item)}>
          <View style={cardListStyles.view}>
            <ImageBackground
              style={cardListStyles.bg}
              imageStyle={{borderRadius: 100}}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}>
              <View style={cardListStyles.card} />
            </ImageBackground>
          </View>
          <View style={cardListStyles.option}>
            <Text style={cardListStyles.optionText}>{item.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
