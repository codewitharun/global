import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import WalletHeader from '../../components/Header/WalletHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const DATA = [
    {
        name: "Flipkart",
        image: ImagePath.FLIPKART
    },
    {
        name: "Amazon",
        image: ImagePath.AMAZON
    },
    {
        name: "Apple",
        image: ImagePath.APPLE
    },
    {
        name: "Flipkart",
        image: ImagePath.FLIPKART
    },
    {
        name: "Amazon",
        image: ImagePath.AMAZON
    },
    {
        name: "Apple",
        image: ImagePath.APPLE
    },
]

const DATAALL = [
    {
        name: "Microsoft",
        image: ImagePath.WINDOWS
    },
    {
        name: "Meta",
        image: ImagePath.META
    },
    {
        name: "MSN",
        image: ImagePath.MSN
    },
    {
        name: "Microsoft",
        image: ImagePath.WINDOWS
    },
    {
        name: "Meta",
        image: ImagePath.META
    },
    {
        name: "MSN",
        image: ImagePath.MSN
    },
]

const GiftCards = (props) => {

    const renderBalance = () => {
        return (
            <View style={styles.balncHeader}>
                <View style={styles.blcView}>
                    <View style={styles.spendView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Spend Crypto with</Text>
                    </View>
                    <View style={styles.giftView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 21, fontFamily: FONTS.PoppinsMedium }}>Gift Card</Text>
                    </View>
                    <View style={styles.cashbackView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Up to <Text style={{ color: "#1F6CFD", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>10% cashback</Text></Text>
                    </View>
                    <View style={styles.shopView}>
                        <TouchableOpacity>
                            <ImageBackground source={ImagePath.SHOP} resizeMode="contain" style={{ height: 30, width: 88, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#FFFFFF", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>Shop Now</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.dollarView}>
                    <Image source={ImagePath.GIFTCCARDS} resizeMode="cover" style={{ height: 130, width: 120 }} />
                </View>
            </View>
        )
    }

    const renderStats = () => {
        return (
            <View style={styles.statsView}>
                <View style={styles.numberView}>
                    <View style={styles.statsTxtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 25, fontFamily: FONTS.PoppinsRegular }}>200</Text>
                    </View>
                    <View style={styles.statsCountryView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 25, fontFamily: FONTS.PoppinsRegular }}>30+</Text>
                    </View>
                    <View style={styles.statsShopsView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 25, fontFamily: FONTS.PoppinsRegular }}>30000</Text>
                    </View>
                </View>
                <View style={styles.txtView}>
                    <View style={styles.txtBrandView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Brands</Text>
                    </View>
                    <View style={styles.txtcountryView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Countries</Text>
                    </View>
                    <View style={styles.txtshopView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Shops</Text>
                    </View>
                </View>
            </View>
        )
    }

    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <ImageBackground source={ImagePath.BRANDBACK} resizeMode="stretch" style={{ alignItems: "center", justifyContent: "center", height: height * 0.16, width: width * 0.31 }}>
                    <View style={{ backgroundColor: "#FFFFFF", height: height * 0.1, width: width * 0.2, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                        <Image source={item.image} resizeMode="contain" style={{ backgroundColor: "#FFFFFF", height: height * 0.07, width: width * 0.2 }} />
                    </View>
                    <View style={{ backgroundColor: "#FFFFFF", height: height * 0.05, width: width * 0.2, backgroundColor: "white", alignItems: "flex-start" }}>
                        <Text style={{ backgroundColor: "#FFFFFF", marginTop: height * 0.02, color: "#2C2C4E", fontSize: height / 58, fontFamily: FONTS.PoppinsSemiBold }}>{item.name}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderDataAll = ({ item }) => {
        return (
            <View style={styles.listView}>
                <ImageBackground source={ImagePath.BRANDBACK} resizeMode="stretch" style={{ alignItems: "center", justifyContent: "center", height: height * 0.16, width: width * 0.31 }}>
                    <View style={{ height: height * 0.1, width: width * 0.2, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                        <Image source={item.image} resizeMode="contain" style={{ height: height * 0.07, width: width * 0.2 }} />
                    </View>
                    <View style={{ height: height * 0.05, width: width * 0.2, backgroundColor: "white", alignItems: "flex-start" }}>
                        <Text style={{ marginTop: height * 0.02, color: "#2C2C4E", fontSize: height / 58, fontFamily: FONTS.PoppinsSemiBold }}>{item.name}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View style={styles.listParent}>
                <Text style={{ marginTop: height * 0.02, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Popular Brands</Text>
                <FlatList
                    data={DATA}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.05 }}
                />
            </View>
        )
    }

    const renderListAll = () => {
        return (
            <View style={styles.listParent}>
                <View style={{ alignItems: "center", height: height * 0.05, width: width * 0.9, alignSelf: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>All Brands</Text>
                    <TouchableOpacity>
                        <ImageBackground source={ImagePath.CATEGORY} resizeMode="contain" style={{ paddingHorizontal: 8, justifyContent: "space-between", flexDirection: "row", height: 40, width: 85, alignItems: "center" }}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 90, fontFamily: FONTS.PoppinsSemiBold }}>All Category</Text>
                            <Image source={ImagePath.DOWNARROW} resizeMode="contain" style={{ height: 10, width: 10 }} />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={DATAALL}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    renderItem={(item) => renderDataAll(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.05 }}
                />
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
            <WalletHeader
                backIcon={true}
                HeaderTitle={true}
                Title="Gift Cards"
                onBackPress={() => props.navigation.goBack()}
            />
            {renderBalance()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.22 }}>
                {renderStats()}
                <View style={styles.border}></View>
                {renderList()}
                {renderListAll()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default GiftCards

const styles = StyleSheet.create({
    balncHeader: {
        height: height * 0.25,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        position: "absolute",
        top: 80,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        paddingLeft: 15
    },
    border: {
        height: height * 0.002,
        width: width * 1,
        backgroundColor: "lightgrey",
        // marginTop: height * 0.01
    },
    blcView: {
        height: height * 0.25,
        width: width * 0.5,
        // backgroundColor: "red",
        // justifyContent: "center"
    },
    listView: {
        height: height * 0.2,
        width: width * 0.34,
        paddingVertical: 10,
        // backgroundColor: "pink",
        marginTop: height * 0.005
    },
    dollarView: {
        height: height * 0.25,
        width: width * 0.35,
        // marginLeft: 30,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    spendView: {
        height: height * 0.06,
        width: width * 0.5,
        // backgroundColor: "pink",
        justifyContent: "flex-end",
    },
    statsTxtView: {
        height: height * 0.06,
        width: width * 0.25,
        // backgroundColor: "pink",
        // justifyContent: "flex-end",
    },
    statsCountryView: {
        height: height * 0.06,
        width: width * 0.25,
        // backgroundColor: "pink",
        alignItems: "center"
        // justifyContent: "flex-end",
    },
    listParent: {
        height: height * 0.27,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    statsShopsView: {
        height: height * 0.06,
        width: width * 0.25,
        // backgroundColor: "grey",
        alignItems: "center"
        // justifyContent: "flex-end",
    },
    txtBrandView: {
        height: height * 0.04,
        width: width * 0.25,
        // backgroundColor: "pink",
        // justifyContent: "flex-end",
    },
    txtcountryView: {
        height: height * 0.04,
        width: width * 0.25,
        // backgroundColor: "grey",
        alignItems: "center"
        // justifyContent: "flex-end",
    },
    txtshopView: {
        height: height * 0.04,
        width: width * 0.25,
        // backgroundColor: "blue",
        alignItems: "center"
        // justifyContent: "flex-end",
    },
    giftView: {
        height: height * 0.08,
        width: width * 0.5,
        // backgroundColor: "red",
        justifyContent: "center",
    },
    cashbackView: {
        height: height * 0.05,
        width: width * 0.5,
        // backgroundColor: "blue",
        justifyContent: "flex-start",
    },
    shopView: {
        height: height * 0.05,
        width: width * 0.5,
        // backgroundColor: "green",
        justifyContent: "center",
    },
    statsView: {
        height: height * 0.12,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.02
    },
    numberView: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "grey",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txtView: {
        height: height * 0.04,
        width: width * 0.9,
        // backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})