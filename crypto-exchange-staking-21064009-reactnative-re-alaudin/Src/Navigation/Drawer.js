import { StyleSheet, Text, View, Button, Image, Dimensions, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTab from './BottomTab'
import { ImagePath } from '../Utils/ImagePath'
import { FONTS } from '../Utils/FontFamily'
const { height, width } = Dimensions.get("screen");

const Draw = createDrawerNavigator()

const Drawer = (props) => {

    function CustomDrawerContent({ navigation }) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.headerView}>
                    <View style={styles.avatarView}>
                        <View style={styles.imgView}>
                            <Image source={ImagePath.AVATAR} resizeMode="contain" style={{ height: height * 0.13, width: width * 0.2 }} />
                        </View>
                        <View style={styles.nameVeiw}>
                            <Text style={{ marginLeft: width * 0.03, fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Vijay Shankar</Text>
                            <Text style={{ marginLeft: width * 0.03, fontFamily: FONTS.PoppinsRegular, color: "#FFFFFF", fontSize: height / 65 }}>ID : 4987391822</Text>
                        </View>
                        <View style={styles.verifyView}>
                            <TouchableOpacity>
                                <ImageBackground source={ImagePath.VERIFY} resizeMode="contain" style={{ height: height * 0.05, width: width * 0.15, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 75 }}>Verified</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.detailView}>
                        <View style={styles.keyView}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 65 }}>Email</Text>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 65 }}>Mobile Number</Text>
                        </View>
                        <View style={styles.valueView}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#1E1E1E", fontSize: height / 75 }}>Vijayshankar@gmail.com</Text>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#1E1E1E", fontSize: height / 75 }}>4987391822</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>KYC</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Add Bank Details</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Security</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Withdraw/Deposit History</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Add INR/Payment Method</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Fee Settings</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Trade Statement</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>About Us</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionView}>
                        <TouchableOpacity style={styles.optionInside}>
                            <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 55 }}>Logout</Text>
                            <Image source={ImagePath.GO} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03 }} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <Draw.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: '#141414',
                width: "100%",
            },
        }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Draw.Screen screenOptions={{ headerShown: false }}
                name="BottomTab" component={BottomTab} {...props} />
        </Draw.Navigator>
    )
}

export default Drawer

const styles = StyleSheet.create({
    headerView: {
        height: height * 0.23,
        width: width * 1,
        backgroundColor: "#3F3F3F",
        justifyContent: "center",
        alignItems: "center"
    },
    optionView: {
        height: height * 0.08,
        width: width * 1,
        backgroundColor: "#1E1E1E",
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.005
    },
    avatarView: {
        height: height * 0.13,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center"
    },
    detailView: {
        height: height * 0.08,
        width: width * 0.9,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "flex-end",
        // backgroundColor: "pink"
    },
    imgView: {
        height: height * 0.13,
        width: width * 0.2,
        alignSelf: "center",
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    nameVeiw: {
        height: height * 0.06,
        width: width * 0.5,
        alignSelf: "center",
        // backgroundColor: "pink",
        justifyContent: "space-between",
        // alignItems: "center"
    },
    verifyView: {
        height: height * 0.13,
        width: width * 0.2,
        alignSelf: "center",
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    keyView: {
        height: height * 0.06,
        width: width * 0.45,
        alignSelf: "center",
        // backgroundColor: "green",
        justifyContent: "space-between",
        // alignItems: "center"
    },
    valueView: {
        height: height * 0.06,
        width: width * 0.45,
        alignSelf: "center",
        // backgroundColor: "grey",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    optionInside: {
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        // backgroundColor: "grey",
        justifyContent: "space-between",
        alignItems: "center"
    },
})