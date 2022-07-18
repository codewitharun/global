import { StyleSheet, ActivityIndicator, FlatList, View, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Header from '../../Components/Header';
import Clipboard from "@react-native-community/clipboard";
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen")

const slides = [
    {
        key: 1,
        image: ImagePath.SLIDER
    },
    {
        key: 2,
        image: ImagePath.SLIDER
    },
    {
        key: 3,
        image: ImagePath.SLIDER
    },
];

const DATA = [
    {
        key: 1,
        token: "GREM"
    },
    {
        key: 2,
        token: "GRET"
    },
    {
        key: 3,
        token: "USDT"
    },
    {
        key: 4,
        token: "ETH"
    },
    {
        key: 5,
        token: "BTC"
    },
]

const Wallet = (props) => {
    const [tabBtn, setTabBtn] = useState("GREM")
    const [coinDetail, setCoinDetail] = useState("")
    const [itemIndex, setItemIndex] = useState(0)
    const [coinList, setCoinList] = useState([])
    const [userBalance, setUserBalance] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        WalletCoinApi()
    }, [])

    const copyAddress = (add) => {
        Clipboard.setString(add);
        alert("Copied Wallet Address")
    };

    // ========= Wallet Coin API ====== //
    const WalletCoinApi = async () => {
        const Value = await AsyncStorage.getItem("token")
        setIsLoading(true);
        axios({
            method: "GET",
            url: "https://java-blockchainapp.mobiloitte.org/wallet/wallet/get-all-user-balance-and-coinlist",
            headers: {
                authorization: `Bearer ${Value}`,
                "content-type": "application/json"
            },
        })
            .then(async (response) => {
                console.log("====== Wallet Response ======", response);
                if (response.data.status === 200) {
                    setCoinList(response.data.data.coinList)
                    setUserBalance(response.data.data.userBalance)
                    setIsLoading(false);
                } else {
                    alert("No Data Found");
                    // setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log("===== Wallet Catch Error ======", err);
                setIsLoading(false);
            });
    };

    // ========= Wallet Address API ====== //
    const WalletAddressApi = async (shortName) => {
        const Value = await AsyncStorage.getItem("token");
        setLoader(true);
        axios({
            method: "GET",
            url: `https://java-blockchainapp.mobiloitte.org/wallet/wallet/get-address-new?coinName=${shortName}`,
            headers: {
                authorization: `Bearer ${Value}`,
                "content-type": "application/json"
            },
        })
            .then(async (response) => {
                console.log("====== Wallet Address Response ======", response);
                if (response.data.status === 200) {
                    setCoinDetail(response.data.data)
                    setLoader(false);
                } else {
                    alert("No Data Found");
                    setLoader(false);
                }
            })
            .catch((err) => {
                console.log("===== Wallet Address Catch Error ======", err.response);
                setLoader(false);
            });
    };

    function renderHeading() {
        return (
            <View style={styles.headingParent}>
                <Text style={styles.cryptoTxt}>CRYPTO WALLET</Text>
            </View>
        )
    }

    function renderListToken(item, index) {
        return (
            <View style={styles.sliderView}>
                <TouchableOpacity onPress={() => { WalletAddressApi(item.coinShortName), setTabBtn(item.coinShortName), setItemIndex(index) }} style={{
                    height: height * 0.05,
                    width: width * 0.27,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: tabBtn === item.coinShortName ? COLOR.BUTTONCOLOR : "white"
                }}>
                    <Text style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: height / 65,
                        color: tabBtn === item.coinShortName ? "white" : "black",
                    }}>{item.coinShortName}</Text>
                </TouchableOpacity>

            </View>
        )
    }

    function renderMiddle() {
        return (
            <View style={styles.parentSliderView}>
                {isLoading ? (
                    <View>
                        <ActivityIndicator size="large" color="#244273" />
                    </View>
                ) :
                    <>
                        <FlatList
                            data={coinList}
                            nestedScrollEnabled={true}
                            horizontal={true}
                            renderItem={({ item, index }) => renderListToken(item, index)}
                            showsHorizontalScrollIndicator={false}
                        />
                        <View style={{
                            alignSelf: "center",
                            height: height * 0.06,
                            width: width * 0.15,
                            // backgroundColor: "pink",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: itemIndex === 0 ? COLOR.BUTTONCOLOR : COLOR.TABBACK }}></View>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: itemIndex === 1 ? COLOR.BUTTONCOLOR : COLOR.TABBACK }}></View>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: itemIndex === 2 ? COLOR.BUTTONCOLOR : COLOR.TABBACK }}></View>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: itemIndex === 3 ? COLOR.BUTTONCOLOR : COLOR.TABBACK }}></View>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: itemIndex === 4 ? COLOR.BUTTONCOLOR : COLOR.TABBACK }}></View>
                        </View>
                    </>
                }
            </View>
        )
    }

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                {loader ? (
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#244273" />
                    </View>
                ) :
                    <>
                        <View style={styles.parentMiddle}>
                            <View style={styles.iconView}>
                                <View style={styles.iconInsideView}>
                                    <Image source={ImagePath.GREM} resizeMode="contain" style={{ height: height * 0.06, width: width * 0.12 }} />
                                </View>
                                <View style={styles.balnceView}>
                                    <Text style={styles.balanceTxt}>Total Balance</Text>
                                    <Text style={styles.amtTxt}>{userBalance[itemIndex]?.availableBalance}</Text>
                                </View>
                            </View>
                            <View style={styles.amountView}>
                                <Text style={styles.gremTxt}>{coinDetail?.coinName}</Text>
                            </View>
                        </View>
                        <View style={styles.qrView}>
                            <Image source={ImagePath.QRCODE} resizeMode="contain" style={styles.qrImg} />
                        </View>
                        <View style={styles.copyView}>
                            <View style={styles.rectangle}>
                                <View style={styles.gremRectangle}>
                                    <Image source={ImagePath.GREM} resizeMode="contain" style={styles.gremImage} />
                                </View>
                                <View style={styles.txtRectangle}>
                                    <Text style={styles.copyTxt}>{coinDetail?.walletAddress}</Text>
                                </View>
                                <TouchableOpacity onPress={() => copyAddress(coinDetail.walletAddress)} style={styles.copyRectangle}>
                                    <Image source={ImagePath.COPY} resizeMode="contain" style={styles.copyImg} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                }
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={styles.buttonView}>
                <CustomButton
                    title={"withdraw"}
                    ButtonPress={() => props.navigation.navigate("WithDraw")}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"My Wallet"}
                />
                {renderHeading()}
                {renderMiddle()}
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    <ScrollView>
                        {renderQr()}
                        {renderButton()}
                    </ScrollView>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    parentMiddle: {
        height: height * 0.18,
        // backgroundColor: "red",
        marginTop: height * 0.035,
        width: width * 1
    },
    amountView: {
        // backgroundColor: "blue",
        height: height * 0.06,
        width: width * 0.2,
        marginLeft: width * 0.04,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    gremTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 45,
        color: COLOR.LABETEXT,
    },
    iconView: {
        // backgroundColor: "pink",
        height: height * 0.1,
        width: width * 0.7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    iconInsideView: {
        // backgroundColor: "yellow",
        height: height * 0.1,
        width: width * 0.25,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    balnceView: {
        // backgroundColor: "green",
        height: height * 0.1,
        width: width * 0.35,
        alignItems: "center",
        justifyContent: "space-between"
    },
    balanceTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 45,
        color: COLOR.LABETEXT,
    },
    amtTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 25,
        color: "black",
    },
    qrImg: {
        height: height * 0.25,
        width: width * 0.8
    },
    buttonView: {
        // backgroundColor: "lightpink",
        height: height * 0.2,
        width: width * 1,
        position: "absolute",
        bottom: height * 0.1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    gremImage: {
        height: height * 0.09,
        width: width * 0.09
    },
    txtRectangle: {
        height: height * 0.08,
        width: width * 0.6,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        justifyContent: "center",
        alignItems: "center",
    },
    copyImg: {
        height: height * 0.08,
        width: width * 0.08
    },
    copyRectangle: {
        height: height * 0.08,
        width: width * 0.15,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        borderColor: COLOR.RECTANGLE,
        alignItems: "center",
        justifyContent: "center"
    },
    copyTxt: {
        fontFamily: "Lato-Regular",
        fontSize: height / 85,
        color: COLOR.COPYTXT,
    },
    copyView: {
        // backgroundColor: "red",
        height: height * 0.08,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.05
    },
    rectangle: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: "white",
        borderWidth: height * 0.002,
        borderColor: COLOR.RECTANGLE,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    gremRectangle: {
        height: height * 0.08,
        width: width * 0.15,
        // backgroundColor: "pink",
        borderWidth: height * 0.001,
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLOR.RECTANGLE
    },
    headingParent: {
        height: height * 0.08,
        width: width * 1,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    qrView: {
        height: height * 0.26,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02,
        // backgroundColor: "yellow"
    },
    cryptoTxt: {
        fontFamily: "Poppins-Medium",
        fontSize: height / 48,
        color: "black"
    },
    headerImage: {
        height: height * 0.10,
        width: width * 0.10,
        resizeMode: "contain"
    },
    sliderView: {
        height: height * 0.055,
        width: width * 0.33,
        // backgroundColor: "yellow",
        resizeMode: "cover",
        alignSelf: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between"
    },
    parentSliderView: {
        height: height * 0.13,
        width: width * 1,
        // backgroundColor: "red",
        // flexDirection: "row",
    },
    parentViewSlider: {
        height: height * 0.1,
        width: width * 0.3,
        borderRadius: 30,
        backgroundColor: "blue"
    }
})