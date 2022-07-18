import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
import { CountryCode } from '../../utils/CountryCode';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const AddCard = (props) => {

    const renderDetails = () => {
        return (
            <View style={styles.DetailParent}>
                <View style={styles.usdView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>Card Details</Text>
                </View>
                <View style={styles.borderModal}></View>
                <View style={styles.cardView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>Card Number</Text>
                </View>
                <View style={styles.cardNumView}>
                    <TextInput style={{ marginLeft: width * 0.02, width: width * 0.65, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }} />
                    <View style={styles.imgView}>
                        <Image source={ImagePath.MASTERCARD} resizeMode="contain" style={{ height: 30, width: 30 }} />
                    </View>
                </View>
                <View style={styles.cardView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>Exp. Date</Text>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.cardDateView}>
                        <TextInput style={{ marginLeft: width * 0.02, width: width * 0.65, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }} />
                    </View>
                    <View style={styles.cardDateView}>
                        <TextInput style={{ marginLeft: width * 0.02, width: width * 0.65, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }} />
                    </View>
                </View>
                <View style={styles.cvViw}>
                    <View style={styles.txtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>Exp. Date</Text>
                    </View>
                    <View style={styles.txtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>CVV</Text>
                    </View>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.cardDateView}>
                        <TextInput style={{ marginLeft: width * 0.02, width: width * 0.65, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }} />
                    </View>
                    <View style={styles.cardDateView}>
                        <TextInput style={{ marginLeft: width * 0.02, width: width * 0.65, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }} />
                    </View>
                </View>
                <View style={styles.cardView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>Card Holder Name</Text>
                </View>
                <View style={styles.cardNumView}>
                    <TextInput style={{ marginLeft: width * 0.02, width: width * 0.65, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }} />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Add Credit or Debit Card"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingVertical: 5, height: height * 1, width: width * 1, }}>
                {renderDetails()}
            </ScrollView>
            <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                <CustomButton
                    title="Add Card"
                    ButtonPress={() => props.navigation.navigate("AddCardOtp")}
                />
            </View>

        </SafeAreaView>
    )
}

export default AddCard

const styles = StyleSheet.create({
    DetailParent: {
        height: height * 0.6,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    usdView: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "grey",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    txtView: {
        height: height * 0.04,
        width: width * 0.42,
        // backgroundColor: "grey",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    cardView: {
        marginTop: height * 0.01,
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "grey",
        alignSelf: "center",
        justifyContent: "center"
    },
    cvViw: {
        marginTop: height * 0.01,
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "lightgrey",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputView: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "grey",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    imgView: {
        height: height * 0.06,
        width: width * 0.2,
        // backgroundColor: "grey",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    cardNumView: {
        height: height * 0.06,
        width: width * 0.9,
        backgroundColor: "#F4F4F4",
        borderRadius: 10,
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    cardDateView: {
        height: height * 0.06,
        width: width * 0.42,
        backgroundColor: "#F4F4F4",
        borderRadius: 10,
        // alignSelf: "center",
        // justifyContent: "space-between",
        // flexDirection: "row",
        // alignItems: "center",
    },
    borderModal: {
        height: height * 0.002,
        width: width * 1,
        backgroundColor: "#DFE2E4",
        // backgroundColor: "lightgrey",
        alignSelf: "center",
        marginTop: height * 0.01
    },
})