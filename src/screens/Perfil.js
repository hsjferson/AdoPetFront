import React, { Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, Alert} from 'react-native';  
 
 
export default class Tela4 extends Component {

    constructor(props) {
        super(props);
        this.state
    }
    apertouBotao() {
        Alert.alert("Add a função de alterar aqui")
    }
 
     render(){
         return( 
                 <View style={styles.container}>
                    <View style={styles.cadastroArea}>
                    <Text style={styles.title}>Dados de Usuario</Text> 
                        <View style={styles.form}>
                             
                            <View style={styles.areaAvatar}>
                                <Image style={styles.formAvatar} source={require('../img/user.png')}></Image>
                            </View> 
                            
                            <View style={styles.areaInfo}>  
                                <Text style={styles.infoOptions}>Jeferson da Silva</Text>
                                <Text style={styles.infoOptions}>jferson9wd@gmail.com</Text>
                                <Text style={styles.infoOptions}>00 0000 0000</Text>
                                <Text style={styles.infoOptions}>*********</Text>

                                <Button title="Alterar" onPress = { this.apertouBotao  }></Button>
                            </View>   

                            
                        </View> 
                    </View> 
                    
               </View> 
         )
     }
    
} 
const styles = StyleSheet.create({
    container   : {
        flex:1, 
        marginTop:20, 
    },
    cadastroArea: {
        height:200, 
        margin:10,
        padding:10
    },
    title: {
        fontWeight:"bold"
    },
    form: {
        flex:1, 
        backgroundColor:"#FFF",
        height:100, 
        flexDirection:"row",
        borderRadius:10,
        padding:20
    },  
    infoOptions: {
        fontFamily:"Arial",
        fontSize:15,
        textAlign:"left", 
          
    },
    areaAvatar: { 
        alignItems:"center", 
    },
    formAvatar: {
        width:50,
        height:50, 
        margin:15,
    },  
})