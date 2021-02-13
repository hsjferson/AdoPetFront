import React, { Component , useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Alert, Br, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'; 
import GradientButton from 'react-native-gradient-buttons';
//import Api from '../Api';

//const loginClick =() => {

//}
 
export default class Login extends Component {
 
     
    constructor(props) {
        super(props);
        this.state = { 
            formEmail:'',
            formNome:'',
            formTelefone:'',
            formSenha:''
        }; 
    } 
    alterarBotao() {
        Alert.alert("Add a função cadastrar aqui")
    } 
      
   render(){ 
       return(
           <View style={styles.container}> 
               <ImageBackground source={require('../img/fundo.jpg')}  style={styles.bgimages}>
                    <SafeAreaView style={styles.form}> 
                        <View style={styles.areaAvatar}>
                             <Text style={styles.logo}>UMask</Text>
                             <Text style={styles.title}>Login</Text>
                        </View> 
                        <View style={styles.formInfo}> 
                            <TextInput style={styles.input} placeholder=" Digite o Email" value={this.state.formEmail} onChangeText={(formEmail)=>this.setState({formEmail})}></TextInput>
                            
                            <TextInput style={styles.input} secureTextEntry={true} placeholder=" Digite a senha" value={this.state.formSenha} onChangeText={(formSenha)=>this.setState({formSenha})}></TextInput>
                        
                        </View>
                        <View style={styles.BtnGeral}>  
                            <TouchableOpacity  onPress = { this.alterarBotao }> 
                                <GradientButton    onPress = { this.alterarBotao } style={{ marginVertical: 8 }} 
                                    style={styles.btn}> 
                                    <Text style={styles.totuloBotao}>Login</Text> 
                                </GradientButton>  
                            </TouchableOpacity> 
                                {/*<Button title="Cadastrar" onPress = { () => this.props.navigation.navigate('Anuncios')  }></Button> */} 
                        </View>
                    </SafeAreaView> 
             </ImageBackground>
               
           </View>
       )
   } 
}

const styles = StyleSheet.create({
    container   : {
        flex:1,    
        justifyContent:"center", 
    }, 
    cadastroArea: { 
        margin:10, 
        padding:10, 

        justifyContent:'center',
        alignContent:'center',
    },  
    bgimages: {
        flex:1,  
        width:null, 
        justifyContent:'center', 
        alignItems:"center",
        alignContent:'center', 
    }, 
    areaAvatar: { 
        alignItems:"center", 
    },
    
    logo: {
        fontSize:50, 
        fontFamily:'Comfortaa_700Bold',
        color:'#4350c6'
    }, 
    title: {
        fontFamily:"Arial",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center", 
        margin:10,
        color:"#4350c6"
    }, 
    form: {
        flexDirection:"column", 
        justifyContent:'center',  
        alignContent:'center', 
        flex:1
    },
    formInfo: { 
        padding:10, 

    },
    input: {
        height:50, 
        backgroundColor:"#fff", 
        margin:8,
        fontSize:15,
        paddingLeft:15,
        borderRadius:5, 
        shadowColor: "#4350c6",
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 15.84,

        elevation: 2,
    },
    BtnGeral: {   
        alignItems:"center",
        justifyContent:"center",   
        margin:10
    },
    btn:  {
        height:50,
        width:340,
        borderRadius:5,
        margin:8
    },
    totuloBotao:{  
        fontWeight:"bold",
        color:"#fff",
        fontSize:16,
    },
    button:{ 
        height:40,
        backgroundColor:"#475F94",
        borderRadius:30,
        width:150,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        shadowOffset: {
            width:3,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,
    } 
})