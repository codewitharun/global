import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const PayRewards = (props) => {

    const renderPrice = () => {
        return (
            <View style={styles.priceView}>
                <Image source={ImagePath.PRICE} resizeMode="contain" style={{ height: height * 0.28, width: width * 0.8, }} />
                <ImageBackground source={ImagePath.TOTALEARNED} resizeMode="contain" style={{ paddingHorizontal: 8, alignItems: "center", flexDirection: "row", justifyContent: "space-between", height: height * 0.09, width: width * 0.65 }} >
                    <View style={styles.earnedTxtView}>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>Total Earned</Text>
                    </View>
                    <View style={styles.earnedTxtView}>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>$75.00 USD</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderDetails = () => {
        return (
            <View style={styles.detailView}>
                <View style={styles.GiftView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Gift Cards</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>$0.00</Text>
                </View>
                <View style={styles.GiftView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Send</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>$0.00</Text>
                </View>
                <View style={styles.GiftView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Checkout</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>$0.00</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Pay Rewards"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingVertical: 10, height: height * 1, width: width * 1, }}>
                {renderPrice()}
                {renderDetails()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default PayRewards

const styles = StyleSheet.create({
    priceView: {
        height: height * 0.4,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    detailView: {
        height: height * 0.12,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    GiftView: {
        height: height * 0.08,
        width: width * 0.25,
        // backgroundColor: "pink",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    earnedTxtView: {
        height: height * 0.05,
        width: width * 0.27,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
})