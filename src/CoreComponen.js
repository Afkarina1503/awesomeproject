import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,TextInput,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class CoreComponen extends Component {
    constructor(props) {
        super(props);
        this.state={
            Username:"",
            Email:''
        };
        
    }
  render() {
    return (
        <View style={styles.bg1}>
 
        <View >
            <Text style={styles.text2}>React-Native</Text>
            <View>  
            <Image 
            style={styles.img}
            source={require('../src/image/logo.png')} />
            </View>    
        
        <View style ={styles.container}>   
         
        <TextInput 
            onChangeText ={(Username)=>this.setState({Username})}
            value={this.state.Username}
            placeholder='Username' 
            style={styles.formInput}
        />
        <TextInput 
            onChangeText={(Email)=>this.setState({Email})}
            value={this.state.Email}
            placeholder='Your Email' 
            style={styles.formInput}
        />   
         <TouchableOpacity 
         onPress={() => this.props.navigation.navigate('Welcome',{Username:'WULANAFKARINA',Email:"wulanafkarinaa@gmail.com"})}
         style ={styles.button}  > 
            <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
    bg1:{
     flex:1,
     backgroundColor:'#f8a1d1',
    },
    container:{
     paddingHorizontal:18,
     marginVertical:20,


    },
    formInput:{
        height:50,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:18,
        padding:15,
        marginTop:15,
        
    },
    button:{
        height:50,
        backgroundColor:'dodgerblue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18,
        marginVertical:15,
    },
    text1:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    text2:{
        fontSize:40,
        color:'black',
        paddingTop:50,
        textAlign:'center',
    },
    img:{
        width:200,
        height:200,
        marginHorizontal:80,
        
    },

});
