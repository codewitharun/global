import { StyleSheet, SafeAreaView, Platform, Dimensions, ImageBackground, Image, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from "../../utils/FontFamily"
import { ImagePath } from '../../utils/ImagePath';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import CountDown from 'react-native-countdown-component';
import CodeInput from 'react-native-code-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("window");

const Login = (props) => {
    const [check, setCheck] = useState(true)
    const [count, setCount] = useState(true)


    const renderImage = () => {
        return (
            <View style={{ alignItems: "center", height: height * 0.35, width: width * 1 }}>
                <Image source={ImagePath.FRAME} resizeMode="contain" style={{ height: 150, width: 150, }} />
                <ImageBackground source={ImagePath.FRAMEMASK} resizeMode="contain" style={{ height: 210, width: 210, }}>
                    <View style={{ justifyContent: "flex-end", height: height * 0.1, width: width * 0.9, alignSelf: "center", }}>
                        <Text style={{ fontFamily: FONTS.PoppinsBold, fontSize: height / 35, color: "#2C2C4E" }}>Login</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderMiddle = () => {
        return (
            <View style={{ backgroundColor: "white", height: height * 0.32, width: width * 0.9, alignSelf: "center" }}>
                <View style={{ height: height * 0.04, width: width * 0.9, alignSelf: "center" }}>
                    <Text style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 50, color: "#2C2C4E" }}>E-mail</Text>
                </View>
                <View style={{ justifyContent: "flex-end", height: height * 0.08, width: width * 0.9, alignSelf: "center" }}>
                    <CustomInput
                    />
                </View>
                <View style={{ marginTop: height * 0.02, height: height * 0.04, width: width * 0.9, alignSelf: "center" }}>
                    <Text style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 50, color: "#2C2C4E" }}>Verify OTP</Text>
                </View>
                <View style={{
                    height: height * 0.075,
                    width: width * 0.9,
                    flexDirection: "row",
                    // backgroundColor: "red",
                    borderWidth: 1,
                    borderColor: "#E1E1E1",
                    borderRadius: 10,
                    alignItems: "center"
                }}>
                    <TextInput style={{
                        height: height * 0.08,
                        width: width * 0.7,
                        // backgroundColor: "pink",
                        color: "black",
                        marginLeft: width * 0.03
                    }} />
                    <View style={{
                        height: height * 0.05, width: width * 0.13, borderRadius: 10,
                        // backgroundColor: "#FFFFFF", 
                        // backgroundColor: "red",
                        justifyContent: "center", alignItems: "center"
                    }}>
                        {
                            count ?
                                <TouchableOpacity onPress={() => setCount(false)} style={{ height: height * 0.05, width: width * 0.15, borderRadius: 10, backgroundColor: "#58BD7D", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: FONTS.PoppinsMedium, fontSize: height / 90, color: "#FFFFFF" }}>Get Code</Text>
                                </TouchableOpacity>
                                :
                                <CountDown
                                    until={60}
                                    size={12}
                                    onFinish={() => {
                                        setCount(true)
                                    }}
                                    digitStyle={{ backgroundColor: "white" }}
                                    digitTxtStyle={{ color: "black", fontSize: height / 50 }}
                                    separatorStyle={{ color: "black", fontSize: height / 50 }}
                                    timeToShow={["M", "S"]}
                                    timeLabels={{ m: "", s: "" }}
                                    showSeparator
                                />
                        }
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: "white", height: height * 0.04, width: width * 0.9, alignSelf: "center", justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#1774FF", fontSize: height / 60 }}>Forgot password?</Text>
                </TouchableOpacity>
            </View >
        )
    }

    const renderSeperation = () => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "white", height: height * 0.06, width: width * 0.9, alignSelf: "center" }}>
                <View style={{ backgroundColor: "#E1E1E1", height: height * 0.002, width: width * 0.38 }}>

                </View>
                <View style={{ justifyContent: "center", alignItems: "center", height: height * 0.05, width: width * 0.1 }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 60, color: "#2C2C4E" }}>OR</Text>
                </View>
                <View style={{ backgroundColor: "#E1E1E1", height: height * 0.002, width: width * 0.38 }}>

                </View>
            </View>
        )
    }

    const renderSignIn = () => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "white", height: height * 0.06, width: width * 0.9, alignSelf: "center" }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "flex-end", height: height * 0.1, width: width * 0.34 }}>
                    <Image source={ImagePath.GOOGLE} resizeMode="contain" style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: height * 0.05, width: width * 0.06 }}>
                    <Image source={ImagePath.FB} resizeMode="contain" style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "flex-start", height: height * 0.1, width: width * 0.34 }}>
                    <Image source={ImagePath.APPLE} resizeMode="contain" style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderRegister = () => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: height * 0.08, width: width * 0.9, alignSelf: "center" }}>
                <View style={{ justifyContent: "center", alignItems: "flex-end", height: height * 0.1, width: width * 0.5 }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 55, color: "#B6B6B6" }}>Not a Member? </Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate("CreateNew_Account")} style={{ justifyContent: "center", alignItems: "flex-start", height: height * 0.05, width: width * 0.4 }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#1774FF", fontSize: height / 55 }}>Register now</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView enableOnAndroid={true}
                enableAutomaticScroll={true} contentContainerStyle={{ flexGrow: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ height: height * 1, width: width * 1, backgroundColor: "white" }}>
                    {renderImage()}
                    {renderMiddle()}
                    <View style={{ justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                        <CustomButton
                            title="Continue"
                            ButtonPress={() => props.navigation.navigate("Home")}
                        />
                    </View>
                    {renderSeperation()}
                    {renderSignIn()}
                    {renderRegister()}
                </ScrollView>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({})