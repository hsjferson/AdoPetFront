import React, { Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image , ActivityIndicator, Button,TouchableOpacity} from 'react-native';   
 
 
export default class Anuncios extends Component {


    //loading
    constructor(props) {
        super(props);
        this.state ={ 
                loading: true,
                date:[]
        }
    }
    //acessando dados da API
    loadUsers =() => { 
        fetch("https://randomuser.me/api/?results=10")
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
                        <Text style={styles.email}>Usuario:</Text>
                        <Text>Jeferson da Silva</Text>
                    </View> 
                    <View style={styles.BtnGeral}> 
                         <TouchableOpacity  onPress = { () => this.props.navigation.navigate('Perfil')  } style={styles.button}><Text style={styles.totuloBotao}>Meu Perfil</Text></TouchableOpacity> 
                    
                    </View> 
                     
                </View> 
                
               <FlatList 
                        data={this.state.data}
                        renderItem={({item,  index, separators })=> (

                            <View style={styles.line}> 
                                <Image source={{uri:item.picture.thumbnail}} style={styles.avatar} />

                                <View style={styles.info}>
                                    <Text style={styles.email}>{item.email}</Text>
                                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                                </View>                            
                            </View>
                        )}
                        keyExtractor={item => item.email} // item que não ira repitir (n repetir)
                />     
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
    loadingText: {
        fontSize:15,
        fontWeight:"bold",
        margin:20
    },
    container: {
        flex:1,
        justifyContent:"center"
    },
    line: {
        height: 100,
        backgroundColor:"#fff",
        flexDirection:"row",
        margin:10,
        borderRadius:10
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
        margin:20,
         
    },
    name: {
        fontSize:15
    },
    email:{
        fontSize:14,
        fontWeight:"bold"
    },
    statusArea: {  
        flexDirection:"row",
        justifyContent:"center",  
        textAlign:"center",
        height:70
    },
    userArea: {
        flex:1,
        justifyContent:"center",
        flexDirection:"row",   
        alignItems:"center"
    },
    BtnGeral: {   
        alignItems:"center",
        justifyContent:"center",  
        padding:5
    },
    button:{ 
        height:40,
        backgroundColor:"#475F94",
        borderRadius:30,
        width:140, 
        justifyContent:"center",
        alignItems:"center",
    },
    totuloBotao:{  
        fontWeight:"bold",

        color:"#fff"
    }
    
})