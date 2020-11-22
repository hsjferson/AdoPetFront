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
               <ImageBackground source={require('../img/fundo.jpg')}  style={styles.bgimages}>
                    <View style={styles.containerArea}> 
                            <View style={styles.areaAvatar}>
                                <Image style={styles.formAvatar} source={require('../img/logo1.png')}></Image> 
                            </View>  
                            <View style={styles.btnGeral}> 
                                <TouchableOpacity 
                                title="Login"  
                                onPress={() => navigation.navigate('Login')} style={styles.button}
                                 ><Text style={styles.totuloBotao}>Login</Text>
                                </TouchableOpacity >

                                <TouchableOpacity 
                                title="Meus anuncios"  
                                onPress={() => navigation.navigate('Anuncios')} style={styles.button}
                                 ><Text style={styles.totuloBotao}>Anuncios</Text>
                                </TouchableOpacity >
                                <Text style={styles.subTitle}>Não possui uma conta?</Text> 
                                <TouchableOpacity 
                                title="Cadastre-se"  
                                onPress={() => navigation.navigate('CadastroUser')} style={styles.button}
                                 ><Text style={styles.totuloBotao}>Criar conta</Text>
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
        justifyContent:"center",  
         
    }, 
    containerArea: {
           flex:1,
        padding:10,
        justifyContent:"center", 
    },
    bgimages: {
        flex:1,
        width:null
      },  
    subTitle: { 
        fontSize:20,
        textAlign:"center",
        marginTop:30, 
    },
    areaAvatar: {  
        alignItems:"center"
    },

    formAvatar: {  
        margin:15,
    },
    BtnGeral: {         
        margin:10,  
        flexDirection:"row",
        backgroundColor:"#777"
    },
    button:{ 
        height:40,
        backgroundColor:"#475F94",
        borderRadius:30, 
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        shadowOffset: {
            width:3,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,
    },
    totuloBotao:{  
        fontWeight:"bold",
        color:"#fff"
    }
})



