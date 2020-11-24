import React, { Component , useState} from 'react';
import {View,FlatList, Text, StyleSheet, TextInput, Image, Button, Alert, Br, SafeAreaView, TouchableOpacity } from 'react-native'; 
import { color } from 'react-native-reanimated';

export default class PagAnuncio extends Component { 

    constructor(props) {
        super(props);
        this.state ={ 
           //  modalAberto:false,
                loading: true,
                date:[] 
  
        }; 
       // this.abrirModal = this.abrirModal.bind(this);
      //  this.fecharModal = this.fecharModal.bind(this);
    }

   loadUsers =() => { 
             fetch("https://randomuser.me/api/?results=1")
            .then( res => res.json() )
            .then( res => {
                this.setState ({
                    data: res.results || [] ,// vazio
                    loading: false
                })
            })
   } 

   componentDidMount(){
        this.loadUsers();
   } 

   render(){ 
       return(
        <View style={styles.container}> 
               <FlatList   
                        data={this.state.data}
                        renderItem={({item,  index, separators })=> (
                            <TouchableOpacity  onPress = { () => this.props.navigation.navigate('PagAnuncio')  } > 
                                <View   style={styles.line}>  
                                <Image style={styles.imagemAnimal} source={require('../img/pastor2.jpg')}></Image>

                                    <View style={styles.info}>
                                         <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Dados do Animal </Text> </Text>
                                         <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> Tipo: </Text> Cães</Text> 
                                        <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> Raça: </Text> Pastor-alemão</Text>  
                                        <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> Porte: </Text> P</Text>
                                        <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> Idade: </Text> 5 Anos</Text>  
                                        <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> Quantidade: </Text> 1</Text>
                                        
                                    </View>  
                                    <View style={styles.info}>
                                         <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Dados do Anunciante </Text> </Text>
                                        <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> Anunciante: </Text> Pastor-alemão</Text>  
                                        <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> E-mail: </Text>jferson123@gmail.com</Text>
                                        <Text style={styles.anunciante}><Text style={{fontWeight: "bold"}}> Telefone: </Text>(43)7777-7777</Text>   
                                        
                                    </View>   
                                </View>
                            </TouchableOpacity> 
                        )}
                        keyExtractor={item => item.email}> 
                </FlatList> 
            </View>   
       )
   } 
}

const styles = StyleSheet.create({
    container   : {   
        marginTop:20, 
    },  
    BtnGeral: {   
        alignItems:"center",
        justifyContent:"center",   
        margin:10
    },
    line: {   
        flexDirection:"column",
        margin:10, 
        alignItems:"center",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width:2, 
        },
        shadowOpacity: 0.30,
        shadowRadius: 5.65,
    } ,
    imagemAnimal: {
        width:380,
        height:300
    },
    avatar: {
        width:320,
        height:320,
        borderRadius:10, 
        margin:10,
        alignSelf:"center"
    },
    info: { 
        width:380,
        margin:20,  
        fontSize:30,
         
    },
    name: {
        fontSize:19
    },
    anunciante: {
        fontSize:16,
        color:"#5b5b5b"
    },
    email:{
        fontSize:14,
        fontWeight:"bold"
    },
})