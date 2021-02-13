import React, { Component , useState} from 'react';
import {View,FlatList, Text, StyleSheet, TextInput, Image, Button, Alert, Br, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'; 
import { color } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons'; 
import GradientButton from 'react-native-gradient-buttons';

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
                                <Text style={styles.vendidos}>Vendidos: 18526 | Londrina - PR</Text>  
                                <View   style={styles.line}>  
                                   <Image style={styles.imagemAnimal} source={require('../img/mascara2.jpg')}>
                                        
                                   </Image>

                                    <View style={styles.info}>
                                         <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Dados do Produto </Text> </Text>

                                         <Text style={styles.classe}>
                                             <Text style={{fontWeight:"bold" ,fontSize:18}}>
                                             <Ionicons name={"return-down-forward-outline"} size={20}/> 
                                             Classe N: </Text> 
                                             Como a N95, N99 e N100, são indicadas para o tratamento da Covid-19, MERS, SARS e H1N1 em ambientes hospitalares;
                                         </Text> 
                                         <Text style={styles.classe}>
                                             <Text style={{fontWeight:"bold" ,fontSize:18}}>
                                                <Ionicons name={"return-down-forward-outline"} size={20}/> 
                                                Nivel de Proteção: </Text> 
                                              Alto
                                         </Text>  

                                         <Text style={styles.classe}>
                                        <Text style={{fontWeight:"bold" ,fontSize:18}}>
                                                <Ionicons name={"return-down-forward-outline"} size={20}/> 
                                                Especificidade: </Text> 
                                                Reutilizável
                                        </Text>
                                        
                                    </View> 
                                    <View style={ styles.linha }></View> 
                                    <View style={styles.info}>
                                         <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Dados do Vendedor </Text> </Text>
                                        <Text style={styles.classe}><Text style={{fontWeight: "bold"}}> Anunciante: </Text>Jeferson da Silva</Text>  
                                        <Text style={styles.classe}><Text style={{fontWeight: "bold"}}> E-mail:</Text>meuemail@gmail.com</Text>
                                        <Text style={styles.classe}><Text style={{fontWeight: "bold"}}> Telefone:</Text>(43)7777-7777</Text>   
                                        
                                    </View> 
                                    <View style={styles.buttonArea}>
                                        <TouchableOpacity  onPress={() => navigation.navigate('CadastroUser')}  style={styles.button}  >
                                            <GradientButton   style={{ marginVertical: 8 }} 
                                                style={styles.btn}> 
                                                <Text style={styles.totuloBotao}>Ligar</Text> 
                                            </GradientButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity  onPress={() => navigation.navigate('CadastroUser')}  style={styles.button}  >
                                            <GradientButton   style={{ marginVertical: 8 }} 
                                                style={styles.btn}> 
                                                <Ionicons name={"share-outline"} size={23} />
                                                <Text style={styles.totuloBotao}> Salvar</Text> 
                                            </GradientButton>
                                        </TouchableOpacity>
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
        flex:1,   
        justifyContent:'center',  
    }, 
    vendidos: { 
        marginTop:15, 
        marginLeft:15,
        color:'#777'
    }  ,
    linha :{
        marginBottom:1  ,
        marginHorizontal:1  ,
        
    },
    line: {    
        flexDirection:"column", 
        margin:15,  
        alignItems:"center",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width:2, 
        },
        shadowOpacity: 0.30,
        shadowRadius: 5.65,
        backgroundColor:"#fff"
    } ,
    imagemAnimal: {
        width:'100%',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,

        height:230,
    },
    avatar: {
        width:320, 
        borderRadius:10, 
        margin:10, 
    },
    info: { 
        width:380, 
        paddingTop:25,
        paddingLeft:25, 
        fontSize:30, 
         
    },
    
    name: {
        fontSize:16,
        fontFamily:'OpenSans_700Bold',
        color:'#626262' 
    },
    classe: {
        fontSize:16,
        color:"#7c7c7c",
        fontFamily:'OpenSans_600SemiBold'
    },
    email:{
        fontSize:14,
        fontWeight:"bold"
    },
    buttonArea :{
        flex:1,
        marginTop:10,
        width:'100%',
        flexDirection:'row', 
        justifyContent:'center', 
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
    },
    button:{   
        margin:10,  
    },

    btn:  {
        height:50,
        width:160,   
    },
    totuloBotao :{
        fontSize:16
    }
})