import React, { Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createContainer } from '@react-navigation/native';

export default function Welcome ({navigation}){ 
    
       return(
           <View style={styles.container}>
               <View style={styles.containerArea}>
                    <Text style={styles.title}>Adopet</Text> 
                    <View style={styles.areaLogo} >
                        <Image style={styles.logo} source={require('../img/logo2.png')}></Image>
                    </View>
                    <Text style={styles.subTitle}>Escolha uma opção</Text> 
                    <View style={styles.areaButton}>
                        <Button 
                        title="Cadastre-se"  
                        onPress={() => navigation.navigate('CadastroUser')}
                        />

                        <Button  
                        title="Anuncios" 
                        onPress={() => navigation.navigate('Anuncios')}
                        />
                    </View>
                        
               </View>
                
           </View>

           



       )
    
}
const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginTop:20,
        justifyContent:"center",
         
    },
    containerArea: {
        height:500, 
        margin:10,
        padding:10
    },
    title: {
        fontWeight:"bold",
        fontSize:33,
        textAlign:"center",
        margin:10
    },
    subTitle: { 
        fontSize:20,
        textAlign:"center",
        marginTop:30
    },
    areaLogo: {
        flex:2,
        justifyContent:"center",
        alignItems:"center", 
        maxHeight:100
    }, 
    logo: {
        width:70,
        height:70
    },
    areaButton: {
        flexDirection:"row",
        justifyContent:"center",
    }, 
})



