import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Welcome from './src/screens/Welcome';
import CadastroUser from './src/screens/CadastroUser';
import Anuncios from './src/screens/Anuncios'; 
import Perfil from './src/screens/Perfil'; 
import CadastroAnimal from './src/screens/CadastroAnimal'; 

const Stack = createStackNavigator ();
  
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome"> 

          <Stack.Screen name="Welcome" component={Welcome} options={{title:'Bem Vindo',
          headerStyle: {backgroundColor:'#fff'} , headerTintColor:'#000'  
            }}
          />

          <Stack.Screen name="CadastroUser" component={CadastroUser}  options={{title:''}} 
          /> 

          <Stack.Screen name="Anuncios" component={Anuncios} options={{title:'Anuncios Disponiveis'}} /> 

          <Stack.Screen name="Perfil" component={Perfil} options={{title:'Meu perfil'}} /> 

          <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} options={{title:'Cadastre'}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 