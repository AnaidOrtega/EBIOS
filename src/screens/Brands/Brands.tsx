import React, { FC } from 'react';
import { ImageBackground, StyleProp, ViewStyle, View } from 'react-native';
import { DrawerParamList } from '../../types/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { brandScreenData } from '../../data/brandsScreen';
import styles from './Brands.module.scss';
import { height, safeAreaTop } from '../../styles/globals';
// props from the DrawerParamList and the screen Brands
export type DrawerScreenProp = NativeStackScreenProps<
  DrawerParamList,
  'Brands'
>;

export const Brands: FC<DrawerScreenProp> = ({ route: { params } }) => {
  const data = brandScreenData[params.params.selectedProduct];

  const totalH = height - safeAreaTop - 60;
  return (
    <ImageBackground
      source={data?.imgBackground}
      style={styles.container as StyleProp<ViewStyle>}>
      <View>
        {data.logos?.map((Icon, index) => (
          <Icon key={index} width={data.logosdesc?.width} height={200} />
        ))}
      </View>
    </ImageBackground>
  );
};

{
  /*data.screenLabel === 'Chronos Life' && (
        <View>
          <LogoChronos height={totalH / 3} width={width} />
          <Poliaminas height={totalH / 3} width={width} />
          <TextChronos height={totalH / 3} width={width} />
        </View>
      )}
      {data.screenLabel === 'Stoma-Or' && (
        <View>
          <OmriLogo width={'100%'} height={totalH / 8} />
          <LogoStoma width={'100%'} height={totalH / 8} />
          <MidStoma width={'100%'} height={totalH / 3} />
          <PotencialS width={'100%'} height={totalH / 8} />
        </View>
      )*/
}
