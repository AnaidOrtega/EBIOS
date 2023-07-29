import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList, MainDrawerProps} from '../../types/screens';
import {Brands} from '../../screens';
import {brandScreenData} from '../../data/brandsScreen';
import {BrandSideBar, Header} from '../../components';
import {Cultivo} from '../../screens/Cultivo/Cultivo';
import {CasosDeExito} from '../../screens/CasosDeExito/CasosDeExito';

const Drawer = createDrawerNavigator<DrawerParamList>();

// MainDrawerProps = props from RootStackParamList and the screen Drawer
export const MainDrawer: FC<MainDrawerProps> = ({route: {params}}) => {
  const data = brandScreenData[params?.params?.params?.selectedProduct];

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <BrandSideBar contentProps={props} data={data} />
      )}>
      <Drawer.Screen
        name="Brands"
        options={{
          drawerLabel: data?.screenLabel,
          header: () => <Header label={data?.screenLabel} />,
        }}
        component={Brands}
      />
      <Drawer.Screen name="Cultivos" component={Cultivo} />
      <Drawer.Screen name="Casos de éxito" component={CasosDeExito} />
    </Drawer.Navigator>
  );
};
