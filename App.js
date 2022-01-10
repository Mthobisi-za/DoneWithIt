import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image, Button } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

 
export default function App() {
  return (
 <ImageBackground 
 style={css.imgBg}
 source={require('./assets/stockbg.jpg')}>
   <View style={css.logoHolder}>
      <Image 
      width={20}
      height={20}
      source={require('./assets/logo.png')}/>
      <Text style={css.text}>Online Logo Shop</Text>
   </View>
   <View style={css.footer}>
    < Button title="Sign Up" onPress={()=> console.log('user wants to signup')}/>
    < Button title="Skip" onPress={()=> console.log('user wants to skip and get a logo')}/>
   </View>
 </ImageBackground>
  );
}

const css = StyleSheet.create({
  imgBg:{
    width: 360,
    height: 640
  },
  logoHolder:{
    alignItems: "center",
    backgroundColor: '#ffeee6',
    width:'100%'
  },
  text:{
    fontSize:20,
    fontWeight:"900"
  },
  footer:{
    flex: 0.2,
    top: 350,
    display: 'flex'
  }
})