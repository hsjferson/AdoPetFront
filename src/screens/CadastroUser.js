import React, { Component , useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Alert, Br, SafeAreaView, TouchableOpacity } from 'react-native'; 


 

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
               <View style={styles.cadastroArea}> 
                    <SafeAreaView style={styles.form}>
                        <View style={styles.areaAvatar}>
                        <Image style={styles.formAvatar} source={require('../img/user.png')}></Image>
                             <Text style={styles.title}>Cadastre-se</Text>
                        </View> 
                        <View style={styles.formInfo}>
                            <TextInput style={styles.input} placeholder=" Digite o Nome" value={this.state.formNome} onChangeText={(formNome)=>this.setState({formNome})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Digite o Email" value={this.state.formEmail} onChangeText={(formEmail)=>this.setState({formEmail})}></TextInput>
                            <TextInput style={styles.input} placeholder=" Digite o Telefone" value={this.state.formTelefone} onChangeText={(formTelefone)=>this.setState({formTelefone})}></TextInput>
                            <TextInput style={styles.input} secureTextEntry={true} placeholder=" Digite a senha" value={this.state.formSenha} onChangeText={(formSenha)=>this.setState({formSenha})}></TextInput>
                        
                        </View>
                        <View style={styles.BtnGeral}> 
                            {/*<Button title="Cadastrar" onPress = { () => this.props.navigation.navigate('Anuncios')  }></Button> */}   
                            <TouchableOpacity  onPress = { this.alterarBotao } style={styles.button}><Text style={styles.totuloBotao}>Cadastre-se</Text></TouchableOpacity>
                             
                        </View>
                    </SafeAreaView> 
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
        height:550, 
        margin:10,
        padding:10, 
    },
    title: {
        fontFamily:"Arial",
        fontSize:20,
        textAlign:"center", 
        margin:10
    },
    areaAvatar: { 
        alignItems:"center", 
    },
    formAvatar: {
        width:80,
        height:80, 
        margin:15,
    },
    form: {
        flexDirection:"column",
        flex:1
    },
    formInfo: { 
        padding:10

    },
    input: {
        height:40, 
        backgroundColor:"#fff", 
        margin:5,
        borderRadius:5
    },
    BtnGeral: {   
        alignItems:"center",
        justifyContent:"center",   
        margin:10
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
    },
    totuloBotao:{  
        fontWeight:"bold",
        color:"#fff"
    }
})