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
        key: 1,
        coin: "Jade Green",

    },
    {
        key: 2,
        coin: "Rose Gold",

    },
    {
        key: 3,
        coin: "Obsidian",

    },
    {
        key: 4,
        coin: "Rubery",

    },
    {
        key: 4,
        coin: "James",

    },
    {
        key: 4,
        coin: "Anderson",

    },
]

const CARDATA = [
    {
        key: 1,
        coin: "Card Cashback",
        percent: "20"
    },
    {
        key: 2,
        coin: "Airport Lounge",
        percent: "20"
    },
    {
        key: 3,
        coin: "Spotimax",
        percent: "20"
    },
    {
        key: 4,
        coin: "Card Cashback",
        percent: "20"
    },
    {
        key: 5,
        coin: "Airport Lounge",
        percent: "20"
    },
    {
        key: 6,
        coin: "Spotimax",
        percent: "20"
    },
]

const Card = (props) => {
    const [listItem, setItem] = useState("Jade Green")

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

    const renderImage = () => {
        return (
            <View style={styles.imgView}>
                <Image source={ImagePath.VCARD} resizeMode="contain" style={{ height: height * 0.3, width: width * 0.9 }} />
            </View>
        )
    }



    const renderDataModalSend = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => { setItem(item.coin) }} style={styles.mainContainer}>
                    <Text style={{ color: listItem === item.coin ? "#2E62F8" : "#A3A3B2", fontSize: height / 75, fontFamily: FONTS.PoppinsRegular }}>{item.coin}</Text>
                </TouchableOpacity>
                <View style={{
                    height: height * 0.001,
                    width: width * 0.2,
                    backgroundColor: listItem === item.coin ? "#2E62F8" : "#EBEEF2",
                }}></View>
                <View style={styles.border}></View>
            </View>
        )
    }

    const nameVIew = () => {
        return (
            <View style={styles.nameVIew}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 40, fontFamily: FONTS.PoppinsSemiBold }}>Jade Green</Text>
                <Text style={{ color: "#2C2C4E", fontSize: height / 57, fontFamily: FONTS.PoppinsSemiBold }}>Amet minim mollit non deserunt</Text>
            </View>
        )
    }

    const cardList = () => {
        return (
            <View style={styles.cardlistParentModal}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 48, fontFamily: FONTS.PoppinsSemiBold }}>Card Benefits</Text>
                <FlatList
                    data={CARDATA}
                    nestedScrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => cardData(item)}
                    contentContainerStyle={{ marginTop: height * 0.01 }}
                />
            </View>
        )
    }

    const cardData = ({ item }) => {
        return (
            <View style={styles.cardListlistView}>
                <TouchableOpacity style={styles.cardmainContainer}>
                    <ImageBackground source={ImagePath.CARDLISTBACK} resizeMode="contain" style={{ paddingVertical: 30, justifyContent: "space-between", alignItems: "center", height: height * 0.2, width: width * 0.3 }} >
                        <ImageBackground source={ImagePath.SECONDLISTBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: height * 0.06, width: width * 0.18 }} >
                            <Text style={{ color: "#191919", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>{item.percent}%</Text>
                        </ImageBackground>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 80, fontFamily: FONTS.PoppinsSemiBold }}>{item.coin}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    const renderInfo = () => {
        return (
            <View style={styles.infoView}>
                <View style={styles.txtView}>
                    <Text style={{ color: "#191919", fontSize: height / 55, fontFamily: FONTS.PoppinsBold }}>Card Information</Text>
                </View>
                <View style={styles.heading}>
                    <View style={styles.txtView}>
                        <Text style={{ color: "#191919", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Fees</Text>
                    </View>
                </View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Monthly Fees</Text>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>No Charge</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Annual Fees</Text>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>No Charge</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Delivery Fees</Text>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>No Charge</Text>
                </View>
                <View style={styles.heading}>
                    <View style={styles.txtView}>
                        <Text style={{ color: "#191919", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Limits</Text>
                    </View>
                </View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Free ATM Limit</Text>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>$800</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.superSubHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Perfect Interbank Rates{'\n'}Monthly Limit{'\n'}(0.50% thereafter)</Text>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>$800</Text>
                </View>
                <View style={styles.heading}>
                    <View style={styles.txtView}>
                        <Text style={{ color: "#191919", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Card</Text>
                    </View>
                </View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Card Type</Text>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Platinum</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Materia</Text>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Metal</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Contactless Payment</Text>
                    <Image source={ImagePath.TICK} resizeMode="contain" style={{ height: height * 0.04, width: width * 0.04 }} />
                </View>
                <View style={styles.border}></View>
                <View style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Pay anywhere Visa is accepted</Text>
                    <Image source={ImagePath.TICK} resizeMode="contain" style={{ height: height * 0.04, width: width * 0.04 }} />
                </View>
                <View style={styles.heading}>
                    <View style={styles.txtView}>
                        <Text style={{ color: "#191919", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Visa Card Terms & Conditions</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate("TermsAndConditions")} style={styles.subHeading}>
                    <Text style={{ color: "#2C3A4B", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>Terms & Conditions</Text>
                    <Image source={ImagePath.FORWARDARROW} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.02 }} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                Drawer={true}
                HeaderTitle={true}
                Title="Select Card"
                onDrawerPress={() => props.navigation.openDrawer()}
                rightIcon={true}
                RightIconTwoPress={() => props.navigation.navigate("HelpCenter")}
                RightIconTwo={true}
                RightIconPress={() => props.navigation.navigate("Pay")}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingTop: 10, marginBottom: height * 0.12, height: height * 1, width: width * 1, }}>
                {renderList()}
                {renderImage()}
                <View style={{ justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                    <CustomButton
                        title="Get Card"
                        ButtonPress={() => props.navigation.navigate("SelectCardApplied")}
                    />
                </View>
                {nameVIew()}
                {cardList()}
                {renderInfo()}
                {/* {nameVIew()} */}
            </ScrollView>

        </SafeAreaView>
    )
}

export default Card

const styles = StyleSheet.create({
    listParentModal: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    cardlistParentModal: {
        height: height * 0.26,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "red",

    },
    imgView: {
        height: height * 0.32,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    listView: {
        height: height * 0.1,
        width: width * 0.23,
        // paddingVertical: 10,
        // backgroundColor: "pink"
    },
    cardListlistView: {
        height: height * 0.27,
        width: width * 0.35,
        // backgroundColor: "pink"
    },
    infoView: {
        // height: height * 0.2,
        width: width * 1,
        // backgroundColor: "pink",
        marginTop: height * 0.01
    },
    amtView: {
        height: height * 0.09,
        width: width * 0.25,
        // backgroundColor: "black",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    border: {
        height: height * 0.001,
        width: width * 1,
        alignSelf: "center",
        backgroundColor: "#EBEEF2",
        // marginTop: height * 0.01
    },
    nameVIew: {
        height: height * 0.2,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center"
    },
    txtView: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center"
    },
    subHeading: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
        // alignItems: "center"
    },
    superSubHeading: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
        // alignItems: "center"
    },
    heading: {
        height: height * 0.05,
        width: width * 1,
        backgroundColor: "#F5F5F5",
        alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center"
    },
    itemView: {
        height: height * 0.09,
        width: width * 0.3,
        justifyContent: "center",
        // backgroundColor: "lightgreen",
        // flexDirection: "row"
    },
    mainContainer: {
        height: height * 0.06,
        width: width * 0.2,
        justifyContent: "center",
        // backgroundColor: "green",
        alignItems: "center"
    },
    cardmainContainer: {
        height: height * 0.2,
        width: width * 0.3,
        justifyContent: "center",
        // backgroundColor: "green",
        alignItems: "center"
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
})