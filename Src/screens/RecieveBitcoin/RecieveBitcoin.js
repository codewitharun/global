import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const RecieveBitcoin = (props) => {

    const renderQr = () => {
        return (
            <View style={styles.qrView}>
                <Image source={ImagePath.QR} resizeMode="cover" style={{ height: 240, width: 310 }} />
                <Text style={{ marginTop: height * 0.01, color: "#B3B4B7", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>Bitcoin Wallet Address</Text>
                <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</Text>
                <TouchableOpacity style={styles.copyButton}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Copy Wallet Address</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                HeaderTitle={true}
                Title="Recieve Bitcoin"
                onBackPress={() => props.navigation.goBack()}
            />
            {renderQr()}
            <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                <CustomButton
                    title="I Want to Receive Bitcoin"
                    ButtonPress={() => props.navigation.navigate("Home")}
                />
            </View>
        </SafeAreaView>
    )
}

export default RecieveBitcoin

const styles = StyleSheet.create({
    qrView: {
        height: height * 0.57,
        width: width * 1,
        // backgroundColor: "pink",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: height * 0.06
    },
    copyButton: {
        height: height * 0.07,
        width: width * 0.6,
        // backgroundColor: "pink",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E7E7EB",
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02,

    }
})