import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
import CodeInput from 'react-native-code-input';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const AddCardOtp = (props) => {
    const [isDisable, setDisable] = useState(true)

    const renderImage = () => {
        return (
            <View style={{ alignItems: "center", justifyContent: "center", height: height * 0.3, width: width * 1 }}>
                <Image source={ImagePath.CARDOTPIMG} resizeMode="contain" style={{ height: 200, width: 180, }} />
            </View>
        )
    }

    const renderMiddle = () => {
        return (
            <View style={{ height: height * 0.25, justifyContent: "space-between", width: width * 0.9, alignSelf: "center", }}>
                <View style={{ height: height * 0.06, width: width * 0.9, alignSelf: "center", }}>
                    <Text style={{ fontFamily: FONTS.PoppinsMedium, fontSize: height / 60, color: "#2C2C4E" }}>A Verification Code has been sent to {'\n'}+1 254 **** ***</Text>
                </View>
                <View style={{ height: height * 0.15, width: width * 0.9, alignSelf: "center", }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 45, color: "#2C2C4E" }}>Verification Code</Text>
                    <View style={styles.codeInputView}>
                        <CodeInput
                            secureTextEntry
                            space={10}
                            codeInputStyle={{
                                backgroundColor: "white",
                                color: "black",
                                fontSize: Platform.OS === "ios" ? height / 20 : height / 28,
                                height: Platform.OS === "ios" ? height * 0.07 : height * 0.07,
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

    const renderResend = () => {
        return (
            <View style={styles.resendView}>
                <Text style={{ fontFamily: FONTS.PoppinsMedium, fontSize: height / 55, color: "#B0B0B0" }}>Did'nt receive OTP code?</Text>
                <TouchableOpacity>
                    <Text style={{ fontFamily: FONTS.PoppinsMedium, fontSize: height / 55, color: "#1774FF" }}>Resend Code</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Add Credit or Debit Card"
            />
            <KeyboardAwareScrollView style={{ marginTop: height * 0.03, }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 10, height: height * 0.9, width: width * 1, }}>
                    {renderImage()}
                    {renderMiddle()}
                    {renderResend()}
                </ScrollView>
            </KeyboardAwareScrollView>
            <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                <CustomButton
                    title="Verify & Proceed"
                    ButtonPress={() => props.navigation.navigate("AddedSuccesfully")}
                />
            </View>
        </SafeAreaView>
    )
}

export default AddCardOtp

const styles = StyleSheet.create({
    codeInputView: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    resendView: {
        height: height * 0.07,
        width: width * 0.9,
        marginTop: height * 0.02,
        // backgroundColor: "blue",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
})