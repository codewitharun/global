import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import WalletHeader from '../../components/Header/WalletHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const DATA = [
    {

        status: "Send",
        amt: "100.00",
        image: ImagePath.SENDICON,
        date: "December 28, 2021"
    },
    {

        status: "Recieve",
        amt: "100.00",
        image: ImagePath.RECIEVEICON,
        date: "December 28, 2021"
    },
    {

        status: "Send",
        amt: "100.00",
        image: ImagePath.SENDICON,
        date: "December 28, 2021"
    },
    {

        status: "Recieve",
        amt: "100.00",
        image: ImagePath.RECIEVEICON,
        date: "December 28, 2021"
    },
    {

        status: "Send",
        amt: "100.00",
        image: ImagePath.SENDICON,
        date: "December 28, 2021"
    },
    {

        status: "Recieve",
        amt: "100.00",
        image: ImagePath.RECIEVEICON,
        date: "December 28, 2021"
    },

]

const DATAUSD = [
    {

        coin: "Bitcoin",
        amt: "0.00",
        image: ImagePath.BITCOIN
    },
    {

        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH
    },
    {

        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG
    },
    {

        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH
    },
    {

        coin: "Bitcoin",
        amt: "0.00",
        image: ImagePath.BITCOIN
    },
    {

        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH
    },
    {

        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG
    },
    {

        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH
    },

]

