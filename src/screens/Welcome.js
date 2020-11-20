import React, { Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
export default function Welcome ({navigation}){ 
     
       return(
           <View style={styles.container}>
               <ImageBackground source={require('../img/back2.png')}  style={styles.bgimages}>
                    <View style={styles.containerArea}>
                            <Text style={styles.title}>Adopet</Text> 
                            <View style={styles.areaLogo} > 
                            </View>
                            <Text style={styles.subTitle}>Escolha uma opção:</Text> 
                            <View style={styles.btnGeral}>
                                <TouchableOpacity 
                                title="Cadastre-se"  
                                onPress={() => navigation.navigate('CadastroUser')} style={styles.button}
                                 ><Text style={styles.totuloBotao}>Cadastre-se </Text>
                                </TouchableOpacity >

                                <TouchableOpacity 
                                title="Meus anuncios"  
                                onPress={() => navigation.navigate('Anuncios')} style={styles.button}
                                 ><Text style={styles.totuloBotao}>Anuncios</Text>
                                </TouchableOpacity >
                            </View>
                                
                    </View>
               </ImageBackground>
                
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
           
        padding:10,
        justifyContent:"center",  
    },
    bgimages: {
        flex:1,
        width:null
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
    }, 
    logo: {  
        width:70,
        height:70
    },
    BtnGeral: {         
        margin:10
    },
    button:{ 
        height:50,
        backgroundColor:"#475F94",
        borderRadius:30, 
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        margin:5
    },
    totuloBotao:{  
        fontWeight:"bold",
        color:"#fff"
    }
})



