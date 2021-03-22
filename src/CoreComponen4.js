import React,{useState } from 'react'
import { View, Text,StyleSheet,FlatList,Image } from 'react-native';

export default function CoreComponen3() {
    const initialData= [
        {
            id:1,
            Email:'george.bluth@reqres.in',
            name:'George Bluth',
            avatar:'https://reqres.in/img/faces/1-image.jpg',
        },
        {
            id:2,
            Email:'janet.weaver@reqres.in',
            name:'Janet Weaver',
            avatar:'https://reqres.in/img/faces/2-image.jpg',
        },
        {
            id:3,
            Email:'emma.wong@reqres.in',
            name:'Emma Wong',
            avatar:'https://reqres.in/img/faces/3-image.jpg',
        },
        {
            id:4,
            Email:'eve.holt@reqres.in',
            name:'Eva Hold',
            avatar:'https://reqres.in/img/faces/4-image.jpg',
        },
        {
            id:5,
            Email:'charles.morris@reqres.in',
            name:'Charles Morris',
            avatar:'https://reqres.in/img/faces/5-image.jpg',
        },
        {
            id:6,
            Email:'tracey.ramos@reqres.in',
            name:'Tracey Ramos',
            avatar:'https://reqres.in/img/faces/6-image.jpg',
        },
        
    ];

    const[ Siswa]= useState(initialData)

    const renderItem =({item}) => {
        return(
            <View style={styles.item}>
            <Image source={{uri:item.avatar}}style={styles.Image}/>
            <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
            <View>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.Email}>{item.Email}</Text>
            </View>
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
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#ffffff'
    },
    item:{
        padding:10,
        flexDirection:'row',
        fontWeight:'bold',
        fontSize:23,
    },
    Image:{
        width:40,
        height:40,
        resizeMode:'cover',
        borderRadius:40/2,
        marginRight:10
    },
    name:{
        fontSize:20,

    },
    Email:{
        paddingHorizontal:10,
        fontSize:18,
        fontStyle:'italic',
    }

})
