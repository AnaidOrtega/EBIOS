import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/screens';
import {Home} from './src';
import {MainDrawer} from './src/Navigators';
import {Cotizacion} from './src/screens/Cotizacion/Cotizacion';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Community} from './src/screens/Community/Community';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#111d2c'}}
        edges={['top']}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Drawer"
              component={MainDrawer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="cotizacion"
              component={Cotizacion}
              options={{
                headerTintColor: 'white',
                headerTitle: 'Cotización',
                headerShown: true,
                headerStyle: {backgroundColor: '#111d2c'},
              }}
            />
            <Stack.Screen
              name="amigos"
              component={Community}
              options={{
                headerTintColor: 'white',
                headerTitle: 'Amigos de los amaneceres',
                headerShown: true,
                headerStyle: {backgroundColor: '#111d2c'},
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
