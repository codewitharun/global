import { StyleSheet, Text, Alert,View,SafeAreaView,Dimensions,Image,TouchableOpacity, BackHandler } from 'react-native'
import React, { useEffect } from 'react'

const {height,width} = Dimensions.get("screen");

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Onboard');
        },3000);
        
        // BackHandler.addEventListener("hardwareBackPress",bac);
        

      
      
    });

  
    
  return (
    <SafeAreaView>
      <View style={styles.MainView}>
        <TouchableOpacity style={styles.TrTouchable} onPress={() => navigation.navigate("Home")}>
          <Image source={require('../screens/M2testimages/Splash.png')} style={styles.TrImg} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Splash

const styles = StyleSheet.create({
  MainView:{
      height:height*1,
      width:width*1,
    //   backgroundColor:"cyan",
      justifyContent:"center",
      alignItems:"center",
  },
  TrTouchable:{
      height:height*0.7,
      width:width*0.85,
      justifyContent:"center",
      alignItems:"center",
    //   backgroundColor:"red"
  },
  TrImg:{
      height:height*1,
      width:width*1,
  }
});
