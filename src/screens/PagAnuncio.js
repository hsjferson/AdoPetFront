import React, { Component , useState} from 'react';
import {View,FlatList, Text, StyleSheet, TextInput, Image, Button, Alert, Br, SafeAreaView, TouchableOpacity } from 'react-native'; 

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
                                    <Image source={{uri:item.picture.thumbnail}} style={styles.avatar} />

                                    <View style={styles.info}>
                                        <Text style={styles.email}>{item.email}</Text>
                                        <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                                        
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
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width:10,
            height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    } ,
    avatar: {
        width:320,
        height:320,
        borderRadius:10, 
        margin:10,
        alignSelf:"center"
    },
    info: {
        flex:1, 
        margin:20,
         
    },
    name: {
        fontSize:15
    },
    email:{
        fontSize:14,
        fontWeight:"bold"
    },
})