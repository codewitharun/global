import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image } from '@rneui/themed';
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height, width } = Dimensions.get("screen")

const Splash = (props) => {

    useEffect(() => {
        setTimeout(async () => {
            const Token = await AsyncStorage.getItem("token");
            if (Token === null) {
                props.navigation.navigate("Login")
            } else {
                props.navigation.navigate("DashBoard")
            }
        }, 3000)
    }, []);

    return (
        <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
            <Image source={ImagePath.APP_LOGO} style={styles.appLogo} resizeMode="contain" />
            <Image source={ImagePath.APP_NAME} style={styles.appName} resizeMode="contain" />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    appLogo: {
        height: height * 0.25,
        width: width * 0.6
    },
    appName: {
        height: height * 0.07,
        width: width * 0.6
    }
})