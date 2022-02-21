import React from 'react'
import {View,Text, ImageBackground,Image, TouchableOpacity } from "react-native"
import { NavigationContainer } from '@react-navigation/native';



export default function Home({navigation}) {
    return(
      
          <View style={{justifyContent:"center",
                     alignItems:"center",}}>
                <ImageBackground source={require("../assets/homephoto.jpg")}   style={{
                    width:700, 
                    height:610,
                    
                    opacity: 1.0,
                    transform:[{rotateY:"45deg"}],
                    
                  }}>
                 <View style={{flex:2,justifyContent:"center", alignItems:"center", backgroundcolor: "white"}}>
                  
              </View>
              <View style={{flex:2, justifyContent:"center",  alignItems:"center",   backgroundcolor: "white"}}>
              <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Login")
            }}
            activeOpacity={0,8}
            style={{
                backgroundColor:"white",
                padding:10,
                paddingHorizontal:60,
                flexDirection:"row",
                alignItems:"center",
                borderRadius:30,
                marginTop:20,
                 }}>
                   <Text style={{fontSize:25, color:'red',marginLeft:15}}>Get Started</Text>
                 </TouchableOpacity>
              </View>
              
              </ImageBackground>
          </View>
    )

    };