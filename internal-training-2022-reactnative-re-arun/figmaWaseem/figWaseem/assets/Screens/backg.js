import {StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('window');
const BackGr = () => {
  return (
    <SafeAreaView>
    <View>
      <View>
        <Image source={require('../Images/GradRectangle.png')} />
        <View style={styles.container}></View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default BackGr;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    width:width*1,
    height: height*1,
    left: 0,
    top: 125,
    backgroundColor:'white',
    borderRadius: 30,
  },
});
