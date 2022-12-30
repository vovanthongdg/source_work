import React, { useEffect } from 'react';
import {Image, SafeAreaView, View, Text} from 'react-native';
import logo from '../assets/logo.png';
import * as Progress from 'react-native-progress';

export default function SplashScreen({navigation,route}) {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home')
        },2000)
    },[])
    return (
        <SafeAreaView
            style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}
        >
            <Image source={logo} style={{width:250,height:250}}/>
            <View
                style={{
                    width:'100%',
                    flexDirection:'column',
                    position:"absolute",
                    bottom:30,
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
            <Progress.Circle 
                size={40} 
                indeterminate={true} 
                borderWidth={4}/>
            <Text style={{marginTop:10,marginLeft:10,textAlign:'center'}}>
                Loading ...
            </Text>
            </View>
        </SafeAreaView>
    )
}