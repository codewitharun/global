import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import WalletHeader from '../../components/Header/WalletHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const DATA = [
    {

        status: "USD",
        amt: "0.00",
        image: ImagePath.USD,
        date: "December 28, 2021"
    },
    {

        status: "Mobile Money",
        amt: "0.00",
        image: ImagePath.MOBILE,
        date: "December 28, 2021"
    },
    {

        status: "Payeer",
        amt: "0.00",
        image: ImagePath.PAYEER,
        date: "December 28, 2021"
    },
    {

        status: "Advanced Cash",
        amt: "0.00",
        image: ImagePath.CASH,
        date: "December 28, 2021"
    },

]

const WITHDRAWDATA = [
    {

        status: "USD",
        amt: "0.00",
        image: ImagePath.USD,
        date: "December 28, 2021"
    },
    {

        status: "Mobile Money",
        amt: "0.00",
        image: ImagePath.MOBILE,
        date: "December 28, 2021"
    },
    {

        status: "Payeer",
        amt: "0.00",
        image: ImagePath.PAYEER,
        date: "December 28, 2021"
    },
]

const FiatWallet = (props) => {
    const [select, setSelect] = useState("Deposit")
    const [medium, setMedium] = useState("Crypto")

    const renderBalance = () => {
        return (
            <View style={styles.balncHeader}>
                <View style={styles.blcView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsMedium }}>Available Balance</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 35, fontFamily: FONTS.PoppinsSemiBold }}>$ 0.00</Text>
                </View>
                <View style={styles.dollarView}>
                    <ImageBackground resizeMode="contain" source={ImagePath.DOLLAR} style={{ height: 80, width: 100, alignItems: "center", flexDirection: "row", paddingBottom: 15, justifyContent: "flex-start" }}>
                        <TouchableOpacity style={styles.usdView}>
                            <Text style={{ color: "#0000FF", fontSize: height / 56, fontFamily: FONTS.PoppinsSemiBold }}>USD</Text>
                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: 12, width: 12 }} />
                        </TouchableOpacity>
                        <ImageBackground source={ImagePath.DOLLARBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: 40, width: 60 }}>
                            <Image source={ImagePath.DOLLARSIGN} resizeMode="contain" style={{ height: 25, width: 25 }} />
                        </ImageBackground>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddBank")} >
                    <ImageBackground source={ImagePath.PAYMENTBACK} resizeMode="stretch" style={{ height: height * 0.075, width: width * 0.9, flexDirection: "row", justifyContent: "center" }} >
                        <View style={styles.imgView}>
                            <View style={{ height: height * 0.042, width: width * 0.1 }}>
                                <Image source={item.image} resizeMode="contain" style={{ height: 30, width: 30, }} />
                            </View>
                            <View style={{ height: height * 0.042, width: width * 0.4, justifyContent: "center" }}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>{item.status}</Text>
                            </View>
                        </View>
                        <View style={styles.amtView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>${item.amt}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    const renderDataWithdraw = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddBankWithdraw")}>
                    <ImageBackground source={ImagePath.PAYMENTBACK} resizeMode="stretch" style={{ height: height * 0.075, width: width * 0.9, flexDirection: "row", justifyContent: "center" }} >
                        <View style={styles.imgView}>
                            <View style={{ height: height * 0.042, width: width * 0.1 }}>
                                <Image source={item.image} resizeMode="contain" style={{ height: 30, width: 30, }} />
                            </View>
                            <View style={{ height: height * 0.042, width: width * 0.4, justifyContent: "center" }}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>{item.status}</Text>
                            </View>
                        </View>
                        <View style={styles.amtView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>${item.amt}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    const renderBtn = () => {
        return (
            <View style={styles.btnView}>
                <TouchableOpacity onPress={() => { setSelect("Deposit") }} style={styles.btStyle}>
                    <ImageBackground source={select === "Deposit" ? ImagePath.SELECT : ImagePath.UNSELECT} resizeMode="contain" style={{ height: 35, width: 90, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: select === "Deposit" ? "#FFFFFF" : "#1774FF", fontSize: height / 56, fontFamily: FONTS.PoppinsRegular }}>Deposit</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelect("Withdraw")} style={styles.btStyle}>
                    <ImageBackground source={select === "Withdraw" ? ImagePath.SELECT : ImagePath.UNSELECT} resizeMode="contain" style={{ height: 35, width: 90, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: select === "Withdraw" ? "#FFFFFF" : "#1774FF", fontSize: height / 56, fontFamily: FONTS.PoppinsRegular }}>Withdraw</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelect("Swap")} style={styles.btStyle}>
                    <ImageBackground source={select === "Swap" ? ImagePath.SELECT : ImagePath.UNSELECT} resizeMode="contain" style={{ height: 35, width: 90, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: select === "Swap" ? "#FFFFFF" : "#1774FF", fontSize: height / 56, fontFamily: FONTS.PoppinsRegular }}>Swap</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View style={styles.listParent}>
                {select === "Deposit" ?
                    <View style={styles.mainContainer}>
                        <View style={styles.sectionView}>
                            <TouchableOpacity onPress={() => setMedium("Crypto")} style={styles.cryptoView}>
                                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Balance</Text>
                                {medium == "Crypto" ?
                                    <View style={{ height: height * 0.004, width: width * 0.2, backgroundColor: "#1774FF" }}></View> : null}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setMedium("USD")} style={styles.usdollarView}>
                                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Transaction</Text>
                                {medium == "USD" ?
                                    <View style={{ height: height * 0.004, width: width * 0.25, backgroundColor: "#1774FF" }}></View> : null}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.border}></View>
                        <View style={styles.flatList}>
                            {medium === "Crypto" ?
                                <FlatList
                                    data={DATA}
                                    nestedScrollEnabled={true}
                                    renderItem={(item) => renderData(item)}
                                    contentContainerStyle={{ paddingBottom: height * 0.05 }}
                                />
                                :
                                <View></View>
                            }
                        </View>
                        {medium === "Crypto" ?
                            <View style={styles.description}>
                                <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>All Your Fiat Deposits will be displayed</Text>
                                <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>here.</Text>
                            </View>
                            :
                            <View style={styles.descriptionTrans}>
                                <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>All Your USD Deposit & Withdrawal</Text>
                                <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>transactions will show here. Go ahead,</Text>
                                <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Deposit or Withdraw USD</Text>
                            </View>
                        }
                    </View>
                    :
                    select === "Withdraw" ?
                        <View style={styles.mainContainer}>
                            <View style={styles.sectionView}>
                                <TouchableOpacity onPress={() => setMedium("Crypto")} style={styles.cryptoView}>
                                    <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Balance</Text>
                                    {medium == "Crypto" ?
                                        <View style={{ height: height * 0.004, width: width * 0.2, backgroundColor: "#1774FF" }}></View> : null}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setMedium("USD")} style={styles.usdollarView}>
                                    <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Transaction</Text>
                                    {medium == "USD" ?
                                        <View style={{ height: height * 0.004, width: width * 0.25, backgroundColor: "#1774FF" }}></View> : null}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.withDrawflatList}>
                                {medium === "Crypto" ?
                                    <FlatList
                                        data={WITHDRAWDATA}
                                        nestedScrollEnabled={true}
                                        renderItem={(item) => renderDataWithdraw(item)}
                                        contentContainerStyle={{ paddingBottom: height * 0.05 }}
                                    />
                                    :
                                    <View></View>
                                }
                            </View>
                            {medium === "Crypto" ?
                                <View style={styles.description}>
                                    <TouchableOpacity style={styles.closeView}>
                                        <Image source={ImagePath.CLOSE} resizeMode="contain" style={{ height: 15, width: 15 }} />
                                    </TouchableOpacity>
                                    <View style={styles.withdrTxt}>
                                        <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>Withdraw</Text>
                                    </View>
                                    <View style={styles.option}>
                                        <ImageBackground source={ImagePath.OPTIONBACK} resizeMode="contain" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, height: height * 0.07, width: width * 0.8 }} >
                                            <ImageBackground source={ImagePath.LOGOBACK} style={styles.brandView}>
                                                <Image source={ImagePath.BASE} resizeMode="contain" style={{ height: 25, width: 25 }} />
                                            </ImageBackground>
                                            <View style={styles.emailTxtView}>
                                                <Text style={{ color: "#000000", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Send via Email / phone / ID</Text>
                                                <Text style={{ color: "#000000", fontSize: height / 95, fontFamily: FONTS.PoppinsRegular }}>Send to BRW wallet user instantly with 0 fees.</Text>
                                            </View>
                                        </ImageBackground>
                                        <ImageBackground source={ImagePath.OPTIONBACK} resizeMode="contain" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, height: height * 0.07, width: width * 0.8 }} >
                                            <ImageBackground source={ImagePath.LOGOBACK} style={styles.brandView}>
                                                <Image source={ImagePath.DOWNLOAD} resizeMode="contain" style={{ height: 25, width: 25 }} />
                                            </ImageBackground>
                                            <View style={styles.emailTxtView}>
                                                <Text style={{ color: "#000000", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Send via Email / phone / ID</Text>
                                                <Text style={{ color: "#000000", fontSize: height / 95, fontFamily: FONTS.PoppinsRegular }}>Send to BRW wallet user instantly with 0 fees.</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </View>
                                :
                                <View style={styles.descriptionTrans}>
                                    <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>All Your USD Deposit & Withdrawal</Text>
                                    <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>transactions will show here. Go ahead,</Text>
                                    <Text style={{ color: "#858C94", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Deposit or Withdraw USD</Text>
                                </View>
                            }
                        </View>
                        :
                        <View></View>
                }
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
            <WalletHeader
                backIcon={true}
                HeaderTitle={true}
                Title="Fiat Wallet"
                onBackPress={() => props.navigation.goBack()}
            />
            {renderBalance()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.09, paddingVertical: 5, height: height * 1, width: width * 1, }}>
                {renderBtn()}
                {renderList()}
            </ScrollView>
            {/* <View style={styles.description}>

            </View> */}
        </SafeAreaView>
    )
}

