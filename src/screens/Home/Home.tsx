import {FC} from 'react';
import {View, Text, Pressable, StyleProp, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import styles from './Home.module.scss';

export type MainStakcProp = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'MainStack'
>;

export const Home: FC<MainStakcProp> = ({navigation}) => {
  return (
    <View style={styles.container as StyleProp<ViewStyle>}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Drawer', {screen: 'Feed'})}>
        <Text>A</Text>
      </Pressable>
    </View>
  );
};
