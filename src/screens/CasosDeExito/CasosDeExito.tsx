import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {FC} from 'react';

import {Text, View, ScrollView, StyleProp, ViewStyle} from 'react-native';
import {DrawerParamList} from '../../types/screens';
import {container} from './CasosDeExito.module.scss';
import {Chronos} from '../../components/molecules/Beneficios/Chronos/Chronos';
import {Genera} from '../../components/molecules/Beneficios/Genera/Genera';
import {Stoma} from '../../components/molecules/Beneficios/Stoma/Stoma';
export type DrawerScreenProp = NativeStackScreenProps<
  DrawerParamList,
  'Casos de éxito'
>;
type Data = {
  [key: string]: React.FC;
};
const ChornosLifeText = () => <Chronos />;
const GeneraText = () => <Genera />;
const StomaText = () => <Stoma />;
export const CasosDeExito: FC<DrawerScreenProp> = props => {
  const data: Data = {
    'Chronos Life': ChornosLifeText,
    Genera: GeneraText,
    'Stoma-Or': StomaText,
  };
  const Componente = data[props.route.params.params.selectedProduct];
  return <View style={{flex: 1}}>{Componente && <Componente />}</View>;
};
