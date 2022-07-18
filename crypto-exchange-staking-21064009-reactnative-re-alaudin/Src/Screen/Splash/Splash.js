import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Dimensions, Image, View, ImageBackground, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FONTS } from '../../Utils/FontFamily';
//import { IMAGEPATH } from '../../Icon/Icon';
const { height, width } = Dimensions.get("screen");

const Splash = (props) => {

    useEffect(() => {
        setTimeout(function () {
            //   alert('This is Splash Screen');
            props.navigation.navigate('Login')
        }, 3000);
    }, []);

    return (
        <View style={styles.main}>

            <View style={styles.Image}>
                <TouchableOpacity  >
                    <Text style={styles.SPLASH_LOGO}>E-BULLS</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    backgroundStyles: {
        height: height * 1,
        width: width * 1
    },
    main: {
        height: height * 1,
        width: width * 1,
        // backgroundColor: 'UIColor(red: 0.961, green: 0.961, blue: 0.961, alpha: 1)'
        backgroundColor: "#141414",
        justifyContent: "center"
    },
    Image: {
        height: height * 0.3,
        width: width * 0.65,
        //  backgroundColor: 'pink',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // marginHorizontal: 10,
        marginVertical: 280,
        position: "absolute"
        // resizeMode:"contain"

    },
    SPLASH_LOGO: {
        //resizeMode:'contain',
        fontSize: height * 0.06,
        //  position:'absolute',
        color: "#EAB73B",
        fontFamily: FONTS.PoppinsBold
    }
});