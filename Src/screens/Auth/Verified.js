import { StyleSheet, SafeAreaView, Platform, Dimensions, ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from "../../utils/FontFamily"
import { ImagePath } from '../../utils/ImagePath';
import CustomButton from '../../components/Buttons/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("window");

const Verified = (props) => {

    const renderImage = () => {
        return (
            <View style={{ alignItems: "center", height: height * 1, width: width * 1 }}>
                <Image source={ImagePath.CONFRM} resizeMode="contain" style={{ height: 250, width: 250, }} />
                <ImageBackground source={ImagePath.CONFRMMASK} resizeMode="contain" style={{ height: 250, width: 250, }}>
                    <View style={{ alignItems: "center", justifyContent: "space-between", height: height * 0.3, width: width * 0.9, alignSelf: "center", }}>
                        <Text style={{ marginTop: height * 0.15, fontFamily: FONTS.PoppinsRegular, fontSize: height / 50, color: "#2C2C4E" }}>+1 254 **** ***</Text>
                        <View style={{ alignItems: "center", height: height * 0.1, width: width * 0.9, alignSelf: "center", }}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 40, color: "#2C2C4E" }}>Your Phone Number is</Text>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 40, color: "#2C2C4E" }}>Confirmed</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ position: "absolute", bottom: 40, height: height * 0.13, width: width * 0.9, alignItems: "center", justifyContent: "flex-end", alignSelf: "center", }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 55, color: "#2C2C4E" }}>Tap anywhere to continue</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => props.navigation.navigate("RegistrationSuccess")} style={{ height: height * 1, width: width * 1, backgroundColor: "white" }}>
                {renderImage()}
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Verified

const styles = StyleSheet.create({})