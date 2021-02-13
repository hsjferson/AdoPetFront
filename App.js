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
import Login from './src/screens/Login'; 
import PagAnuncio from './src/screens/PagAnuncio'; 

import { useFonts , Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_700Bold} from '@expo-google-fonts/comfortaa';
import { OpenSans_600SemiBold , OpenSans_700Bold } from '@expo-google-fonts/open-sans'; 

import { AppLoading } from 'expo';

const Stack = createStackNavigator ();
  
export default function App() {

  let [fontsLoaded] = useFonts ({
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_700Bold,
    OpenSans_600SemiBold,
    OpenSans_700Bold,  
  });

  if(!fontsLoaded) {
    return <AppLoading/>; 
  } 

  return ( 
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome"  > 

          <Stack.Screen name="Welcome" component={Welcome} options={{title:'' ,
            }}
          />

          <Stack.Screen name="CadastroUser" component={CadastroUser}  options={{title:'',headerBackTitleVisible:null,  }} 
          /> 

          <Stack.Screen name="Anuncios" component={Anuncios} options={{title:'',headerTintColor:"#777", headerBackTitleVisible:null,  }} />  

          <Stack.Screen name="Login" component={Login} options={{title:'',headerTintColor:"#777", headerBackTitleVisible:null, }} /> 

          <Stack.Screen name="PagAnuncio" component={PagAnuncio} options={{title:'',headerTintColor:"#777", headerBackTitleVisible:null ,  }} /> 
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}
 