import React, {FC} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {cardListStyles} from './CardList.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SvgProps} from 'react-native-svg';
import RightArrow from '../../../assets/svg/rightarrow.svg';
export interface ListItems {
  label: string;
  screen: string;
  subScreen?: string;
  params?: {
    [key: string]: string | {[key: string]: string};
  };
  icon: FC<SvgProps>;
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
      contentContainerStyle={{gap: 16, paddingVertical: 20}}>
      {items?.map(item => (
        <TouchableOpacity
          key={item.label}
          style={cardListStyles.item}
          onPress={() => handleNavigation(item)}>
          <View style={cardListStyles.view}>
            <View style={cardListStyles.card}>
              <item.icon width="120%" height="120%" />
            </View>
          </View>
          <View style={cardListStyles.option}>
            <Text style={cardListStyles.optionText}>{item.label} 
              </Text>
              <RightArrow width="15px" height="15px"/>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
