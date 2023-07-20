import {FC} from 'react';
import {View, Text, Pressable, StyleProp, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import styles from './Home.module.scss';
import {stylesheet} from './Home.styles';

// props from the rootstackparamlist and the screen home
export type HomeStackProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: FC<HomeStackProps> = ({navigation}) => {
  return (
    <View style={styles.container as StyleProp<ViewStyle>}>
      <Text style={stylesheet.text}>Home Screen</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('Drawer', {
            screen: 'Brands',
            params: {
              selectedProduct: 'genera',
              params: {
                selectedProduct: 'genera',
              },
            },
          })
        }>
        <Text>Genera</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate('Drawer', {
            screen: 'Brands',
            params: {
              selectedProduct: 'stoma',
              params: {
                selectedProduct: 'stoma',
              },
            },
          })
        }>
        <Text>Stoma</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate('Drawer', {
            screen: 'Brands',
            params: {
              selectedProduct: 'chronos',
              params: {
                selectedProduct: 'chronos',
              },
            },
          })
        }>
        <Text>Chronos</Text>
      </Pressable>
    </View>
  );
};
