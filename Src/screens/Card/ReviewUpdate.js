import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const ReviewUpdate = (props) => {
    const [check, setCheck] = useState(true)

    const renderName = () => {
        return (
            <View style={styles.modalHeader}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>Name on Card</Text>
                <View style={styles.borderModal}></View>
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

    const renderReferalCode = () => {
        return (
            <View style={styles.codeView}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Your Referral Code</Text>
                <ImageBackground source={ImagePath.COPYBACK} resizeMode="contain" style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 15, height: height * 0.07, width: width * 0.9 }} >
                    <TextInput style={{ height: height * 0.05, width: width * 0.8, justifyContent: "center", fontSize: height / 62, color: "#2C2C4E", fontFamily: FONTS.PoppinsRegular }} />
                </ImageBackground>
            </View>
        )
    }

    const renderCheck = () => {
        return (
            <View style={{ marginTop: height * 0.03, justifyContent: "space-between", flexDirection: "row", alignItems: "flex-start", height: height * 0.1, width: width * 0.9, alignSelf: "center" }}>
                <TouchableOpacity onPress={() => setCheck(check ? false : true)} style={{ justifyContent: "flex-start", height: height * 0.05, width: width * 0.1, alignSelf: "center" }}>
                    <Image source={check ? ImagePath.CHECK : ImagePath.UNCHECK} resizeMode="contain" style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: "center", height: height * 0.05, width: width * 0.8, alignSelf: "center" }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#2C2C4E", fontSize: height / 60 }}>you’re agree to our<Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#1774FF", fontSize: height / 60 }}> Privacy Policy</Text><Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#2C2C4E", fontSize: height / 56 }}> and</Text></Text>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#1774FF", fontSize: height / 60 }}>Terms and conditions</Text>
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
                Title="Review & Update"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingVertical: 10, height: height * 1, width: width * 1, }}>
                {renderName()}
                {renderCard()}
                {renderReferalCode()}
                {renderCheck()}
                <View style={{ bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                    <CustomButton
                        title="Save & Continue"
                        ButtonPress={() => props.navigation.navigate("CardDetails")}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ReviewUpdate

const styles = StyleSheet.create({
    modalHeader: {
        height: height * 0.12,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        // alignItems: "center"
    },
    borderModal: {
        height: height * 0.002,
        width: width * 1,
        backgroundColor: "#DFE2E4",
        // backgroundColor: "lightgrey",
        alignSelf: "center",
        marginTop: height * 0.03
    },
    cardView: {
        height: height * 0.3,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        // justifyContent: "center",
        alignItems: "center"
    },
    codeView: {
        height: height * 0.18,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },
})