import React, { Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';  
import GradientButton from 'react-native-gradient-buttons';
 
export default function Welcome ({navigation}){ 
     
       return(
           <View style={styles.container}>
               <ImageBackground source={require('../img/fundo.jpg')}  style={styles.bgimages}>
                    <View style={styles.containerArea}> 
                            <View style={styles.areaAvatar}>
                                 <Text style={styles.logo}>UMask</Text>
                                 <Text style={styles.slogan}>M a s c a r a s</Text>
                            </View>  
                            <View style={styles.btnGeral}>  

                                <TouchableOpacity  onPress={() => navigation.navigate('Login')} style={styles.button} >
                                    <GradientButton   style={{ marginVertical: 8 }} 
                                        style={styles.btn}> 
                                        <Text style={styles.totuloBotao}>Login</Text> 
                                    </GradientButton>
                                </TouchableOpacity> 

                                <TouchableOpacity  onPress={() => navigation.navigate('CadastroUser')}  style={styles.button}  >
                                    <GradientButton   style={{ marginVertical: 8 }} 
                                        style={styles.btn}> 
                                        <Text style={styles.totuloBotao}>Cadastre-se</Text> 
                                    </GradientButton>
                                </TouchableOpacity> 

                                <TouchableOpacity style={styles.nextArea} onPress={() => navigation.navigate('Anuncios')} >   
                                        <Text style={styles.nextText}>Pular</Text>  
                                        <Ionicons name="arrow-forward-outline" size={20} color={'#4350c6'}  /> 
                                </TouchableOpacity>
                                  
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
        width:'100%',  
        padding:10,
        justifyContent:"center", 
        alignItems:"center",
    },
    bgimages: {
        flex:1,
        width:null
      }, 
      logo: {
        fontSize:50, 
        fontFamily:'Comfortaa_700Bold',
        color:'#4350c6'
    },  
    slogan : {
        fontFamily:'OpenSans_400Regular',
        fontSize:18,
        color:'#4350c6',
        fontWeight:'bold'
    },
    subTitle: { 
        fontSize:20,
        textAlign:"center",
        marginTop:30, 
    },
    areaAvatar: {  
        alignItems:"center",
        margin:20
    },

    formAvatar: {  
        margin:15,
    },
    BtnGeral: {         
        margin:10,   
        flexDirection:"row", 
        alignItems:'center',
        justifyContent:'center'
    },  
    nextArea: {
        fontSize:17,
        fontWeight:'bold',
        alignContent:'flex-end',  
        marginRight:20,
        justifyContent:"flex-end",
        marginTop:90,
        color:"#4350c6",  
        flexDirection:'row'
    }, 
    nextText: {
        fontSize:17,
        fontWeight:'bold',
        textAlign:'right', 
        marginRight:5,
        color:"#4350c6",
    },
    button:{   
        margin:5,  
    },

    btn:  {
        height:50,
        width:350,
        alignItems:"center",  
    },
    totuloBotao:{  
        fontWeight:"bold",
        color:"#fff",
        fontSize:16,
    }
})



