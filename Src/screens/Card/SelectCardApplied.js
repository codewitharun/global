import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const SelectCardApplied = (props) => {
    const [btn, setBtn] = useState("Physical")

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

    const nameVIew = () => {
        return (
            <View style={styles.nameVIew}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 40, fontFamily: FONTS.PoppinsSemiBold }}>Jade Green</Text>
                <Text style={{ color: "#2C2C4E", fontSize: height / 57, fontFamily: FONTS.PoppinsSemiBold }}>View or Change</Text>
            </View>
        )
    }

    const renderCard = () => {
        return (
            <View style={styles.cardView}>
                <Image source={ImagePath.VCARD} resizeMode="contain" style={{ height: height * 0.3, width: width * 0.9 }} />
                <View style={styles.stepView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>You have 1 more step to finish</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsMedium }}>your card application</Text>
                </View>
                <View style={styles.reviewView}>
                    <View style={styles.reviewImgView}>
                        <Image source={ImagePath.REVIEW} resizeMode="contain" style={{ height: height * 0.06, width: width * 0.06, }} />
                    </View>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsMedium }}>Review & Update Name on Card</Text>
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
                Title="You're Applying For"
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height * 0.03, paddingVertical: 10, height: height * 1, width: width * 1, }}>
                {renderBtn()}
                {nameVIew()}
                {renderCard()}
                <View style={{ bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.2, width: width * 1 }}>
                    <CustomButton
                        title="Continue"
                        ButtonPress={() => props.navigation.navigate("ReviewUpdate")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SelectCardApplied

const styles = StyleSheet.create({
    btnView: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "center"
    },
    nameVIew: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    stepView: {
        height: height * 0.1,
        marginTop: height * 0.015,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center"
    },
    reviewView: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center"
    },
    reviewImgView: {
        height: height * 0.1,
        width: width * 0.1,
        // backgroundColor: "blue",
        alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center"
    },
    cardView: {
        height: height * 0.5,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        // justifyContent: "center",
        alignItems: "center"
    }
})