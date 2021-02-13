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
                        size="large" color="#777"  
                    /> 
                </View> 
            )      
        }
        return(
            <View style={styles.container}>
                <View style={styles.statusArea}>
                    <View style={styles.userArea}> 
                        <Text style={styles.nome}>Jeferson da Silva</Text> 
                    </View>  
                    <TouchableOpacity style={styles.nextArea}  >   
                       <Text style={styles.nextText}>Meu perfil</Text>  
                       <Ionicons name="ellipsis-horizontal-outline" size={22} color={'#fff'}  /> 
                     </TouchableOpacity>
                     
                </View>   
               <FlatList   
                        data={this.state.data}
                        renderItem={({item,  index, separators })=> (
                            <TouchableOpacity  onPress = { () => this.props.navigation.navigate('PagAnuncio')  } > 
                                <View   style={styles.line}>  
                                
                                    <Image style={styles.imagemAnimal} source={require('../img/mascara2.jpg')}></Image>

                                    <View style={styles.areaAnuncio}>  
                                        <View style={styles.info}> 
                                            <Text style={{fontWeight:'bold', color:'#777', fontSize:17}}>Mascara com Proteção Tripla</Text>
                                            <Text style={styles.classe}>
                                                <Text style={{fontWeight:"bold" ,fontSize:15}}>
                                                    <Ionicons name={"return-down-forward-outline"} size={20}/> 
                                                    Nivel de Proteção:
                                                 </Text> 
                                                Alto
                                            </Text>  

                                            <Text style={styles.classe}>
                                                <Text style={{fontWeight:"bold" ,fontSize:15}}>
                                                        <Ionicons name={"return-down-forward-outline"}   size={20}/> 
                                                        Especificidade:
                                                </Text> 
                                                    Descartavel
                                            </Text> 
                                            <Text style={styles.classe}>
                                                <Text style={{fontWeight:"bold" ,fontSize:15}}>
                                                    <Ionicons name={"return-down-forward-outline"} size={20}/> 
                                                    Classe do Produto:  
                                                 </Text>  
                                                N
                                            </Text>   
                                            
                                        </View> 
                                        <View style={styles.info_t}>
                                             <Ionicons name="caret-forward-outline" size={25} color={"#4350c6"}/>
                                            
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
        justifyContent:'space-between',  
        backgroundColor:'#4350c6',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
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
        fontFamily:'OpenSans_700Bold',
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
        shadowColor: "#4350c6",
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

    classe: {
        fontSize:16,
        color:"#7c7c7c",
        fontFamily:'OpenSans_600SemiBold'
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
        marginRight:5,
        flex:1,
    },
    name: {
        fontSize:15,
        color:"#fff", 
    },
    nome:{  
        fontSize:16,
        margin:20,
        fontWeight:"bold",
        fontFamily:'OpenSans_700Bold',
        color:'#fff'
    }, 
    userArea: {   
    },   
    
})