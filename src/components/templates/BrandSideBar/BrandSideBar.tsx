import React, {FC} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  View,
  ScrollView,
  BackHandler,
} from 'react-native';
import {BrandProps} from '../../../data/brandsScreen';
import {AccordionItem} from '../../atoms';
import {FondoEpsi} from '../../../assets/img/backgrounds/';
import {sidebarStyles} from './BrandSideBar.styles';
import {buttonText, button, container} from './BrandSideBar.module.scss';
import Back from '../../../assets/svg/Design/back.svg';
import Home from '../../../assets/svg/Design/home.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
export interface DrawerConentProps {
  contentProps: DrawerContentComponentProps;
  data: BrandProps;
}

export const BrandSideBar: FC<DrawerConentProps> = ({data}, {navigation}) => {
  const {navigate, goBack, popToTop, dispatch} =
    useNavigation<NativeStackNavigationProp<any>>();

  console.log('soy data de brandsidebar', data.screenLabel);
  return (
    <ImageBackground source={FondoEpsi} style={{flex: 1, padding: 5}}>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <View style={sidebarStyles.outterIcon}>
          <View style={sidebarStyles.icon}>
            <data.brandIcon width={150} height={150} />
          </View>
        </View>
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
            onPress={() => dispatch(DrawerActions.closeDrawer())}
            style={button as StyleProp<ViewStyle>}>
            <Back width={25} height={25} />
            <Text style={buttonText as StyleProp<ViewStyle>}>
              Regresar a Inicio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={button as StyleProp<ViewStyle>}>
            <Home width={25} height={25} />
            <Text style={buttonText as StyleProp<ViewStyle>}>Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
