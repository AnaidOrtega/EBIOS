import React, {FC} from 'react';
import {ImageBackground, StyleProp, ViewStyle} from 'react-native';
import {DrawerParamList} from '../../types/screens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
      style={styles.container as StyleProp<ViewStyle>}
    />
  );
};