export default FiatWallet

const styles = StyleSheet.create({
    description: {
        height: height * 0.5,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "pink",
        // justifyContent: "center",
        alignItems: "center"
    },
    withdrTxt: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    emailTxtView: {
        height: height * 0.05,
        width: width * 0.6,
        // backgroundColor: "red",
        justifyContent: "center",
        // alignItems: "center"
    },
    brandView: {
        height: height * 0.04,
        width: width * 0.1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    option: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
    },
    descriptionTrans: {
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 50
    },
    mainContainer: {
        height: height * 0.6,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    closeView: {
        height: height * 0.04,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingHorizontal: 10
    },
    flatList: {
        height: height * 0.4,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    withDrawflatList: {
        height: height * 0.3,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    imgView: {
        height: height * 0.075,
        width: width * 0.5,
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center"
    },
    amtView: {
        height: height * 0.075,
        width: width * 0.3,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    listView: {
        height: height * 0.1,
        width: width * 0.9,
        paddingVertical: 10,
        // backgroundColor: "pink"
    },

    listParent: {
        height: height * 0.7,
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
        paddingHorizontal: 60,
        justifyContent: "space-between"
    },
    cryptoView: {
        height: height * 0.07,
        width: width * 0.25,
        // backgroundColor: "grey",
        justifyContent: "space-between",
        alignItems: "center"
        // alignSelf: "center"
    },
    usdollarView: {
        height: height * 0.07,
        width: width * 0.27,
        marginLeft: width * 0.05,
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "space-between"
        // alignSelf: "center"
    },
    border: {
        height: height * 0.002,
        width: width * 0.9,
        backgroundColor: "lightgrey",
        // marginTop: height * 0.01
    },
    btStyle: {
        height: height * 0.05,
        width: width * 0.25,
        // backgroundColor: "pink",
        justifyContent: "center",
    },
    btnView: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.01,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    balncHeader: {
        height: height * 0.13,
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
    blcView: {
        height: height * 0.13,
        width: width * 0.45,
        // backgroundColor: "red",
        justifyContent: "space-between",
        paddingVertical: 20
    },
    dollarView: {
        height: height * 0.13,
        width: width * 0.4,
        // marginLeft: 30,
        // backgroundColor: "pink",
        justifyContent: "flex-end",
    },
    usdView: {
        height: height * 0.035,
        width: width * 0.14,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 20
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
})