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
  ScrollView,
} from 'react-native';
import {BrandProps} from '../../../data/brandsScreen';
import {AccordionItem} from '../../atoms';
import {FondoEpsi} from '../../../assets/img/backgrounds/';
import {elevation10} from '../../../styles/globals';
import {sidebarStyles} from './BrandSideBar.styles';
import {buttonText, button, container} from './BrandSideBar.module.scss';
import Back from '../../../assets/svg/Design/back.svg';
import Home from '../../../assets/svg/Design/home.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
export interface DrawerConentProps {
  contentProps: DrawerContentComponentProps;
  data: BrandProps;
}

export const BrandSideBar: FC<DrawerConentProps> = ({data}) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  console.log('soy data de brandsidebar', data.screenLabel);
  return (
    <ImageBackground source={FondoEpsi} style={{flex: 1, padding: 5}}>
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <ScrollView>
          <data.brandIcon style={sidebarStyles.icon} width={150} height={150} />
          {data?.sections?.map(item => (
            <AccordionItem
              title={item.title}
              key={item.title}
              subsections={item.subsections}
              data={data}
            />
          ))}

          <View style={container as StyleProp<ViewStyle>}>
            <TouchableOpacity
              onPress={() => console.log('goback')}
              style={button as StyleProp<ViewStyle>}>
              <Back width={30} height={30} />
              <Text style={buttonText as StyleProp<ViewStyle>}>
                Regresar a Inicio
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Home')}
              style={button as StyleProp<ViewStyle>}>
              <Home width={30} height={30} />
              <Text style={buttonText as StyleProp<ViewStyle>}>Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};
