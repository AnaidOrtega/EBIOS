import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList, MainDrawerProps} from '../../types/screens';
import {Brands} from '../../screens';
import {brandScreenData} from '../../data/brandsScreen';
import {BrandSideBar} from '../../components';

const Drawer = createDrawerNavigator<DrawerParamList>();

// MainDrawerProps = props from RootStackParamList and the screen Drawer
export const MainDrawer: React.FC<MainDrawerProps> = ({route: {params}}) => {
  const data = brandScreenData[params.params.selectedProduct];
  return (
    <Drawer.Navigator drawerContent={BrandSideBar}>
      <Drawer.Screen

        name="Brands"
        options={{
          drawerLabel: data.screenLabel,
          headerTitle: data.screenLabel,
        }}
        component={Brands}
      />
    </Drawer.Navigator>
  );
};
