import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const TransactionSuccess = (props) => {

    const renderDetail = () => {
        return (
            <View style={styles.detailview}>
                <Image source={ImagePath.SUCCESS} resizeMode="contain" style={{ marginTop: height * 0.08, height: height * 0.25, width: width * 1 }} />
                <Text style={{ marginTop: height * 0.02, color: "#2C2C4E", fontSize: height / 28, fontFamily: FONTS.PoppinsSemiBold }}>1586.01 BTC</Text>
                <Text style={{ marginTop: height * 0.01, color: "#2C2C4E", fontSize: height / 48, fontFamily: FONTS.PoppinsSemiBold }}>$4086.00 USD</Text>
                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 63, fontFamily: FONTS.PoppinsSemiBold }}>You have successfully transferred the amount to</Text>
                <Text style={{ marginTop: height * 0.001, color: "#2C2C4E", fontSize: height / 63, fontFamily: FONTS.PoppinsSemiBold }}>1BvBMSEYstWetqTFn5Au4m4GFg7xJaN</Text>
            </View>
        )
    }

    const renderIntruct = () => {
        return (
            <View style={styles.instrucView}>
                <Text style={{ color: "#99989B", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>Amet minim mollit non deserunt ullamco est sit aliqua</Text>
                <Text style={{ marginTop: height * 0.001, color: "#99989B", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>dolor do amet sint. Velit officia consequat duis</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                cross={true}
                onCrossPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Transaction Successful"
            />
            {renderDetail()}
            {renderIntruct()}

            <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                <CustomButton
                    title="Done"
                    ButtonPress={() => props.navigation.navigate("Wallet")}
                />
            </View>
        </SafeAreaView>
    )
}

export default TransactionSuccess

const styles = StyleSheet.create({
    detailview: {
        height: height * 0.55,
        width: width * 1,
        // backgroundColor: "pink",
        // justifyContent: "center",
        alignItems: "center"
    },
    instrucView: {
        height: height * 0.06,
        width: width * 1,
        // backgroundColor: "blue",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute", bottom: 80,
    },
})