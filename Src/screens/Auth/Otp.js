import { StyleSheet, SafeAreaView, Platform, Dimensions, ImageBackground, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from "../../utils/FontFamily"
import { ImagePath } from '../../utils/ImagePath';
import CustomButton from '../../components/Buttons/CustomButton';
import CodeInput from 'react-native-code-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen");

const Otp = (props) => {
    const [isDisable, setDisable] = useState(true)

    const renderImage = () => {
        return (
            <View style={{ alignItems: "center", height: height * 0.4, width: width * 1 }}>
                <Image source={ImagePath.OTP} resizeMode="contain" style={{ height: 180, width: 180, }} />
                <ImageBackground source={ImagePath.OTPMASK} resizeMode="contain" style={{ height: 240, width: 240, }}>
                    <View style={{ justifyContent: "flex-end", height: height * 0.1, width: width * 0.9, alignSelf: "center", }}>
                        <Text style={{ fontFamily: FONTS.PoppinsBold, fontSize: height / 35, color: "#2C2C4E" }}>Sign Up</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderMiddle = () => {
        return (
            <View style={{ justifyContent: "space-between", height: height * 0.25, width: width * 0.9, alignSelf: "center", }}>
                <View style={{ height: height * 0.08, width: width * 0.9, alignSelf: "center", }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 55, color: "#2C2C4E" }}>A Verification Code has been sent to {'\n'}+1 254 **** ***</Text>
                </View>
                <View style={{ height: height * 0.15, width: width * 0.9, alignSelf: "center", }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 55, color: "#2C2C4E" }}>Verification Code</Text>
                    <View style={styles.codeInputView}>
                        <CodeInput
                            secureTextEntry
                            space={10}
                            codeInputStyle={{
                                backgroundColor: "white",
                                color: "black",
                                fontSize: Platform.OS === "ios" ? height / 20 : height / 28,
                                height: Platform.OS === "ios" ? height * 0.07 : height * 0.06,
                                borderRadius: height * 0.013,
                                width: width * 0.12,
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "lightgrey",
                                fontWeight: "bold",
                            }}
                            // ref="codeInputRef2"
                            keyboardType="numeric"
                            codeLength={6}
                            borderType="border-circle"
                            autoFocus={false}
                            onFulfill={(code) => {
                                setDisable(false)
                                // setOtpCode(code), SignUpVerifyApi(code);
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={{ height: height * 1, width: width * 1, backgroundColor: "white" }}>
                    {renderImage()}
                    {renderMiddle()}
                    <View style={{ position: "absolute", bottom: 35, justifyContent: "center", alignItems: "center", height: height * 0.15, width: width * 1 }}>
                        <CustomButton
                            title="Continue"
                            ButtonPress={() => props.navigation.navigate("Verified")}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Otp

const styles = StyleSheet.create({
    codeInputView: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
})