const Home = (props) => {
    const [medium, setMedium] = useState("Crypto")

    const renderBalance = () => {
        return (
            <View style={styles.balncHeader}>
                <View style={styles.blcView}>
                    <View style={{ height: height * 0.05, justifyContent: "flex-end", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#B3B4B7", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Balance</Text>
                    </View>
                    <View style={{ height: height * 0.07, justifyContent: "center", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 25, fontFamily: FONTS.PoppinsSemiBold }}>$ 14,400</Text>
                    </View>
                    <View style={{ height: height * 0.04, justifyContent: "center", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#B3B4B7", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Monthly profit</Text>
                    </View>
                    <View style={{ height: height * 0.05, justifyContent: "flex-start", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#777E90", fontSize: height / 38, fontFamily: FONTS.PoppinsSemiBold }}>$105.40</Text>
                    </View>
                </View>
                <View style={styles.dollarView}>
                    <ImageBackground resizeMode="contain" source={ImagePath.DOLLAR} style={{ height: 170, width: 170, alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity style={styles.usdView}>
                            <Text style={{ color: "#0000FF", fontSize: height / 53, fontFamily: FONTS.PoppinsSemiBold }}>USD</Text>
                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: 25, width: 13 }} />
                        </TouchableOpacity>
                        <View style={styles.growView}>
                            <ImageBackground resizeMode="contain" source={ImagePath.GROW} style={{ height: 40, width: 60, backgroundColor: "lighblue", alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 7 }}>
                                <Image source={ImagePath.UP} resizeMode="contain" style={{ height: 9, width: 13 }} />
                                <Text style={{ color: "#FFFFFF", fontSize: height / 70, fontFamily: FONTS.PoppinsRegular }}>+13%</Text>
                            </ImageBackground>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    const renderMiddle = () => {
        return (
            <View style={styles.middleView}>
                <View style={styles.middleViewOne}>
                    <ImageBackground source={ImagePath.FUNDSBACK} resizeMode="stretch" style={{ height: 75, width: 150, justifyContent: "center", alignItems: "center" }} >
                        <View style={styles.fundsTxt}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Fiat funds</Text>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>$14,400</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={ImagePath.FUNDSBACK} resizeMode="stretch" style={{ height: 75, width: 150, justifyContent: "center", alignItems: "center" }} >
                        <View style={styles.fundsTxt}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Crypto Wallet</Text>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>$10.00</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.middleViewTwo}>
                    <ImageBackground source={ImagePath.FUNDSBACK} resizeMode="stretch" style={{ height: 75, width: 150, justifyContent: "center", alignItems: "center" }} >
                        <View style={styles.fundsTxt}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Crypto Earn</Text>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>$145.88</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={ImagePath.FUNDSBACK} resizeMode="stretch" style={{ height: 75, width: 150, justifyContent: "center", alignItems: "center" }} >
                        <View style={styles.fundsTxt}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Crypto Credit</Text>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>$180.00</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    const renderDataUsd = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("FiatWallet")} style={styles.mainContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.coin}>
                            <Image source={item.image} resizeMode="contain" style={{ height: 35, width: 35 }} />
                        </View>
                        <View style={styles.coinText}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>{item.coin}</Text>
                        </View>
                    </View>
                    <View style={styles.amtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>${item.amt}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.border}></View>
            </View>
        )
    }

    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("FiatWallet")} style={styles.mainContainer}>
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
                <View style={styles.border}></View>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View style={styles.listParent}>
                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Transaction</Text>
                <View style={styles.sectionView}>
                    <TouchableOpacity onPress={() => setMedium("Crypto")} style={styles.cryptoView}>
                        <Text style={{ marginTop: height * 0.03, color: medium === "Crypto" ? "#1774FF" : "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Crypto</Text>
                        {medium == "Crypto" ?
                            <View style={{ height: height * 0.003, width: width * 0.14, backgroundColor: "#1774FF" }}></View> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setMedium("USD")} style={styles.usdollarView}>
                        <Text style={{ marginTop: height * 0.03, color: medium === "USD" ? "#1774FF" : "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>USD</Text>
                        {medium == "USD" ?
                            <View style={{ height: height * 0.003, width: width * 0.14, backgroundColor: "#1774FF" }}></View> : null}
                    </TouchableOpacity>
                </View>
                <View style={styles.border}></View>
                {medium === "Crypto" ?
                    <FlatList
                        data={DATA}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item) => renderData(item)}
                        contentContainerStyle={{ paddingBottom: height * 0.15 }}
                    />
                    :
                    <FlatList
                        data={DATA}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item) => renderData(item)}
                        contentContainerStyle={{ paddingBottom: height * 0.15 }}
                    />
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
            <WalletHeader
                Drawer={true}
                HeaderTitle={true}
                Title="Accounts"
                onDrawerPress={() => props.navigation.openDrawer()}
                rightIcon={true}
                RightIconTwoPress={() => props.navigation.navigate("HelpCenter")}
                RightIconTwo={true}
                RightIconPress={() => props.navigation.navigate("Pay")}
            />
            {/* <KeyboardAwareScrollView> */}
            {renderBalance()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 5, marginTop: height * 0.19, height: height * 1, width: width * 1, }}>
                {renderMiddle()}
                {renderList()}
            </ScrollView>
            {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    balncHeader: {
        height: height * 0.22,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        position: "absolute",
        top: 90,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15
    },
    blcView: {
        height: height * 0.22,
        width: width * 0.35,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    dollarView: {
        height: height * 0.22,
        width: width * 0.4,
        // marginLeft: 30,
        // backgroundColor: "pink",
        justifyContent: "flex-end"
    },
    middleView: {
        height: height * 0.26,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    sectionView: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between"
    },
    cryptoView: {
        height: height * 0.07,
        width: width * 0.15,
        // backgroundColor: "grey",
        justifyContent: "space-between"
        // alignSelf: "center"
    },
    usdollarView: {
        height: height * 0.07,
        width: width * 0.15,
        marginLeft: width * 0.05,
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "space-between"
        // alignSelf: "center"
    },
    middleViewOne: {
        height: height * 0.15,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    listParent: {
        height: height * 0.65,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
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
    middleViewTwo: {
        height: height * 0.11,
        width: width * 0.9,
        // backgroundColor: "grey",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    fundsTxt: {
        height: height * 0.06,
        width: width * 0.35,
        // backgroundColor: "red"
    },
    usdView: {
        height: height * 0.05,
        width: width * 0.14,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginLeft: 30
    },
    growView: {
        height: height * 0.03,
        width: width * 0.16,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
        marginLeft: 30
    },
})