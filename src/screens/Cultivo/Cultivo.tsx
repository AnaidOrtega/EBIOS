import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {FC} from 'react';

import {Text, View} from 'react-native';
import {DrawerParamList} from '../../types/screens';
export type DrawerScreenProp = NativeStackScreenProps<
  DrawerParamList,
  'Cultivos'
>;
/*
interface Cultivoprops extends DrawerScreenProp {
  cultivo: undefined;
}
*/
export const Cultivo: FC<DrawerScreenProp> = props => {
  return (
    <View style={{flex: 1}}>
      <Text onPress={() => console.log()}>
        {props.route.params.params.cultivo}
      </Text>
    </View>
  );
};
