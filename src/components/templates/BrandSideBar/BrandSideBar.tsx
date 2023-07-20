import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {FC} from 'react';
import {Text} from 'react-native';

export const BrandSideBar: FC<DrawerContentComponentProps> = () => {
  return (
    <DrawerContentScrollView>
      <Text>HERE SCROLL</Text>
    </DrawerContentScrollView>
  );
};
