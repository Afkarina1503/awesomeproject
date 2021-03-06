import React,{useState } from 'react'
import { View, Text,StyleSheet,FlatList,Image } from 'react-native';

export default function CoreComponen3() {
    const initialData= [
        {
            id:1,
            Email:'george.bluth@reqres.in',
            name:'George Bluth',
            Jam:'08.15',
            avatar:'https://reqres.in/img/faces/1-image.jpg',
        },
        {
            id:2,
            Email:'janet.weaver@reqres.in',
            name:'Janet Weaver',
            Jam:'04.15',
            avatar:'https://reqres.in/img/faces/2-image.jpg',
        },
        {
            id:3,
            Email:'emma.wong@reqres.in',
            name:'Emma Wong',
            Jam:'15.26',
            avatar:'https://reqres.in/img/faces/3-image.jpg',
        },
        {
            id:4,
            Email:'eve.holt@reqres.in',
            name:'Eva Hold',
            Jam:'15.00',
            avatar:'https://reqres.in/img/faces/4-image.jpg',
        },
        {
            id:5,
            Email:'charles.morris@reqres.in',
            name:'Charles Morris',
            Jam:'21.34',
            avatar:'https://reqres.in/img/faces/5-image.jpg',
        },
        {
            id:6,
            Email:'tracey.ramos@reqres.in',
            name:'Tracey Ramos',
            Jam:'12.00',
            avatar:'https://reqres.in/img/faces/6-image.jpg',
        },
        
    ];

    const[ Siswa]= useState(initialData)

    const renderItem =({item}) => {
        return(
            <View style={styles.item}>
            <Image source={{uri:item.avatar}}style={styles.Image}/>
            <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.Jam}>{item.Jam}</Text>
            </View>
            <Text style={styles.Email}>{item.Email}</Text>
            </View>
            </View>
    
        )
    }

    return (  
        <View  style={styles.container}>
            <FlatList
                data={Siswa}
                renderItem ={renderItem}
            />
            
       
        <View>
        <Image 
            style={styles.img}
            source={require('../src/image/plus.png')} />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#fbc8d4'
    },
    item:{
        padding:10,
        flexDirection:'row',
        fontWeight:'bold',
        fontSize:18,
        color:'#61b15a',
    },
    Image:{
        width:50,
        height:50,
        resizeMode:'cover',
        borderRadius:50/2,
        marginRight:10
    },
    name:{
        fontSize:20,

    },
    Email:{
        paddingHorizontal:10,
        fontSize:15,
        fontStyle:'italic',
    },
    Jam:{
        paddingTop:14,
    },
    img:{
        width:50,
        height:50,
        marginHorizontal:270,
        marginVertical:40,
    }

})
