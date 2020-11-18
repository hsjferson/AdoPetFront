import React, { Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image , ActivityIndicator, Button} from 'react-native';   
 
 
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
                <View style={styles.botaoArea}>
                    <View style={styles.userArea}>
                        <Text style={styles.email}>Usuario:</Text>
                        <Text>Jeferson da Silva</Text>
                    </View> 
                    <View >  
                         <Button title="Perfil" onPress = { () => this.props.navigation.navigate('Perfil')  }></Button> 
                    
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
    botaoArea: {  
        flexDirection:"row",
        justifyContent:"center", 
        backgroundColor:"#4ecca3", 
        textAlign:"center",
        height:70
    },
    userArea: {
        flex:1,
        justifyContent:"center",
        flexDirection:"row",   
        backgroundColor:"#92e5c9", 
        alignItems:"center"
    }
})