import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList, MainDrawerProps} from '../../types/screens';
import {Brands} from '../../screens';

const Drawer = createDrawerNavigator<DrawerParamList>();

// MainDrawerProps = props from RootStackParamList and the screen Drawer
export const MainDrawer: React.FC<MainDrawerProps> = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Brands" component={Brands} />
    </Drawer.Navigator>
  );
};
