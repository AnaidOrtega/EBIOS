import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FC} from 'react';

import {View} from 'react-native';
import {DrawerParamList} from '../../types/screens';
import {Chronos} from '../../components/molecules/Beneficios/Chronos/Chronos';
import {Genera} from '../../components/molecules/Beneficios/Genera/Genera';
import {Stoma} from '../../components/molecules/Beneficios/Stoma/Stoma';
import {CamposDeGolf} from '../../components/molecules/CamposDeGolf/CamposDeGolf';

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
const CamposDeGolfText = () => <CamposDeGolf />;
export const CasosDeExito: FC<DrawerScreenProp> = props => {
  const data: Data = {
    'Chronos Life': ChornosLifeText,
    Genera: GeneraText,
    'Stoma-Or': StomaText,
    'Campos de Golf': CamposDeGolfText,
  };
  console.log(props.route.params.params.selectedProduct);
  const Componente = data[props.route.params.params.selectedProduct];
  return <View style={{flex: 1}}>{Componente && <Componente />}</View>;
};
