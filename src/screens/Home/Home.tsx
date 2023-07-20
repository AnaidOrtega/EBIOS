import {FC} from 'react';
import {View, Text, Pressable, StyleProp, ViewStyle,ImageBackground,ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import {stylesheet} from './Home.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bg from './../../assets/img/backgrounds/fondoepsi.png';
import styles, {  flex1, flex2 } from './Home.module.scss';

// props from the rootstackparamlist and the screen home
export type HomeStackProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

import {SectionDivider} from '../../components/SectionDivider/SectionDivider';
import Header from '../../components/Header/Header';
import {CardList} from '../../components/CardList/CardList';
import { CardListsC } from '../../components/CardListsC/CardListsC';
import { Socials } from '../../components/Socials/Socials';

export const Home: FC<HomeStackProps> = ({navigation}) => {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
    <ImageBackground style={flex1 as StyleProp<ViewStyle>} source={Bg}>
      <View>
        <Header/>
        <ScrollView style={flex2 as StyleProp<ViewStyle>}>
          <SectionDivider titulo={"Nuestros Productos"}></SectionDivider>
          <CardList navigation={navigation} route={undefined} ></CardList>
          <SectionDivider titulo={"Cotizador y Comunidad EBIOS"}></SectionDivider>
          <CardListsC navigation={navigation} route={undefined}></CardListsC>
          <SectionDivider titulo={"Contacto y redes sociales"}></SectionDivider>
        <Socials navigation={navigation} route={undefined}></Socials>


        </ScrollView>



      
      </View>
    </ImageBackground>
  </SafeAreaView>
  );
};
