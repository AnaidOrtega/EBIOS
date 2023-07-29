import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ImageBackground,
  StyleProp,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {DrawerParamList} from '../../types/screens';
import {brandScreenData} from '../../data/brandsScreen';
import styles from './Brands.module.scss';
// props from the DrawerParamList and the screen Brands
export type DrawerScreenProp = NativeStackScreenProps<
  DrawerParamList,
  'Brands'
>;

export const Brands: FC<DrawerScreenProp> = ({route: {params}}) => {
  const data = brandScreenData[params.params.selectedProduct];
  return (
    <ImageBackground
      source={data?.imgBackground}
      style={styles.container as StyleProp<ViewStyle>}>
      {data.logos?.map((Icon, index) => (
        <Image
          key={index}
          source={Icon as ImageSourcePropType}
          style={{
            width: '65%',
            height: '25%',
            resizeMode: 'contain',
          }}
        />
      ))}
    </ImageBackground>
  );
};
