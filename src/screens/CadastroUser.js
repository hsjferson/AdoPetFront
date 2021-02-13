import React, { Component , useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Alert, Br, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
  
import GradientButton from 'react-native-gradient-buttons';
 


 

export default class CadastroUser extends Component {
 
     
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
                   <View style={styles.area}> 
                    <SafeAreaView style={styles.form}>
                        <View style={styles.areaAvatar}>
                             <Text style={styles.logo}>Adopet</Text>
                             <Text style={styles.title}>Cadastre-se</Text>
                        </View> 
                        <View style={styles.formInfo}>
                            <TextInput style={styles.input} placeholder=" Nome" value={this.state.formNome} onChangeText={(formNome)=>this.setState({formNome})}></TextInput>
                            <TextInput style={styles.input} placeholder=" E-mail" value={this.state.formEmail} onChangeText={(formEmail)=>this.setState({formEmail})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Telefone" value={this.state.formTelefone} onChangeText={(formTelefone)=>this.setState({formTelefone})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Senha" value={this.state.formSenha} secureTextEntry={true}  onChangeText={(formSenha)=>this.setState({formSenha})}></TextInput>
                        
                            <Text style={styles.esqueceuSenha}>Esqueceu sua senha ?</Text>
                        </View>
                         
                        <View style={styles.BtnGeral}>  
                            <TouchableOpacity  onPress = { this.alterarBotao }> 
                                <GradientButton    onPress = { this.alterarBotao } style={{ marginVertical: 8 }} 
                                    style={styles.btn}> 
                                    <Text style={styles.totuloBotao}>Cadastre-se</Text> 
                                </GradientButton>  
                            </TouchableOpacity> 
                                {/*<Button title="Cadastrar" onPress = { () => this.props.navigation.navigate('Anuncios')  }></Button> */} 
                        </View>
                    </SafeAreaView> 
                    </View>
                 </ImageBackground>
               
           </View>
       )
   } 
}

const styles = StyleSheet.create({
    container   : {
        flex:1,  
        backgroundColor:"#eceef9", 
        alignContent:"center", 
    }, 
    bgimages: {
        flex:1,  
        width:null, 
        justifyContent:'center',
        alignItems:"center",
        alignContent:'center', 
    }, 
    area: {
        alignItems:"center", 
        margin:30
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
    btn:  {
        height:50,
        width:340,
        borderRadius:5,
        margin:8
    },
    areaAvatar: { 
        alignItems:"center", 
    }, 
    logo: {
        fontSize:50, 
        fontFamily:'Comfortaa_700Bold',
        color:'#4350c6'
    },
    form: {
        flexDirection:"column",
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
    esqueceuSenha: {
        fontSize:15,
        fontWeight:'bold',
        textAlign:'right',
        marginRight:15,
        marginTop:15,
        color:"#4350c6", 
    },
    BtnGeral: {   
        alignItems:"center",
        justifyContent:"center",   
        margin:10
    },
    button:{  
        padding:15, 
        borderRadius:30,
        width:150,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center", 
    },
    totuloBotao:{  
        fontWeight:"bold",
        color:"#fff",
        fontSize:16,
    }
})