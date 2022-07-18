import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import WalletHeader from '../../components/Header/WalletHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import { SwiperFlatList } from "react-native-swiper-flatlist";
import NewHeader from '../../components/Header/NewHeader';
const { height, width } = Dimensions.get("screen");


const slides = [
    {
        key: 1,
        image: ImagePath.HAT,
        heading: "Crypto Concepts Decoded for All!",
        paraheading: "Watch Fincocktail clear doubts about",
        subheading: "cryptos one question at a time"
    },
    {
        key: 2,
        image: ImagePath.HAT,
        heading: "Crypto Concepts Decoded for All!",
        paraheading: "Watch Fincocktail clear doubts about",
        subheading: "cryptos one question at a time"
    },
    {
        key: 3,
        image: ImagePath.HAT,
        heading: "Crypto Concepts Decoded for All!",
        paraheading: "Watch Fincocktail clear doubts about",
        subheading: "cryptos one question at a time"
    },
];

const DATA = [
    {
        key: 1,
        status: "Send",
        amt: "100.00",
        image: ImagePath.SENDICON,
        date: "December 28, 2021"
    },
    {
        key: 2,
        status: "Recieve",
        amt: "100.00",
        image: ImagePath.RECIEVEICON,
        date: "December 28, 2021"
    },
    {
        key: 1,
        status: "Send",
        amt: "100.00",
        image: ImagePath.SENDICON,
        date: "December 28, 2021"
    },
    {
        key: 2,
        status: "Recieve",
        amt: "100.00",
        image: ImagePath.RECIEVEICON,
        date: "December 28, 2021"
    },
    {
        key: 1,
        status: "Send",
        amt: "100.00",
        image: ImagePath.SENDICON,
        date: "December 28, 2021"
    },
    {
        key: 2,
        status: "Recieve",
        amt: "100.00",
        image: ImagePath.RECIEVEICON,
        date: "December 28, 2021"
    },

]


