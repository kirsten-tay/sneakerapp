import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function Login({navigation}) {
    return(
        <View style={{
            flex:1,
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

                  </ImageBackground>

            </View>
    )
        }            


