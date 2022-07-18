import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("window");

const CustomButton = (props) => {
    const { title, btnMainView, ButtonPress, disabled } = props;
    return (
        <TouchableOpacity
            onPress={ButtonPress}
            disabled={disabled}
        >
            <ImageBackground source={ImagePath.BUTTON} resizeMode="contain" style={{ justifyContent: "center", alignSelf: "center", alignItems: "center", height: height * 0.08, width: width * 0.9 }} >
                <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 45, color: "#FFFFFF" }}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({})