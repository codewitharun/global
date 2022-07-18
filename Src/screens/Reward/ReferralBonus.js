import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const DATA = [
    {
        name: "Flipkart",
        image: ImagePath.REFERALLISTBACK
    },
    {
        name: "Amazon",
        image: ImagePath.REFERALLISTBACK
    },
    {
        name: "Apple",
        image: ImagePath.REFERALLISTBACK
    },
    {
        name: "Flipkart",
        image: ImagePath.REFERALLISTBACK
    },
    {
        name: "Amazon",
        image: ImagePath.REFERALLISTBACK
    },
    {
        name: "Apple",
        image: ImagePath.REFERALLISTBACK
    },
]

const ReferralBonus = (props) => {

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

    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <ImageBackground source={ImagePath.REWARDBACK} resizeMode="stretch" style={{ paddingVertical: 10, justifyContent: "space-between", alignItems: "center", height: 125, width: 110 }}>
                    <View style={{ height: height * 0.08, width: width * 0.2, justifyContent: "center", alignItems: "center" }}>
                        <ImageBackground source={item.image} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: height * 0.055, width: width * 0.27 }}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>$75.00</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ justifyContent: "space-between", height: height * 0.045, width: width * 0.25, alignItems: "center", }}>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 80, fontFamily: FONTS.PoppinsSemiBold }}>Cash Reward</Text>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 120, fontFamily: FONTS.PoppinsSemiBold }}>Jane Cooper Signed up</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderMyrewardsList = () => {
        return (
            <View style={styles.ListView}>
                <View style={styles.rewardsInside}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>My Rewards</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>3 Friends</Text>
                </View>
                <FlatList
                    data={DATA}
                    horizontal={true}
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.05 }}
                />
            </View>
        )
    }

    const renderRefer = () => {
        return (
            <View style={styles.referView}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 35, fontFamily: FONTS.PoppinsSemiBold }}>Refer & Get $25 USD</Text>
                <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>Unlimited Bonus for you and your friends</Text>
            </View>
        )
    }

    const renderReferalCode = () => {
        return (
            <View style={styles.codeView}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Your Referral Code</Text>
                <ImageBackground source={ImagePath.COPYBACK} resizeMode="contain" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, height: height * 0.07, width: width * 0.9 }} >
                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>hghs655674</Text>
                    <TouchableOpacity>
                        <Image source={ImagePath.COPY} resizeMode="contain" style={{ height: height * 0.04, width: width * 0.06 }} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

    const renderShare = () => {
        return (
            <View style={styles.shareView}>
                <View style={styles.inviteView}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={ImagePath.SHARE} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.06 }} />
                        <Text style={{ marginLeft: width * 0.03, color: "#1774FF", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Share invite link</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image source={ImagePath.INVITE} resizeMode="contain" style={{ height: height * 0.08, width: width * 0.9 }} />
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
                Title="Referral Bonus"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingVertical: 10, height: height * 1, width: width * 1, }}>
                {renderPrice()}
                {renderMyrewardsList()}
                {renderRefer()}
                {renderReferalCode()}
                {renderShare()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReferralBonus

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
    ListView: {
        height: height * 0.27,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    referView: {
        height: height * 0.1,
        marginTop: height * 0.015,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    codeView: {
        height: height * 0.13,
        marginTop: height * 0.02,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    shareView: {
        height: height * 0.2,
        // marginTop: height * 0.02,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        // justifyContent: "center",
        alignItems: "flex-start"
    },
    inviteView: {
        height: height * 0.065,
        // marginTop: height * 0.02,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    earnedTxtView: {
        height: height * 0.05,
        width: width * 0.27,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    rewardsInside: {
        height: height * 0.05,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listView: {
        height: height * 0.2,
        width: width * 0.34,
        paddingVertical: 10,
        // backgroundColor: "pink",
        marginTop: height * 0.005
    },
})