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


const CardTransaction = (props) => {

    const renderName = () => {
        return (
            <View style={styles.heder}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>My Cards</Text>
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
                    contentContainerStyle={{ paddingBottom: height * 0.05 }}
                />
            </View>
        )
    }


    const renderCard = () => {
        return (
            <View style={styles.cardView}>
                <Image source={ImagePath.CARDNEW} resizeMode="contain" style={{ height: height * 0.3, width: width * 0.9 }} />
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
                {renderCard()}
                {renderTransactionList()}
            </ScrollView>

        </SafeAreaView>
    )
}

export default CardTransaction

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
    cardView: {
        height: height * 0.3,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        // justifyContent: "center",
        alignItems: "center"
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