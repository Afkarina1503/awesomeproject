import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,TextInput,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class CoreComponen extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
  render() {
    return (
        <View  >
            <Text style={styles.text2}>React-Native</Text>
            <View>  
            <Image 
            style={styles.img}
            source={require('../src/image/logo.png')} />
            </View>    
        
        <View style ={styles.container}>   
         
        <TextInput 
            placeholder='Username' 
            style={styles.formInput}
        />
        <TextInput 
            placeholder='Your Email' 
            style={styles.formInput}
        />   
         <TouchableOpacity 
         onPress={() => this.props.navigation.navigate('Welcome')}
         style ={styles.button}  > 
            <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
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
