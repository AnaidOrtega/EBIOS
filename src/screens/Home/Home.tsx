import React, {FC, useEffect, useState} from 'react';
import {StyleProp, ViewStyle, ImageBackground, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import Bg from './../../assets/img/backgrounds/fondoepsi.png';
import {flex1, flex2} from './Home.module.scss';
import {
  Header,
  Socials,
  CardList,
  ListItems,
  SectionDivider,
} from '../../components';
import {brandScreenData} from '../../data/brandsScreen';
import {communityScreen} from '../../data/communityScreens';
import { ListSocialData } from '../../data/SocialsComponent';

// props from the rootstackparamlist and the screen home
export type HomeStackProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: FC<HomeStackProps> = () => {
  const [products, setProducts] = useState<ListItems[]>([]);

  const getItemsData = () => {
    const newData: ListItems[] = [];
    for (const i in brandScreenData) {
      newData.push({
        label: brandScreenData[i]?.screenLabel,
        screen: 'Drawer',
        icon: brandScreenData[i]?.brandIcon,
        subScreen: 'Brands',
        params: {
          params: {
            selectedProduct: i,
          },
        },
      });
    }
    setProducts(newData);
  };

  useEffect(() => {
    getItemsData();
  }, []);

  return (
    <ImageBackground style={flex1 as StyleProp<ViewStyle>} source={Bg}>
      <Header />
      <ScrollView style={flex2 as StyleProp<ViewStyle>}>
        <SectionDivider titulo={'Nuestros Productos'} />
        <CardList items={products} />
        <SectionDivider titulo={'Cotizador y Comunidad EBIOS'} />
        <CardList items={communityScreen} />
        <SectionDivider titulo={'Contacto y redes sociales'} />
        <Socials items={ListSocialData} />
      </ScrollView>
    </ImageBackground>
  );
};
