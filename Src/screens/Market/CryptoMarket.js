import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import WalletHeader from '../../components/Header/WalletHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const DATA = [
    {
        key: 1,
        coin: "Bitcoin",
        code: "BTC",
        amt: "0.00",
        image: ImagePath.BITCOIN,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 2,
        coin: "Etherium",
        code: "ETH",
        amt: "0.00",
        image: ImagePath.ETH,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 3,
        coin: "Tether",
        code: "TTH",
        amt: "0.00",
        image: ImagePath.BNG,
        rate: +9.45,
        market: ImagePath.MARKETUP
    },
    {
        key: 4,
        coin: "BNB",
        code: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        rate: +9.45,
        market: ImagePath.MARKETUP
    },
    {
        key: 5,
        coin: "Bitcoin",
        code: "BTC",
        amt: "0.00",
        image: ImagePath.BITCOIN,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 6,
        coin: "Etherium",
        code: "ETH",
        amt: "0.00",
        image: ImagePath.ETH,
        rate: +9.45,
        market: ImagePath.MARKETUP
    },
    {
        key: 7,
        coin: "Tether",
        code: "TTH",
        amt: "0.00",
        image: ImagePath.BNG,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 8,
        coin: "BNB",
        code: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        rate: +9.45,
        market: ImagePath.MARKETUP
    },
    {
        key: 6,
        coin: "Etherium",
        code: "ETH",
        amt: "0.00",
        image: ImagePath.ETH,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 7,
        coin: "Tether",
        code: "TTH",
        amt: "0.00",
        image: ImagePath.BNG,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 8,
        coin: "BNB",
        code: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 6,
        coin: "Etherium",
        code: "ETH",
        amt: "0.00",
        image: ImagePath.ETH,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 7,
        coin: "Tether",
        code: "TTH",
        amt: "0.00",
        image: ImagePath.BNG,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },
    {
        key: 8,
        coin: "BNB",
        code: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        rate: -9.45,
        market: ImagePath.MARKETDOWN
    },


]


const CryptoMarket = (props) => {
    const [btn, setBtn] = useState("All")

    const renderSearch = () => {
        return (
            <View style={styles.searchparent}>
                <View style={[styles.input, styles.shadowProp]}>
                    <TextInput placeholder='Search coins'
                        placeholderTextColor={"#B3B4B7"}
                        style={{
                            fontSize: height / 50,
                            color: "black"
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.searchIconView}>
                    <Image source={ImagePath.SEARCH} resizeMode="contain" style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderButton = () => {
        return (
            <View style={styles.btnView}>
                <ImageBackground source={ImagePath.CATEGORYBACK} resizeMode="contain" style={{ flexDirection: "row", alignItems: "center", height: height * 0.08, width: width * 0.9 }} >
                    <TouchableOpacity onPress={() => setBtn("All")} style={{
                        height: height * 0.05,
                        width: width * 0.1,
                        backgroundColor: btn === "All" ? "#1774FF" : "#FFFFFF00",
                        borderRadius: 7,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{ color: btn === "All" ? "#FFFFFF" : "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setBtn("Favourites")} style={{
                        height: height * 0.05,
                        width: width * 0.3,
                        backgroundColor: btn === "Favourites" ? "#1774FF" : "#FFFFFF00",
                        borderRadius: 7,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{ color: btn === "Favourites" ? "#FFFFFF" : "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Favourites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setBtn("Gainer")} style={{
                        height: height * 0.05,
                        width: width * 0.25,
                        backgroundColor: btn === "Gainer" ? "#1774FF" : "#FFFFFF00",
                        borderRadius: 7,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{ color: btn === "Gainer" ? "#FFFFFF" : "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Gainer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setBtn("Loser")} style={{
                        height: height * 0.05,
                        width: width * 0.25,
                        backgroundColor: btn === "Loser" ? "#1774FF" : "#FFFFFF00",
                        borderRadius: 7,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{ color: btn === "Loser" ? "#FFFFFF" : "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Loser</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("CoinDetails")} style={styles.mainContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.coin}>
                            <Image source={item.image} resizeMode="contain" style={{ height: 35, width: 35 }} />
                        </View>
                        <View style={styles.coinText}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>{item.coin}</Text>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 75, fontFamily: FONTS.PoppinsRegular }}>{item.code}</Text>
                        </View>
                    </View>
                    <View style={styles.marketView}>
                        <Image source={item.rate > 0 ? ImagePath.MARKETUP : ImagePath.MARKETDOWN} resizeMode="contain" style={{ height: 50, width: 50 }} />
                    </View>
                    <View style={styles.amtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>${item.amt}</Text>
                        <Text style={{ color: item.rate > 0 ? "#21BF73" : "#D90429", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>{item.rate}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.border}></View>
            </View>
        )
    }


    const renderList = () => {
        return (
            <View style={styles.listParent}>
                <FlatList
                    data={DATA}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.22 }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <WalletHeader
                Drawer={true}
                HeaderTitle={true}
                Title="Market"
                // onDrawerPress={() => props.navigation.openDrawer()}
                rightIcon={true}
                RightIconTwoPress={() => props.navigation.navigate()}
                RightIconTwo={true}
                RightIconPress={() => props.navigation.navigate("Pay")}
            />
            {renderSearch()}
            {/* <KeyboardAwareScrollView> */}
            {/* <ScrollView style={{ paddingVertical: 5, marginTop: height * 0.1, height: height * 1, width: width * 1, }}> */}
            {renderButton()}
            {renderList()}
            {/* </ScrollView> */}
            {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
    )
}

export default CryptoMarket

const styles = StyleSheet.create({
    listParent: {
        height: height * 0.79,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    listView: {
        height: height * 0.09,
        width: width * 0.9,
        // paddingVertical: 10,
        // backgroundColor: "pink"
    },
    itemView: {
        height: height * 0.09,
        width: width * 0.4,
        // backgroundColor: "lightgreen",
        flexDirection: "row",
        alignItems: "center"
    },
    mainContainer: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    marketView: {
        height: height * 0.09,
        width: width * 0.25,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    coin: {
        height: height * 0.09,
        width: width * 0.12,
        // backgroundColor: "yellow",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    coinText: {
        height: height * 0.045,
        width: width * 0.25,
        // backgroundColor: "blue",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    amtView: {
        height: height * 0.05,
        width: width * 0.25,
        // backgroundColor: "black",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    border: {
        height: height * 0.002,
        width: width * 0.9,
        backgroundColor: "#EBEEF2",
        // marginTop: height * 0.01
    },
    searchparent: {
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10,
        // marginTop: height * 0.08,
        borderWidth: 1,
        // borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    input: {
        height: height * 0.07,
        width: width * 0.65,
    },
    btnView: {
        height: height * 0.1,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "pink",
        // marginTop: height * 0.08,
        // flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    searchIconView: {
        height: height * 0.07,
        width: width * 0.17,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "flex-end"
    },
})