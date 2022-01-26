import React from 'react'
import {View,Text, ImageBackground,Image, TouchableOpacity } from "react-native"


export default function Home() {
    return(
      
          <View >
                <ImageBackground source={require("../assets/homephoto.jpg")}   style={{
                    width:700, 
                    height:610, 
                    borderRadius:20, 
                    backgroundColor: "#000000c0",
                    lineHeight: 84,
                    opacity: 2.0,
                    transform:[{rotateY:"45deg"}],
                    
                  }}>
                 <View style={{flex:4,justifyContent:"center", alignItems:"center", backgroundcolor: "white"}}>
                 <Image source={require("../assets/nikelogo.jpg")}
                        style={{
                              width:350,
                              height:200,
                              backgroundColor: "#000000c0",

                               justifyContent:'center',
                        }}
                   />
                  
              </View>
              <View style={{flex:2, justifyContent:"center",  alignItems:"center",   backgroundcolor: "white"}}>
              <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Cart")
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