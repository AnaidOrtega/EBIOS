import React, {FC} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Text, ImageBackground} from 'react-native';
import {BrandProps} from '../../../data/brandsScreen';
import {AccordionItem} from '../../atoms';
import {FondoEpsi} from '../../../assets/img/backgrounds/';

export interface DrawerConentProps {
  contentProps: DrawerContentComponentProps;
  data: BrandProps;
}

export const BrandSideBar: FC<DrawerConentProps> = ({data}) => {
  return (
    <ImageBackground source={FondoEpsi} style={{flex: 1, padding: 10}}>
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <Text>{data?.screenLabel}</Text>
        {data?.sections?.map(item => (
          <AccordionItem
            title={item.title}
            key={item.title}
            subsections={item.subsections}
          />
        ))}
      </DrawerContentScrollView>
    </ImageBackground>
  );
};
