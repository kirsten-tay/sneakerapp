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
                           <AntDesign name="google" size={24} color="rgb(256,100,10)"></AntDesign>
                   <Text style={{fontSize:20,fontWeight:"bold", color:'red', marginLeft:15}}>Login with Gmail</Text>
                     </TouchableOpacity>

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
                           <AntDesign name="apple1" size={24} color="black"/>
                   <Text style={{fontSize:20,fontWeight:"bold",color:"red", marginLeft:15}}>Login with Apple</Text>
                     </TouchableOpacity>
                  </View>
                  </ImageBackground>

            </View>
    )
        }            


