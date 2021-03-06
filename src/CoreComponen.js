import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,TextInput,Image} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
  render() {
    return (
        <View>
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
        <TouchableOpacity style ={styles.button}>
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
        backgroundColor:'#cfdac8',
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
        marginHorizontal:70,
        
    },

});