const Pay = (props) => {

    const renderBtn = () => {
        return (
            <View style={styles.btnView}>
                <View style={styles.btn}>
                    <View style={{ alignItems: "center", height: height * 0.12, width: width * 0.2, }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("GiftCards")} style={styles.giftBtn}>
                            <ImageBackground resizeMode="stretch" source={ImagePath.PAYBACK} style={{ justifyContent: "center", alignItems: "center", height: 70, width: 70 }}>
                                <Image source={ImagePath.GIFT} resizeMode="stretch" style={{ height: height * 0.035, width: width * 0.1 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.titleContain}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Gift Cards</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", height: height * 0.12, width: width * 0.2, }}>
                        <TouchableOpacity style={styles.giftBtn}>
                            <ImageBackground resizeMode="stretch" source={ImagePath.PAYBACK} style={{ justifyContent: "center", alignItems: "center", height: 70, width: 70 }}>
                                <Image source={ImagePath.AIR} resizeMode="stretch" style={{ height: height * 0.045, width: width * 0.06 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.titleContain}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Airtime</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", height: height * 0.12, width: width * 0.2, }}>
                        <TouchableOpacity style={styles.giftBtn}>
                            <ImageBackground resizeMode="stretch" source={ImagePath.PAYBACK} style={{ justifyContent: "center", alignItems: "center", height: 70, width: 70 }}>
                                <Image source={ImagePath.SCAN} resizeMode="stretch" style={{ height: height * 0.045, width: width * 0.08 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.titleContain}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Scan</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", height: height * 0.15, width: width * 0.2, }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("ReferralBonus")} style={styles.giftBtn}>
                            <ImageBackground resizeMode="stretch" source={ImagePath.PAYBACK} style={{ justifyContent: "center", alignItems: "center", height: 70, width: 70 }}>
                                <Image source={ImagePath.SENDBTNICON} resizeMode="stretch" style={{ height: height * 0.045, width: width * 0.08 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.titleContain}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Send</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderReward = () => {
        return (
            <View style={styles.rewardView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("PayRewards")} style={styles.reward}>
                    <View style={styles.img}>
                        <Image source={ImagePath.BASE} resizeMode="contain" style={{ height: 35, width: 35 }} />
                    </View>
                    <View style={styles.pay}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Pay Rewards</Text>
                    </View>
                    <View style={styles.amt}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>$0.00</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.swiperHeader}>
                <View style={styles.headingView}>
                    <Text style={{ color: "#FFFFFF", fontSize: height / 50, fontFamily: FONTS.PoppinsMedium }}>Crypto Concepts Decoded for All!</Text>
                </View>
                <View style={styles.secondHeading}>
                    <View style={styles.subPartone}>
                        <Text style={{ marginTop: height * 0.01, color: "#FFFFFF", fontSize: height / 70, fontFamily: FONTS.PoppinsRegular }}>Watch Fincocktail clear doubts about{'\n'}cryptos one question at a time</Text>
                        <ImageBackground source={ImagePath.WATCH} resizeMode="stretch" style={{ height: 30, width: 110, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Watch Now</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.subParttwo}>
                        <ImageBackground source={ImagePath.HATBACK} resizeMode="stretch" style={{
                            height: height * 0.09,
                            width: width * 0.28,
                            flexDirection: "row",
                            alignItems: "flex-end"
                        }} >
                            <View style={{
                                height: height * 0.09,
                                width: width * 0.05,
                                // backgroundColor: "red",
                                justifyContent: "flex-end",
                                alignItems: "flex-start"
                            }}>
                                <ImageBackground source={ImagePath.BUTTONBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: 12, width: 12, bottom: 5, position: "absolute", right: 12 }} >
                                    <Image source={ImagePath.PLAY} resizeMode="contain" style={{ height: 5, width: 5 }} />
                                </ImageBackground>
                            </View>
                            <View style={{
                                height: height * 0.09,
                                width: width * 0.2,
                                // backgroundColor: "red",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image source={ImagePath.HAT} resizeMode="contain" style={{ height: 50, width: 50, }} />
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </View>
        );
    };


    const renderSwiper = () => {
        return (
            <View style={styles.swiperHeader}>
                <ImageBackground source={ImagePath.ADBACK} style={{ height: "100%", width: "100%" }} resizeMode="stretch">
                    <SwiperFlatList
                        paginationStyle={{
                            width: width * 0.2,
                            height: height * 0.01,
                            // backgroundColor: "cyan",
                            alignSelf: "center",
                            // marginTop: height * 0.1,
                            justifyContent: "center",
                        }}
                        paginationStyleItemActive={{
                            width: width * 0.06,
                            height: height * 0.005,
                            backgroundColor: "#FFFFFF",
                            alignSelf: "center"
                        }}
                        paginationStyleItem={{
                            width: width * 0.02,
                            height: height * 0.009,
                            borderRadius: 20,
                        }}
                        autoplay
                        autoplayDelay={2}
                        autoplayLoop
                        index={2}
                        data={slides}
                        showPagination={true}
                        paginationActiveColor="blue"
                        renderItem={_renderItem}
                    ></SwiperFlatList>
                </ImageBackground>
            </View>
        )
    }

    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <View style={styles.border}></View>
                <TouchableOpacity style={styles.mainContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.coin}>
                            <Image source={item.image} resizeMode="contain" style={{ height: 45, width: 45 }} />
                        </View>
                        <View style={styles.coinText}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>{item.status}</Text>
                            <Text style={{ color: "#858C94", fontSize: height / 90, fontFamily: FONTS.PoppinsRegular }}>{item.date}</Text>
                        </View>
                    </View>
                    <View style={styles.amtView}>
                        <View style={styles.amtInsideView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>BTC {item.amt}</Text>
                        </View>
                        <View style={styles.arrowView}>
                            <Image source={ImagePath.FORWARD} resizeMode="contain" style={{ height: 12, width: 12 }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View style={styles.listParent}>
                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Transaction</Text>
                <FlatList
                    data={DATA}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.05 }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
            <NewHeader
                HeaderTitle={true}
                Title="Pay"
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
            />
            {renderBtn()}
            {renderReward()}
            <ScrollView style={{ marginTop: height * 0.008, }}>
                {renderSwiper()}
                {renderList()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Pay

const styles = StyleSheet.create({
    btnView: {
        height: height * 0.15,
        width: width * 1,
        // backgroundColor: "red",
        position: "absolute",
        top: 90
    },
    btn: {
        height: height * 0.12,
        width: width * 0.92,
        // backgroundColor: "yellow",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 25
    },
    headingView: {
        height: height * 0.03,
        width: width * 0.8,
        alignSelf: "center",
        // backgroundColor: "red"
    },
    listParent: {
        height: height * 0.65,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    itemView: {
        height: height * 0.09,
        width: width * 0.4,
        // backgroundColor: "lightgreen",
        flexDirection: "row",
        alignItems: "center"
    },
    coin: {
        height: height * 0.1,
        width: width * 0.15,
        // backgroundColor: "yellow",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    coinText: {
        height: height * 0.06,
        width: width * 0.25,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    amtView: {
        height: height * 0.09,
        width: width * 0.4,
        // backgroundColor: "black",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    amtInsideView: {
        height: height * 0.09,
        width: width * 0.25,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    arrowView: {
        height: height * 0.09,
        width: width * 0.15,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    listView: {
        height: height * 0.1,
        width: width * 0.9,
        paddingVertical: 10,
        // backgroundColor: "pink"
    },
    border: {
        height: height * 0.002,
        width: width * 0.9,
        backgroundColor: "lightgrey",
        // marginTop: height * 0.01
    },
    mainContainer: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    secondHeading: {
        height: height * 0.12,
        width: width * 0.8,
        // backgroundColor: "pink",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    subPartone: {
        height: height * 0.12,
        width: width * 0.55,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "space-between",

    },
    subParttwo: {
        height: height * 0.09,
        width: width * 0.28,
        // backgroundColor: "blue",
        alignSelf: "center",
        marginTop: height * 0.03
    },
    titleView: {
        height: height * 0.03,
        width: width * 0.92,
        // alignSelf: "center",
        // backgroundColor: "yellow",
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 10
    },
    giftBtn: {
        height: height * 0.09,
        width: width * 0.2,
        // backgroundColor: "green"
    },
    titleContain: {
        height: height * 0.03,
        width: width * 0.2,
        alignSelf: "center",
        // backgroundColor: "pink",
        alignItems: "center"
    },
    rewardView: {
        height: height * 0.1,
        width: width * 1,
        // backgroundColor: "red",
        marginTop: height * 0.12,
        justifyContent: "flex-end"
    },
    reward: {
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        flexDirection: "row"
    },
    img: {
        height: height * 0.08,
        width: width * 0.2,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    pay: {
        height: height * 0.08,
        width: width * 0.5,
        // backgroundColor: "blue",
        justifyContent: "center"
    },
    amt: {
        height: height * 0.08,
        width: width * 0.2,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    swiperHeader: {
        height: height * 0.2,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "grey",
        borderRadius: 15,
        marginTop: height * 0.03
    }
})