import { StyleSheet, SafeAreaView, Platform, Dimensions, ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from "../../utils/FontFamily"
import { ImagePath } from '../../utils/ImagePath';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");

const RegistrationSuccess = (props) => {
    const [check, setCheck] = useState(true)

    const renderHeader = () => {
        return (
            <View style={{ flexDirection: "row", height: height * 0.08, width: width * 0.9, alignSelf: "center" }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ justifyContent: "flex-end", height: height * 0.08, width: width * 0.15 }}>
                    <Image source={ImagePath.BACKARROW} resizeMode="contain" style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: "flex-end", alignItems: "center", height: height * 0.08, width: width * 0.6 }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#2C2C4E", fontSize: height / 45 }}>Sign up</Text>
                </View>
                <View style={{ height: height * 0.08, width: width * 0.15 }}>

                </View>
            </View>
        )
    }

    const renderImage = () => {
        return (
            <View style={{ backgroundColor: "white", alignItems: "center", height: height * 0.25, width: width * 1, }}>
                <Image source={ImagePath.THANKS} resizeMode="contain" style={{ height: height * 0.25, width: width * 0.8, }} />
            </View>
        )
    }

    const renderMiddle = () => {
        return (
            <View style={{
                backgroundColor: "white",
                height: height * 0.38,
                width: width * 0.9, alignSelf: "center",
            }}>
                <View style={{
                    backgroundColor: "white",
                    height: height * 0.07,
                    justifyContent: "center",
                    width: width * 0.9, alignSelf: "center",
                }}>
                    <Text style={{ fontFamily: FONTS.PoppinsMedium, color: "#2C2C4E", fontSize: height / 33 }}>Thanks for joining us!</Text>
                </View>
                <View style={{
                    backgroundColor: "white",
                    height: height * 0.18,
                    width: width * 0.9, alignSelf: "center",
                }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, lineHeight: height * 0.032, color: "#2C2C4E", fontSize: height / 54 }}>We’d love to send you exclusive offers and{'\n'}new updates’ via email or in-app{'\n'}messages. we’ll never sell your infomation{'\n'}to third parties. You can opt out/withdraw{'\n'}your consent at any time.</Text>
                </View>
                <View style={{
                    backgroundColor: "white",
                    height: height * 0.09,
                    width: width * 0.9, alignSelf: "center",
                }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#2C2C4E", lineHeight: height * 0.032, fontSize: height / 54 }}>Here’s our  <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#1774FF", fontSize: height / 54 }}>Privacy Notice</Text> for further{'\n'}information about how we use and protect{'\n'}personal data.</Text>
                </View>
            </View>
        )
    }

    const renderCheck = () => {
        return (
            <View style={{ marginTop: height * 0.03, justifyContent: "space-between", flexDirection: "row", alignItems: "flex-end", height: height * 0.06, width: width * 0.9, alignSelf: "center" }}>
                <TouchableOpacity onPress={() => setCheck(check ? false : true)} style={{ justifyContent: "center", height: height * 0.06, width: width * 0.1, alignSelf: "center" }}>
                    <Image source={check ? ImagePath.CHECK : ImagePath.UNCHECK} resizeMode="contain" style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: "center", height: height * 0.06, width: width * 0.8, alignSelf: "center" }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#2C2C4E", fontSize: height / 58 }}>Yes, I'd like to receive exclusive offers and updates from <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#1774FF", fontSize: height / 62 }}>Base Reward</Text></Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={{ height: height * 1, width: width * 1, backgroundColor: "white" }}>
                {renderHeader()}
                {renderImage()}
                {renderMiddle()}
                <View style={{ position: "absolute", bottom: 25, justifyContent: "center", alignItems: "center", height: height * 0.25, width: width * 1 }}>
                    {renderCheck()}
                    <CustomButton
                        title="Continue"
                        disabled={check}
                        ButtonPress={() => props.navigation.navigate("VerifyIdentity")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegistrationSuccess

const styles = StyleSheet.create({})