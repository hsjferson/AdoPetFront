import React, { Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Alert, Br} from 'react-native';

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
                <View style={styles.form}>
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
                         <Button title="Alterar" onPress = { this.alterarBotao }></Button>
                          
                         <Button title="Cadastrar" onPress = { this.alterarBotao }></Button>
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
        height:450, 
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
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    formAvatar: {
        width:100,
        height:100, 
        margin:15,
    },
    form: {
        flexDirection:"column",
        flex:1
    },
    formInfo: {
        flex:1, 
        padding:10

    },
    input: {
        height:40,
        borderWidth:1,
        borderColor:'#000',
        margin:5,
        borderRadius:5
    },
    BtnGeral: { 
        justifyContent:"center", 
        backgroundColor:"#92e5c9",  
        margin:10
    },
})