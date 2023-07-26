import React, {FC} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  View,
} from 'react-native';
import {BrandProps} from '../../../data/brandsScreen';
import {AccordionItem} from '../../atoms';
import {FondoEpsi} from '../../../assets/img/backgrounds/';
import {elevation10} from '../../../styles/globals';
import {sidebarStyles} from './BrandSideBar.styles';
import {buttonText, button, container} from './BrandSideBar.module.scss';
import Back from '../../../assets/svg/Design/back.svg';
import Home from '../../../assets/svg/Design/home.svg';
export interface DrawerConentProps {
  contentProps: DrawerContentComponentProps;
  data: BrandProps;
}

export const BrandSideBar: FC<DrawerConentProps> = ({data}) => {
  return (
    <ImageBackground source={FondoEpsi} style={{flex: 1, padding: 5}}>
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <data.brandIcon style={sidebarStyles.icon} width={150} height={150} />

        {data?.sections?.map(item => (
          <AccordionItem
            title={item.title}
            key={item.title}
            subsections={item.subsections}
          />
        ))}

        <View style={container as StyleProp<ViewStyle>}>
          <TouchableOpacity style={button as StyleProp<ViewStyle>}>
            <Back width={30} height={30} />
            <Text style={buttonText as StyleProp<ViewStyle>}>
              Regresar a Inicio{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={button as StyleProp<ViewStyle>}>
            <Home width={30} height={30} />
            <Text style={buttonText as StyleProp<ViewStyle>}>Home</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};
