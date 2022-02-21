import React from "react";
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';



export default function Login({navigation}) {
    return(
        <View style={{
            justifyContent:"center", 
            alignItems:"center", 
            backgroundcolor: "white"
            }}>
            <ImageBackground source={require("../assets/homephoto.jpg")}   style={{
                    width:700, 
                    height:610, 
                    borderRadius:20, 
                  
                    opacity: 0.70,
                    transform:[{rotateY:"45deg"}], 
                  }}>
                      <View style={{flex:2}}/>
                      <View style={{flex:2}}>

                   <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Cart")
            }}
            activeOpacity={0,8}
            style={{
                backgroundColor:"#e3e3e3",
                padding:10,
                paddingHorizontal:60,
                flexDirection:"row",
                alignItems:"center",
                borderRadius:10,
                marginTop:20,
                 }}>
                     <AntDesign name="google" size={24} color="rgb(256,100,10)"></AntDesign>
                   <Text style={{fontSize:17, marginLeft:15}}>Login with Gmail</Text>
                 </TouchableOpacity>
                 </View>
                  </ImageBackground>

            </View>
    )
        }            


