import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Adress = () => {
  return (
    <SafeAreaView>
     <ImageBackground source={require('../Images/GradRectangle.png')} resizeMode='cover' style={{height:167, width:428}}  >
<View>
    <View>
       <Image source={require('../Images/Adress/Ellipse.png')}/>
       <Image source={require('../Images/Adress/Vector.png')} />
    </View>
    <View>
            <Text style={{position:'absolute', fontWeight:'700', lineHeight:30, textAlign:'center', color:''}}>
                Add Address
            </Text>
        </View>
</View>
     </ImageBackground>
    </SafeAreaView>
  );
};

export default Adress;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 1,
    height: height * 1,
    left: 0,
    top: 125,
    backgroundColor: 'white',
    borderRadius: 30,
  },
});
