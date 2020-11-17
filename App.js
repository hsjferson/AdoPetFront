import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import Tela3 from './src/screens/Tela3';

const Stack = createStackNavigator ();
  
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Tela1"> 

          <Stack.Screen name="Tela1" component={Tela1} options={{title:'Bem  Vindo',
          headerStyle: {backgroundColor:'#fff'} , headerTintColor:'#000'  
            }}
          />

          <Stack.Screen name="Tela2" component={Tela2}  options={{title:''}} 
          /> 

          <Stack.Screen name="Tela3" component={Tela3} options={{title:'Anuncios'}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 