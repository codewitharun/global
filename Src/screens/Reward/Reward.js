import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const Reward = (props) => {

    const renderDetails = () => {
        return (
            <View style={styles.rewarderView}>
                <ImageBackground source={ImagePath.QUESTIONBACKING} resizeMode="contain" style={{ height: height * 0.1, width: width * 0.72, flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={styles.rewardTxtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Rewarder LvL 1 : 4%</Text>
                    </View>
                    <TouchableOpacity style={styles.questionView}>
                        <ImageBackground source={ImagePath.QUESTIONBACK} resizeMode="contain" style={{ height: height * 0.055, width: width * 0.12, justifyContent: "center", alignItems: "center" }} >
                            <Image source={ImagePath.QUESTIONMARK} resizeMode="contain" style={{ height: 20, width: 20 }} />
                        </ImageBackground>
                    </TouchableOpacity>
                </ImageBackground>
                <TouchableOpacity>
                    <Image source={ImagePath.ADDINGBUTN} resizeMode="contain" style={{ height: height * 0.08, width: width * 0.14 }} />
                </TouchableOpacity>
            </View>
        )
    }

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

    const renderLike = () => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate("ReferralBonus")} style={styles.likeView}>
                <ImageBackground source={ImagePath.LIKEBACK} resizeMode="contain" style={{ height: height * 0.23, width: width * 0.8 }} >
                    <View style={styles.referralView}>
                        <View style={styles.refralTxtView}>
                            <Text style={{ color: "#FFFFFF", fontSize: height / 55, fontFamily: FONTS.PoppinsBold }}>Referral Bonus</Text>
                            <View style={styles.refralTxtInsideView}>
                                <Text style={{ color: "#FFFFFF", fontSize: height / 70, fontFamily: FONTS.PoppinsRegular }}>Earn $25.00 USD for</Text>
                                <Text style={{ color: "#FFFFFF", fontSize: height / 70, fontFamily: FONTS.PoppinsRegular }}>every friend you refer</Text>
                            </View>
                        </View>
                        <View style={styles.likeImgView}>
                            <Image source={ImagePath.LIKE} resizeMode="contain" style={{ height: height * 0.1, width: width * 0.35 }} />
                        </View>
                    </View>
                    <View style={styles.detailView}>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>$75.00 USD</Text>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>See Details</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderPay = () => {
        return (
            <View style={styles.payView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("PayRewards")} style={styles.mainPayView}>
                    <View style={styles.rewardsInside}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Pay Rewards</Text>
                        <Text style={{ color: "#1774FF", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>$0.00</Text>
                    </View>
                    <View style={styles.payTxt}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Earn $25.00 USD cashback every</Text>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>time you Base Reward Pay</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const renderCashback = () => {
        return (
            <View style={styles.cashbackView}>
                <View style={styles.cashView}>
                    <View style={styles.rewardsInside}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Cash Cashback</Text>
                        <Text style={{ color: "#1774FF", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>$0.00</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                Drawer={true}
                onDrawerPress={() => props.navigation.openDrawer()}
                HeaderTitle={true}
                Title="Reward"
                rightIcon={true}
                RightIconPress={() => props.navigation.navigate("Pay")}
                RightIconTwoPress={() => props.navigation.navigate("HelpCenter")}
                RightIconTwo={true}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingVertical: 10, height: height * 1, width: width * 1, }}>
                {renderDetails()}
                {renderPrice()}
                {renderLike()}
                {renderPay()}
                {renderCashback()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Reward

const styles = StyleSheet.create({
    rewarderView: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceView: {
        height: height * 0.4,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    likeView: {
        height: height * 0.3,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    payView: {
        height: height * 0.2,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    cashbackView: {
        height: height * 0.25,
        marginTop: height * 0.04,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    mainPayView: {
        height: height * 0.13,
        width: width * 0.8,
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        borderRadius: 10,
        // flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    cashView: {
        height: height * 0.08,
        width: width * 0.8,
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        borderRadius: 10,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    referralView: {
        height: height * 0.13,
        width: width * 0.7,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    detailView: {
        height: height * 0.08,
        width: width * 0.7,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rewardsInside: {
        height: height * 0.05,
        width: width * 0.73,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rewardTxtView: {
        height: height * 0.1,
        width: width * 0.45,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    earnedTxtView: {
        height: height * 0.05,
        width: width * 0.27,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    refralTxtView: {
        height: height * 0.1,
        width: width * 0.45,
        // backgroundColor: "green",
        justifyContent: "space-between",
        // alignItems: "center"
    },
    refralTxtInsideView: {
        height: height * 0.05,
        width: width * 0.5,
        // backgroundColor: "pink",
        justifyContent: "space-between",
        // alignItems: "center"
    },
    payTxt: {
        height: height * 0.08,
        width: width * 0.73,
        // backgroundColor: "pink",
        justifyContent: "center",
        // alignItems: "center"
    },
    likeImgView: {
        height: height * 0.11,
        width: width * 0.25,
        // backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    questionView: {
        height: height * 0.1,
        width: width * 0.17,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
})