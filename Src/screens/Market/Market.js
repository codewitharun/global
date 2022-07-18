import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import WalletHeader from '../../components/Header/WalletHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import { SwiperFlatList } from "react-native-swiper-flatlist";
const { height, width } = Dimensions.get("screen");

const DATA = [
    {
        key: 1,
        coin: "BTC",
        amt: "0.00",
        image: ImagePath.BITCOIN,
        rate: -9.45,
        name: "Bitcoin"
    },
    {
        key: 2,
        coin: "ETH",
        amt: "0.00",
        image: ImagePath.ETH,
        rate: -9.45,
        name: "Etherium"
    },
    {
        key: 3,
        coin: "TTH",
        amt: "0.00",
        image: ImagePath.TTH,
        rate: +9.45,
        name: "Tether"
    },
    {
        key: 4,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.BNG,
        rate: +9.45,
        name: "BNG"
    },

]

const DATANEWS = [
    {
        key: 1,
        head: "Mission",
        image: ImagePath.BITCOINB,
    },
    {
        key: 2,
        head: "Supercharge",
        image: ImagePath.BITCOINB,
    },
]

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

const Market = (props) => {
    const [select, setSelect] = useState("")
    const [sendModalTwo, setSendModalTwo] = useState(false)

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
                    <ImageBackground resizeMode="contain" source={ImagePath.DOLLAR} style={{ height: 150, width: 170, alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => setSendModalTwo(true)} style={styles.usdView}>
                            <Text style={{ color: "#0000FF", fontSize: height / 56, fontFamily: FONTS.PoppinsSemiBold }}>USD</Text>
                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: 12, width: 12 }} />
                        </TouchableOpacity>
                        <View style={styles.growView}>
                            <ImageBackground resizeMode="contain" source={ImagePath.GROW} style={{ height: 40, width: 50, backgroundColor: "lighblue", alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 7 }}>
                                <Image source={ImagePath.UP} resizeMode="contain" style={{ height: 7, width: 14 }} />
                                <Text style={{ color: "#FFFFFF", fontSize: height / 80, fontFamily: FONTS.PoppinsRegular }}>+13%</Text>
                            </ImageBackground>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    const renderBtn = () => {
        return (
            <View style={styles.btnView}>
                <TouchableOpacity onPress={() => { setSelect("Deposit") }} style={styles.btStyle}>
                    <ImageBackground source={select === "Deposit" ? ImagePath.SELECT : ImagePath.UNSELECT} resizeMode="contain" style={{ height: 35, width: 90, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: select === "Deposit" ? "#FFFFFF" : "#1774FF", fontSize: height / 56, fontFamily: FONTS.PoppinsRegular }}>Trade</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelect("Withdraw")} style={styles.btStyle}>
                    <ImageBackground source={select === "Withdraw" ? ImagePath.SELECT : ImagePath.UNSELECT} resizeMode="contain" style={{ height: 35, width: 90, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: select === "Withdraw" ? "#FFFFFF" : "#1774FF", fontSize: height / 56, fontFamily: FONTS.PoppinsRegular }}>Market</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelect("Swap")} style={styles.btStyle}>
                    <ImageBackground source={select === "Swap" ? ImagePath.SELECT : ImagePath.UNSELECT} resizeMode="contain" style={{ height: 35, width: 90, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: select === "Swap" ? "#FFFFFF" : "#1774FF", fontSize: height / 56, fontFamily: FONTS.PoppinsRegular }}>Portfolio</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }


    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity>
                    <ImageBackground source={ImagePath.LISTBACK} resizeMode="stretch" style={{ height: height * 0.15, width: width * 0.3 }} >
                        <View style={styles.topView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 58, fontFamily: FONTS.PoppinsMedium }}>{item.coin}</Text>
                            <Text style={{ color: item.rate > 0 ? "#58BD7D" : "#DE2344", fontSize: height / 85, fontFamily: FONTS.PoppinsMedium }}>{item.rate}%</Text>
                        </View>
                        <View style={styles.MidView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 38, fontFamily: FONTS.PoppinsMedium }}>${item.amt}</Text>
                        </View>
                        <View style={styles.lowerView}>
                            <Image source={item.image} resizeMode="contain" style={{ height: 15, width: 15 }} />
                            <Text style={{ marginLeft: width * 0.02, color: "#2C2C4E", fontSize: height / 68, fontFamily: FONTS.PoppinsMedium }}>{item.name}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    const renderDataNews = ({ item }) => {
        return (
            <View style={styles.listViewNew}>
                <TouchableOpacity>
                    <ImageBackground source={ImagePath.NEWSBACK} resizeMode="stretch" style={{ flexDirection: "row", alignItems: "center", height: height * 0.13, width: width * 0.65 }} >
                        <View style={styles.txtnewView}>
                            <View style={styles.txttop}>
                                <Text style={{ color: "#FFFFFF", fontSize: height / 58, fontFamily: FONTS.PoppinsSemiBold }}>{item.head}</Text>
                            </View>
                            <View style={styles.txtMiddle}>
                                <Text style={{ color: "#FFFFFF", fontSize: height / 98, fontFamily: FONTS.PoppinsRegular }}>Lorem Ipsum is simply</Text>
                                <Text style={{ color: "#FFFFFF", fontSize: height / 98, fontFamily: FONTS.PoppinsRegular }}>dummy text of the printing</Text>
                                <Text style={{ color: "#FFFFFF", fontSize: height / 98, fontFamily: FONTS.PoppinsRegular }}>and typesetting industry.</Text>
                            </View>
                        </View>
                        <View style={styles.imgnewView}>
                            <Image source={item.image} resizeMode="contain" style={{ height: height * 0.2, width: width * 0.2 }} />
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View style={styles.listParent}>
                <Text style={{ marginTop: height * 0.02, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Favourites</Text>
                <FlatList
                    data={DATA}
                    nestedScrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.03 }}
                />
            </View>
        )
    }

    const renderListNews = () => {
        return (
            <View style={styles.listParent}>
                <Text style={{ marginTop: height * 0.02, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Crypto News</Text>
                <FlatList
                    data={DATANEWS}
                    nestedScrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => renderDataNews(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.03 }}
                />
            </View>
        )
    }

    const renderListGainers = () => {
        return (
            <View style={styles.listParentGainer}>
                <View style={styles.headingViewGainer}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Top Gainers</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("CryptoMarket")}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>See more</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={DATA}
                    nestedScrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.03 }}
                />
            </View>
        )
    }

    const renderListLoser = () => {
        return (
            <View style={styles.listParentGainer}>
                <View style={styles.headingViewGainer}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Top Losers</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>See more</Text>
                </View>
                <FlatList
                    data={DATA}
                    nestedScrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.03 }}
                />
            </View>
        )
    }

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

    const renderModalSendTwo = () => {
        return (
            // <View style={styles.modalView}>
            <Modal
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={sendModalTwo}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.sendmodalView}>
                        <View style={styles.searchModal}>
                            <View style={styles.buyTextView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Trade</Text>
                            </View>
                            <TouchableOpacity onPress={() => { setSendModalTwo(false) }} style={styles.crossView}>
                                <Image source={ImagePath.MODALCLOSE} resizeMode="contain" style={{ height: 13, width: 13 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalGrid}>
                            <View style={styles.contactView}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("")}>
                                    <ImageBackground source={ImagePath.TRADEBACK} resizeMode="contain" style={{ height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={ImagePath.P2P} resizeMode="contain" style={{ height: 40, width: 40 }} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={styles.contactTxtView}>
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>P2P exchange</Text>
                                </View>
                            </View>
                            <View style={styles.blockView}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("")}>
                                    <ImageBackground source={ImagePath.TRADEBACK} resizeMode="contain" style={{ height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={ImagePath.TRADING} resizeMode="contain" style={{ height: 40, width: 40 }} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={styles.contactTxtView}>
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Spot trading</Text>
                                </View>
                            </View>
                            <View style={styles.blockView}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("")}>
                                    <ImageBackground source={ImagePath.TRADEBACK} resizeMode="contain" style={{ height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={ImagePath.SWAP} resizeMode="contain" style={{ height: 40, width: 40 }} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={styles.contactTxtView}>
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Swap</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            // </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
            <WalletHeader
                Drawer={true}
                HeaderTitle={true}
                onDrawerPress={() => props.navigation.openDrawer()}
                rightIcon={true}
                RightIconTwoPress={() => props.navigation.navigate("HelpCenter")}
                RightIconTwo={true}
                RightIconPress={() => props.navigation.navigate("Pay")}
            />
            {/* <KeyboardAwareScrollView> */}
            {renderBalance()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 5, marginTop: height * 0.22, height: height * 1.1, width: width * 1, marginBottom: height * 0.12 }}>
                {renderBtn()}
                {renderList()}
                {renderListGainers()}
                {renderSwiper()}
                {renderListLoser()}
                {renderListNews()}
            </ScrollView>
            {/* </KeyboardAwareScrollView> */}
            {renderModalSendTwo()}

        </SafeAreaView>
    )
}

export default Market

const styles = StyleSheet.create({
    txtnewView: {
        height: height * 0.1,
        width: width * 0.4,
        // backgroundColor: "red",
        justifyContent: "space-between"
    },
    txttop: {
        height: height * 0.03,
        width: width * 0.35,
        // backgroundColor: "pink",
        alignSelf: "center"
    },
    txtMiddle: {
        height: height * 0.06,
        width: width * 0.35,
        // backgroundColor: "grey",
        alignSelf: "center"
    },
    imgnewView: {
        height: height * 0.1,
        width: width * 0.25,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
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
        justifyContent: "space-between",
        paddingLeft: 15
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
    headingView: {
        height: height * 0.03,
        width: width * 0.8,
        alignSelf: "center",
        // backgroundColor: "red"
    },
    headingViewGainer: {
        height: height * 0.04,
        width: width * 0.9,
        // backgroundColor: "red",
        marginTop: height * 0.03,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buyTextView: {
        height: height * 0.06,
        width: width * 0.6,
        // backgroundColor: "green",
        justifyContent: "center",
        // alignItems:"center"
    },
    crossView: {
        height: height * 0.06,
        width: width * 0.2,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    MidView: {
        height: height * 0.07,
        width: width * 0.25,
        // backgroundColor: "red",
        alignSelf: "center",

    },
    swiperHeader: {
        height: height * 0.2,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "grey",
        borderRadius: 15,
        marginTop: height * 0.03
    },
    lowerView: {
        height: height * 0.03,
        width: width * 0.25,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    contactTxtView: {
        height: height * 0.05,
        width: width * 0.3,
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
    },
    searchModal: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listView: {
        height: height * 0.18,
        width: width * 0.35,
        // paddingVertical: 10,
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    listViewNew: {
        height: height * 0.18,
        width: width * 0.7,
        // paddingVertical: 10,
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    itemView: {
        height: height * 0.09,
        width: width * 0.4,
        // backgroundColor: "lightgreen",
        flexDirection: "row"
    },
    topView: {
        height: height * 0.04,
        width: width * 0.25,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    mainContainer: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    coin: {
        height: height * 0.09,
        width: width * 0.12,
        // backgroundColor: "yellow",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    coinText: {
        height: height * 0.09,
        width: width * 0.25,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    modalGrid: {
        height: height * 0.25,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    contactView: {
        height: height * 0.25,
        width: width * 0.3,
        alignSelf: "center",
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    blockView: {
        height: height * 0.25,
        width: width * 0.3,
        alignSelf: "center",
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    modalparentView: {
        height: height * 1,
        width: width * 1,
        justifyContent: "flex-end",
        // backgroundColor: "red"
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    amtView: {
        height: height * 0.09,
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
    blcView: {
        height: height * 0.25,
        width: width * 0.35,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    btnView: {
        height: height * 0.09,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "red",
        // marginTop: height * 0.08,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    dollarView: {
        height: height * 0.25,
        width: width * 0.4,
        // marginLeft: 30,
        // backgroundColor: "pink",
        justifyContent: "flex-end"
    },
    usdView: {
        height: height * 0.02,
        width: width * 0.12,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 30
    },
    growView: {
        height: height * 0.02,
        width: width * 0.2,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
        marginLeft: 30
    },
    recParent: {
        height: height * 0.08,
        width: width * 0.25,
        // backgroundColor: "pink",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sendParent: {
        height: height * 0.08,
        width: width * 0.25,
        // backgroundColor: "green",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tradeParent: {
        height: height * 0.08,
        width: width * 0.25,
        // backgroundColor: "yellow",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn: {
        height: height * 0.05,
        width: width * 0.25,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
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
        marginTop: height * 0.08,
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
    searchparentModal: {
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: height * 0.02,
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
        // backgroundColor: "red"
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 2,
        //     height: 6
        // },
        // shadowRadius: 5,
        // shadowOpacity: 2.0

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    searchIconView: {
        height: height * 0.07,
        width: width * 0.2,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    listParent: {
        height: height * 0.25,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    listParentGainer: {
        height: height * 0.25,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    listParentModal: {
        height: height * 0.2,
        width: width * 0.2,
        marginTop: height * 0.02,
        backgroundColor: "red",
        alignSelf: "center"
    },
    modalView: {
        height: height * 0.79,
        width: width * 1,
        borderRadius: height / 35,
        backgroundColor: "#FFFFFF",
        // backgroundColor: "lightgrey",
        // justifyContent: "space-between",
        paddingVertical: height * 0.02,
        alignItems: "center",
        // marginTop: height * 0.22,
        alignSelf: "center"
    },
    sendmodalView: {
        height: height * 0.4,
        width: width * 1,
        borderRadius: height / 35,
        backgroundColor: "#FFFFFF",
        // backgroundColor: "lightgrey",
        // justifyContent: "space-between",
        paddingVertical: height * 0.02,
        alignItems: "center",
        // marginTop: height * 0.22,
        alignSelf: "center"
    },

    modalText: {
        fontSize: height / 45,
        color: "white",
        fontFamily: "ClashDisplay-Regular",
        fontWeight: "500"
    },

    insideModal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

})