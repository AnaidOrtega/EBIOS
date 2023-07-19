import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// ParamList's are for Nevigators (stacks,drawers,etc)
// Tells them which routes are going to be defined in each

// MAIN STACK
export type RootStackParamList = {
  Home: undefined; // set undefined if u dont want to send any props
  Drawer: {
    // screen because you are going to tell de drawer to navigate to that screen
    //see Home > Pressable > onPress()
    screen: string;
    params: {selectedProduct: string; params: {selectedProduct: string}};
  };
  // there are 2 'params' the first one for the Drawer itself and the second one for the screen selected to navigate.
};

export type MainDrawerProps = NativeStackScreenProps<
  RootStackParamList,
  'Drawer'
>;

// MAIN DRAWER
export type DrawerParamList = {
  Drawer: NavigatorScreenParams<MainDrawerProps>;
  Brands: {params: {selectedProduct: string}};
};
