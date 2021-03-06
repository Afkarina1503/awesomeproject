import React, { Component } from 'react';
import{
    StyleSheet,
    text,
    View,
    ImageBackground
}from 'react-native';

import bgImage from '../src/image/backround.jpg'

export default class  Example extends Component{
    render(){
        return(
            <ImageBackground source {bgImage} style ={Styles.backraoundContainer}>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backraoundContainer:{
        flex: 1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center',
    },

})