import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'


const DATATRANS = [
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

const DATA = [
    {
        image: ImagePath.VCARD
    },
    {
        image: ImagePath.CARDOLD
    },
    {
        image: ImagePath.CARDNEW
    },
]

const CardDetails = (props) => {
    const [btn, setBtn] = useState("Physical")
    const [btnDown, setBtnDown] = useState("Physical")

    const renderName = () => {
        return (
            <View style={styles.heder}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>My Cards</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>+ New Card</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderBtn = () => {
        return (
            <View style={styles.btnView}>
                <ImageBackground source={ImagePath.CARDBACK} resizeMode="contain" style={{ paddingHorizontal: 5, height: height * 0.08, width: width * 0.9, flexDirection: "row", alignItems: "center" }} >
                    <TouchableOpacity onPress={() => setBtn("Physical")}>
                        <ImageBackground source={btn == "Physical" ? ImagePath.CARDBTN : null} resizeMode="contain" style={{ height: btn == "Physical" ? height * 0.08 : height * 0.08, width: btn == "Physical" ? width * 0.43 : width * 0.44, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: btn == "Physical" ? "#FFFFFF" : "#000000", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Physical Card</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setBtn("Virtual")}>
                        <ImageBackground source={btn == "Virtual" ? ImagePath.CARDBTN : null} resizeMode="contain" style={{ height: btn == "Virtual" ? height * 0.08 : height * 0.08, width: btn == "Virtual" ? width * 0.43 : width * 0.44, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: btn == "Virtual" ? "#FFFFFF" : "#000000", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Virtual Card</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View style={styles.listParentModal}>
                <FlatList
                    data={DATA}
                    nestedScrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => renderDataModalSend(item)}
                // contentContainerStyle={{ paddingBottom: height * 0.22 }}
                />
            </View>
        )
    }

    const renderDataModalSend = ({ item }) => {
        return (
            <View style={styles.uperlistView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("CardTransaction")} style={styles.upermainContainer}>
                    <Image source={item.image} resizeMode="contain" style={{ height: height * 0.3, width: width * 0.75 }} />
                </TouchableOpacity>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View style={styles.oprioView}>
                <View style={styles.modalGrid}>
                    <View style={styles.contactView}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("CardTransaction")}>
                            <ImageBackground source={ImagePath.TRADEBACK} resizeMode="contain" style={{ height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
                                <Image source={ImagePath.P2P} resizeMode="contain" style={{ height: 40, width: 40 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.contactTxtView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Deposit</Text>
                        </View>
                    </View>
                    <View style={styles.blockView}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("")}>
                            <ImageBackground source={ImagePath.TRADEBACK} resizeMode="contain" style={{ height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
                                <Image source={ImagePath.SWAP} resizeMode="contain" style={{ height: 40, width: 40 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.contactTxtView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Transfer</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderBtnFreeze = () => {
        return (
            <View style={styles.btnView}>
                <ImageBackground source={ImagePath.CARDBACK} resizeMode="contain" style={{ paddingHorizontal: 5, height: height * 0.08, width: width * 0.9, flexDirection: "row", alignItems: "center" }} >
                    <TouchableOpacity onPress={() => setBtnDown("Physical")}>
                        <ImageBackground source={btnDown == "Physical" ? ImagePath.CARDBTN : null} resizeMode="contain" style={{ height: btn == "Physical" ? height * 0.08 : height * 0.08, width: btn == "Physical" ? width * 0.43 : width * 0.44, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: btnDown == "Physical" ? "#FFFFFF" : "#000000", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Freeze</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setBtnDown("Virtual")}>
                        <ImageBackground source={btnDown == "Virtual" ? ImagePath.CARDBTN : null} resizeMode="contain" style={{ height: btn == "Virtual" ? height * 0.08 : height * 0.08, width: btn == "Virtual" ? width * 0.43 : width * 0.44, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: btnDown == "Virtual" ? "#FFFFFF" : "#000000", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Unfreeze</Text>
                        </ImageBackground>
                    </TouchableOpacity>
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

    const renderTransactionList = () => {
        return (
            <View style={styles.listParent}>
                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Transaction</Text>
                <FlatList
                    data={DATATRANS}
                    nestedScrollEnabled={true}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.1 }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Card"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingTop: 10, height: height * 1, width: width * 1, }}>
                {renderName()}
                {renderBtn()}
                {renderList()}
                {renderOptions()}
                {renderBtnFreeze()}
                {renderTransactionList()}
            </ScrollView>

        </SafeAreaView>
    )
}

export default CardDetails

const styles = StyleSheet.create({
    heder: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btnView: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "center"
    },
    listParentModal: {
        height: height * 0.3,
        width: width * 0.9,
        alignSelf: "center"
    },
    uperlistView: {
        height: height * 0.3,
        width: width * 0.8,
        // paddingVertical: 10,
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    oprioView: {
        height: height * 0.25,
        width: width * 0.9,
        // paddingVertical: 10,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "center"
    },
    upermainContainer: {
        height: height * 0.3,
        width: width * 0.75,
        justifyContent: "center",
        // backgroundColor: "green",
        alignItems: "center"
    },
    modalGrid: {
        height: height * 0.25,
        width: width * 0.7,
        alignSelf: "center",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    contactView: {
        height: height * 0.14,
        width: width * 0.3,
        alignSelf: "center",
        // backgroundColor: "blue",
        justifyContent: "space-between",
        alignItems: "center"
    },
    blockView: {
        height: height * 0.14,
        width: width * 0.3,
        alignSelf: "center",
        // backgroundColor: "green",
        justifyContent: "space-between",
        alignItems: "center"
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
})