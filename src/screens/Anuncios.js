import React, { Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image , ActivityIndicator, Button,TouchableOpacity, Modal,Alert} from 'react-native';   
import { Ionicons } from '@expo/vector-icons';  
 
export default class Anuncios extends Component { 
    //loading
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
        fetch("https://randomuser.me/api/?results=100")
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
        if(this.state.loading ) {
            return(
                <View style={styles.containerLoading}>
                    <ActivityIndicator
                        size="large" color="#000"  
                    />
                    <Text style={styles.loadingText}>Aguardando dados da API</Text>
                </View> 
            )      
        }
        return(
            <View style={styles.container}>
                <View style={styles.statusArea}>
                    <View style={styles.userArea}> 
                        <Text style={styles.nome}>Jeferson da Silva</Text> 
                    </View>  
                    <TouchableOpacity style={styles.nextArea} onPress = { () => this.props.navigation.navigate('Perfil')  } >   
                       <Text style={styles.nextText}>Meu perfil</Text>  
                       <Ionicons name="arrow-forward-outline" size={20} color={'#4350c6'}  /> 
                     </TouchableOpacity>
                     
                </View>   
               <FlatList   
                        data={this.state.data}
                        renderItem={({item,  index, separators })=> (
                            <TouchableOpacity  onPress = { () => this.props.navigation.navigate('PagAnuncio')  } > 
                                <View   style={styles.line}>  
                                
                                    <Image style={styles.imagemAnimal} source={require('../img/mascara_adidas.jpg')}></Image>

                                    <View style={styles.areaAnuncio}>  
                                        <View style={styles.info}>
                                            <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Tipo: </Text> Cães</Text> 
                                            <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Raça: </Text> Pastor-alemão</Text>  
                                            <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Porte: </Text> P</Text>
                                            <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Idade: </Text> 5 Anos</Text>   
                                            
                                        </View> 
                                        <View style={styles.info_t}>
                                             <Ionicons name="add-circle-outline" size={30} color={"#777"}/>
                                            
                                        </View>
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
    icone: {
        width:26,
        height:26
    },
    containerLoading: {
      flex:1, 
      justifyContent:"center"  ,
      alignItems:"center"
    }, 
    statusArea: {   
        flexDirection:"row",
        justifyContent:'space-evenly',  
        alignItems:"center", 
        height:70
    },
    nextArea: {
        fontSize:17,
        fontWeight:'bold',  
        marginRight:20,  
        margin:10,
        color:"#4350c6",  
        flexDirection:'row'
    }, 
    nextText: {
        fontSize:15,
        fontWeight:'bold',
        textAlign:'right', 
        marginRight:5,
        color:"#4350c6",
    },
    loadingText: {
        fontSize:15,
        fontWeight:"bold",
        margin:20
    },
    container: {
        flex:1,
        justifyContent:"center", 
        margin:5,
    },
    line: {
        height: 130,
        backgroundColor:"#fff",
        flexDirection:"row",
        margin:10,
        borderRadius:5,
        shadowColor: "#777",
        shadowOffset: {
            width:8,
            height: 4,
        },
        opacity:2,
        shadowOpacity: 0.30,
        shadowRadius: 10.65,
    },
    areaAnuncio: {
        flexDirection:'column',  
    },
    imagemAnimal: { 
        borderTopLeftRadius:3,   
        borderBottomLeftRadius:3,   
        alignItems:"center",
        justifyContent:"center",  
        flex:1,
        height:'auto',
        width:'auto'
    },
    avatar: {
        width:60,
        height:60,
        borderRadius:5, 
        margin:10,
        alignSelf:"center"
    },
    info: {
        flexDirection:"column",
        justifyContent:"flex-start",
        margin:7, 
         
    },
    info_t : {
        alignItems:"flex-end", 
        marginRight:5
    },
    name: {
        fontSize:15,
        color:"#4350c6"
    },
    nome:{
        fontSize:16,
        fontWeight:"bold",
        color:'#4350c6'
    }, 
    userArea: {
        flex:1,
        justifyContent:"center",
        flexDirection:"row",   
        alignItems:"center"
    },   
    
})