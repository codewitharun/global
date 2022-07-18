import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const AddProfile = (props) => {

    const renderDetail = () => {
        return (
            <View style={styles.detailView}>
                <View style={styles.headeing}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Please Enter Details Below</Text>
                </View>
                <View style={styles.amtView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Phone</Text>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.searchparent}>
                        <View style={[styles.input, styles.shadowProp]}>
                            <TextInput
                                placeholder='(603) 555-0123'
                                placeholderTextColor={"#B3B4B7"}
                                style={{
                                    fontSize: height / 50,
                                    color: "black",
                                    fontFamily: FONTS.PoppinsSemiBold
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.phoneView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Email</Text>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.searchparent}>
                        <View style={[styles.input, styles.shadowProp]}>
                            <TextInput
                                placeholder='tranthuy.nute@gmail.com'
                                placeholderTextColor={"#B3B4B7"}
                                style={{
                                    fontSize: height / 50,
                                    color: "black",
                                    fontFamily: FONTS.PoppinsSemiBold
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.phoneView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Enter Amount</Text>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.searchparent}>
                        <View style={[styles.input, styles.shadowProp]}>
                            <TextInput

                                placeholderTextColor={"#B3B4B7"}
                                style={{
                                    fontSize: height / 50,
                                    color: "black",
                                    fontFamily: FONTS.PoppinsSemiBold
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
        </SafeAreaView>
    )
}

export default AddProfile

const styles = StyleSheet.create({
    detailView: {
        height: height * 0.6,
        width: width * 1,
        marginTop: height * 0.05,
        // backgroundColor: "pink"
    },
    amtView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    phoneView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end",
        marginTop: height * 0.02
    },
    searchView: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    headeing: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "center"
    },
    searchparent: {
        height: height * 0.07,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: height * 0.04,
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
})