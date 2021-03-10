import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,TextInput,Image} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class CoreComponen2 extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
  render() {
    return (
        <View>
            <Text style={styles.text2}>Welcome React-Native</Text>
            <View>  
            <Image 
            style={styles.img}
            source={require('../src/image/gambar1.png')} />
            </View>
        <View style={styles.textku}>
            <Text style ={styles.text4}>Username Anda:</Text>
            <Text style ={styles.text5}>Password anda:</Text>
            </View>
            
        <View style ={styles.container}>   
        <TouchableOpacity style ={styles.button}
        onPress={() => this.props.navigation.navigate('satu')}>
             
            <Text style={styles.text1}>Back</Text>
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
    button:{
        height:50,
        width:200,
        backgroundColor:'dodgerblue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18,
        marginVertical:25,
        marginHorizontal:65,
    },
    text1:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    text2:{
        fontSize:30,
        color:'black',
        paddingTop:50,
        textAlign:'center',
    },
    img:{
        width:200,
        height:200,
        marginHorizontal:80,
        
    },
    textku:{
        fontSize:60,
        alignItems:'center',
        fontWeight: 'bold',
    },
    text4:{
        fontSize:30,
        fontWeight:'bold',
        color:'blue',

    },
    text5:{
        fontWeight:'bold',
        fontSize:30,
        color:'blue',
        marginVertical:30,
    }

});
