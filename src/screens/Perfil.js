import React, { Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image , ActivityIndicator, Button, Alert} from 'react-native';   
 
 
export default class Perfil extends Component {


    //loading
    constructor(props) {
        super(props);
        this.state ={ 
                loading: true,
                date:[]
        }
    }
    //função dos botoes 
    alterarBotao() {
        Alert.alert("Add a função alterar aqui")
    }
    cadastroAnimalBotao() {
        Alert.alert("Add a função cadastrar aqui")
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
        return(
            <View style={styles.container}> 
                <View style={styles.cadastroArea}>
                        <Text style={styles.title}>Dados de Usuario</Text> 
                        <View style={styles.form}>   
                            <View style={styles.areaAvatar}>
                                 <Image style={styles.formAvatar} source={require('../img/user.png')}></Image>
                             </View>  
                             <View style={styles.areaInfo}>  
                                 <Text style={styles.infoOptions}>Nome: Jeferson da Silva</Text> 
                                 <Text style={styles.infoOptions}>Email: jferson9wd@gmail.com</Text>
                                 <Text style={styles.infoOptions}>Telefone: 00 0000 0000</Text>
                                 <Text style={styles.infoOptions}>Senha: *********</Text>
                                
                                <View style={styles.BtnGeral}>
                                     <Button title="Alterar" onPress = { this.alterarBotao  }></Button>
                                </View>   
                             </View>    
                        </View> 
                </View> 
                <View style={styles.anunciosArea}> 
                    <Text style={styles.title}>Meus Anuncios:</Text> 
                    <View style={styles.BtnGeral}> 
                          <Button title="+ Cadastre seu animal" onPress = { () => this.props.navigation.navigate('CadastroAnimal')  }></Button> 
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
            </View>  
            
        )
    } 
}
 
const styles = StyleSheet.create({
    icone: {
        width:26,
        height:26
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
    title: {
        fontWeight:"bold", 
    },  
    name: {
        fontSize:15
    },  
    BtnGeral: { 
        justifyContent:"center",
        flexDirection:"row",   
        backgroundColor:"#92e5c9", 
        alignItems:"center"
    },
    cadastroArea: {
        height:200,  
        padding:10,  
    },
    anunciosArea:{ 
        maxHeight:450,
        margin:10,
        padding:10, 
    },
    form: {
        flex:1, 
        backgroundColor:"#FFF",
        height:100, 
        flexDirection:"row",
        borderRadius:10,
        padding:20
    },  
    infoOptions: {
        fontFamily:"Arial",
        fontSize:17,
        textAlign:"left", 
          
    }, 
    formAvatar: {
        width:50,
        height:50, 
        margin:15,
    },
})