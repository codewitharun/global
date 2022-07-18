import { StyleSheet, TouchableWithoutFeedback, Keyboard, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const ContactDetail = (props) => {

    const renderDetail = () => {
        return (
            <View style={styles.detailView}>
                <View style={styles.imgView}>
                    <View style={styles.img}>
                        <Image source={ImagePath.PROFILE} resizeMode="contain" style={{ height: 65, width: 65 }} />
                    </View>
                    <View style={styles.name}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 40, fontFamily: FONTS.PoppinsBold }}>Theresa Webb</Text>
                        <Text style={{ color: "#333333", fontSize: height / 53, fontFamily: FONTS.PoppinsRegular }}>Kumasi, Ghana</Text>
                    </View>
                </View>
                <View style={styles.detail}>
                    <ImageBackground source={ImagePath.DETAILBACK} resizeMode="stretch" style={{ justifyContent: "center", height: height * 0.09, width: "100%" }}>
                        <View style={styles.mobile}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsBold }}>Mobile</Text>
                            <Text style={{ color: "#333333", fontSize: height / 73, fontFamily: FONTS.PoppinsRegular }}>+919325498459</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.detail}>
                    <ImageBackground source={ImagePath.DETAILBACK} resizeMode="stretch" style={{ justifyContent: "center", height: height * 0.09, width: "100%" }}>
                        <View style={styles.mobile}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsBold }}>Email</Text>
                            <Text style={{ color: "#333333", fontSize: height / 73, fontFamily: FONTS.PoppinsRegular }}>re-ravi@gmail.com</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.detail}>
                    <ImageBackground source={ImagePath.DETAILBACK} resizeMode="stretch" style={{ justifyContent: "center", height: height * 0.09, width: "100%" }}>
                        <View style={styles.mobile}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsBold }}>Crypto address</Text>
                            <Text style={{ color: "#333333", fontSize: height / 73, fontFamily: FONTS.PoppinsRegular }}>1BvBMSEYstWetqTFn5Au4m4GFg7xJaN</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.amtView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Enter Amount</Text>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.searchparent}>
                        <View style={[styles.input, styles.shadowProp]}>
                            <TextInput
                                placeholderTextColor={"#B3B4B7"}
                                style={{
                                    fontSize: height / 50,
                                    color: "black"
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <KeyboardAwareScrollView enableOnAndroid={true}
                enableAutomaticScroll={(Platform.OS === 'ios')}
                extraHeight={130} extraScrollHeight={130}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <Header
                    backIcon={true}
                    onBackPress={() => props.navigation.goBack()}
                    HeaderTitle={true}
                    Title="Send Bitcoin"
                />
                {renderDetail()}
                <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                    <CustomButton
                        title="Send Crypto"
                        ButtonPress={() => props.navigation.navigate("Home")}
                    />
                </View>
                {/* </TouchableWithoutFeedback> */}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ContactDetail

const styles = StyleSheet.create({
    detailView: {
        height: height * 0.6,
        width: width * 1,
        marginTop: height * 0.05,
        // backgroundColor: "pink"
    },
    imgView: {
        height: height * 0.13,
        width: width * 1,
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "center"
    },
    img: {
        height: height * 0.1,
        width: width * 0.23,
        // backgroundColor: "yellow",
        alignSelf: "center"
    },
    name: {
        height: height * 0.07,
        width: width * 0.67,
        // backgroundColor: "green",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    detail: {
        height: height * 0.095,
        width: width * 1,
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "center"
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
        // borderBottomWidth: 0,
        // shadowColor: '#000000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.9,
        // shadowRadius: 3,
        // elevation: 3,
        // position: 'absolute',
        // bottom: 10
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
    mobile: {
        height: height * 0.06,
        width: width * 0.8,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    amtView: {
        height: height * 0.05,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    searchView: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
})