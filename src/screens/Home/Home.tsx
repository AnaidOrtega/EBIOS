import {FC} from 'react';
import {View, Text, Pressable, StyleProp, ViewStyle} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/screens';
import styles from './Home.module.scss';

// props from the rootstackparamlist and the screen home
export type HomeStackProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: FC<HomeStackProps> = ({navigation}) => {
  return (
    <View style={styles.container as StyleProp<ViewStyle>}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('Drawer', {
            screen: 'Brands',
            params: {
              selectedProduct: 'Genera',
              params: {
                selectedProduct: 'Genera',
              },
            },
          })
        }>
        <Text>A</Text>
      </Pressable>
    </View>
  );
};
