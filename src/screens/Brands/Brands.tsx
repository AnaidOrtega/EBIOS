import {FC} from 'react';
import {View, Text} from 'react-native';
import {DrawerParamList} from '../../types/screens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// props from the DrawerParamList and the screen Brands
export type DrawerScreenProp = NativeStackScreenProps<
  DrawerParamList,
  'Brands'
>;

export const Brands: FC<DrawerScreenProp> = ({route: {params}}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Brands Screen</Text>
      <Text>Selected Product: {params.params.selectedProduct}</Text>
    </View>
  );
};
