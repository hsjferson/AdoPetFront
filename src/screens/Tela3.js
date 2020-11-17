import React, { Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image , ActivityIndicator} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createContainer } from '@react-navigation/native';


export default class Tela3 extends Component {
 
     
    
    constructor(props) {
        super(props);
        this.state ={ 
                loading: true,
                date:[]
        }
 
    }
    loadUsers =() => {

        fetch("https://randomuser.me/api/?results=10")
            .then( res => res.json() )
            .then( res => {
                this.setState ({
                    data: res.results || [] ,//array vazio
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

               <FlatList 
                    data={this.state.data}
                    renderItem={({item,  index, separators })=> (

                        <View style={styles.line}> 
                            <Image 
                                source={{uri:item.picture.thumbnail}}  
                                style={styles.avatar}
                            />

                            <View style={styles.info}>
                                <Text style={styles.email}>{item.email}</Text>
                                <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                            </View>                            
                        </View>
                    )}
                    keyExtractor={item => item.email}
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
        margin:20,
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
    }
})