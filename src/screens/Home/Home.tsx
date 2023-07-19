import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, Pressable} from 'react-native';
import {RootStackParamList} from '../../types/screens';
import {FC} from 'react';

export type MainStakcProp = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'MainStack'
>;

export const Home: FC<MainStakcProp> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Drawer', {screen: 'Feed'})}>
        <Text>A</Text>
      </Pressable>
    </View>
  );
};
