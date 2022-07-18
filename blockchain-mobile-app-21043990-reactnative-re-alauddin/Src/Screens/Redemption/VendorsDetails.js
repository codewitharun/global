import { StyleSheet, ActivityIndicator, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const { height, width } = Dimensions.get("screen")

const VendorsDetails = (props) => {
    const [id, setId] = useState(props?.route?.params?.Id)
    const [isLoading, setIsLoading] = useState(false);
    const [loader, setLoader] = useState(false);
    const [UserId, setUserId] = useState(props?.route?.params?.UserId)
    const [detail, setDetail] = useState("")
    const [amount, setAmount] = useState("")
    const [walletAddres, setWalletAddress] = useState("")
    const [balance, setBalance] = useState("")
    const [errorEmail, setErrorEmail] = useState("");
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        VendorDetailAPI()
        walletAddresAPI()
    }, [])

    const VendorDetailAPI = async () => {
        const Value = await AsyncStorage.getItem("token")
        setLoader(true)
        axios({
            method: "GET",
            url: `https://java-blockchainapp.mobiloitte.org/account/admin/user-management/user-details?userId=${id}`,
            headers: {
                Authorization: `Bearer ${Value}`,
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            console.log("@@@ Response Vendor Detail API ======", res)
            if (res.data.status === 200) {
                setDetail(res?.data?.data)
                setLoader(false)
            } else {
                alert("Something Went Wrong")
                setLoader(false)
            }
        }).catch(async (err) => {
            console.log("@@@ Error Vendor Detail APi =====", err)
            setLoader(false)
        })
    }

    const walletAddresAPI = async () => {
        const Value = await AsyncStorage.getItem("token")
        axios({
            method: "GET",
            url: `https://java-blockchainapp.mobiloitte.org/wallet/wallet/get-address-for-redeem?fkUserId=${id}&coinName=GRET`,
            headers: {
                Authorization: `Bearer ${Value}`,
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            console.log("@@@ WalletAdress API ======", res)
            if (res?.data?.status === 200) {
                setWalletAddress(res?.data?.data)
                setBalance(res?.data?.data?.walletBalance)
            } else {
                alert("Something Went Wrong")
            }
        }).catch(async (err) => {
            console.log("@@@ Error WalletAdress APi =====", err)
        })
    }

    const RedeemApi = async () => {
        const Value = await AsyncStorage.getItem("token")
        setIsLoading(true)
        axios({
            method: "POST",
            url: `https://java-blockchainapp.mobiloitte.org/wallet/wallet/redeem-gret-amount-transfer-to-user?amount=${amount}&coinName=GRET&fromUserId=${UserId}&toUserId=${id}`,
            headers: {
                Authorization: `Bearer ${Value}`,
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            console.log("@@@ RedeemApi Response ======", res)
            if (res?.data?.status === 200) {
                // setWalletAddress(res.data.data)
                setIsLoading(false)
            } else {
                alert("Something Went Wrong")
                setIsLoading(false)
            }
        }).catch(async (err) => {
            console.log("@@@ Error RedeemApi =====", err)
            alert("Something Went Wrong")
            setIsLoading(false)
        })
    }

    const validateAmount = (txt) => {
        console.log("@@@ Txt ====>", txt <= 0)
        if (txt === "") {
            setErrorEmail("*Please enter Amount.");
            setDisable(true)
        } else if (txt <= 0) {
            setErrorEmail("*Please enter amount greater than zero.");
            setDisable(true)
        } else if (txt > balance) {
            setErrorEmail("*Please enter amount less than Balance.");
            setDisable(true)
        } else {
            setErrorEmail(null);
            setDisable(false)
        }
    };

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                {
                    loader ? (
                        <View style={[styles.container, styles.horizontal]}>
                            <ActivityIndicator size="large" color="#244273" />
                        </View>
                    ) :
                        <>
                            <View style={styles.qrView}>
                                <Image source={{ uri: detail?.logo }} resizeMode="contain" style={styles.qrImg} />
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.detailView}>
                                <View style={styles.nameView}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameTxt}>Name :</Text>
                                    </View>
                                    <View style={styles.product}>
                                        <Text style={styles.productTxt}>{detail?.firstName}</Text>
                                    </View>
                                </View>
                                <View style={styles.addressView}>
                                    <View style={styles.address}>
                                        <Text style={styles.nameTxt}>Address :</Text>
                                    </View>
                                    <View style={styles.product}>
                                        <Text style={styles.productTxt}>{detail?.address}</Text>
                                    </View>
                                </View>
                                <View style={styles.nameView}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameTxt}>Phone Number :</Text>
                                    </View>
                                    <View style={styles.product}>
                                        <Text style={styles.productTxt}>{detail?.phoneNo}</Text>
                                    </View>
                                </View>
                                <View style={styles.nameView}>
                                    <View style={styles.name}>
                                        <Text style={styles.nameTxt}>Email :</Text>
                                    </View>
                                    <View style={styles.product}>
                                        <Text style={styles.productTxt}>{detail?.email}</Text>
                                    </View>
                                </View>
                                <View style={styles.lableView}>
                                    <Text style={styles.labelTxt}>Vendor GRET Address:</Text>
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput editable={false} value={walletAddres?.walletAddress} placeholder='Amount' style={{ height: height * 0.1, width: width * 0.75 }} />
                                </View>
                                <View style={styles.lableView}>
                                    <Text style={styles.labelTxt}>Enter GRET Amount to Redeem:</Text>
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput onChangeText={(txt) => { setAmount(txt), validateAmount(txt) }} placeholder='Amount' style={{ height: height * 0.1, width: width * 0.75 }} />
                                </View>
                                <View style={{ height: height * 0.05, width: width * 0.9 }}>
                                    {errorEmail !== null ? (
                                        <View
                                            style={{
                                                height: height * 0.04,
                                                width: "90%",
                                                alignSelf: "center",
                                                //    backgroundColor: "green",
                                            }}
                                        >
                                            <Text style={{ color: "red", fontSize: 12 }}>{errorEmail}</Text>
                                        </View>
                                    ) : null}
                                </View>
                                <View style={styles.balanceView}>
                                    <Text style={styles.balaceTxt}>Available Balance : </Text>
                                    <Text style={styles.gretTxt}>{walletAddres?.walletBalance} GRET</Text>
                                </View>
                            </View>
                            <View style={styles.buttonView}>
                                <CustomButton
                                    title={
                                        isLoading ? (
                                            <ActivityIndicator size="small" color="white" />
                                        ) : (
                                            "Redeem"
                                        )
                                    }
                                    Disabled={disable}
                                    ButtonPress={() =>
                                        RedeemApi()
                                        // props.navigation.navigate("DashBoard")
                                    }
                                />
                            </View>
                        </>
                }
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"Vendor Detail"}
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.goBack()}
                />
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    <ScrollView>
                        {renderQr()}
                    </ScrollView>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default VendorsDetails

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    detailView: {
        height: height * 0.68,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center"
    },
    nameView: {
        height: height * 0.03,
        width: width * 0.9,
        marginTop: height * 0.03,
        // backgroundColor: "red",
        flexDirection: "row"
    },
    addressView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        marginTop: height * 0.03,
        flexDirection: "row"
    },
    lableView: {
        width: width * 0.9,
        height: height * 0.09,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    balanceView: {
        width: width * 0.9,
        height: height * 0.06,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // backgroundColor: "red",
        flexDirection: "row"
    },
    buttonView: {
        // backgroundColor: "pink",
        height: height * 0.15,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.02
    },
    labelTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 53,
        color: COLOR.REMEBERTEXT,
        alignSelf: "flex-start"
    },
    balaceTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 53,
        color: COLOR.REMEBERTEXT,
        // alignSelf: "flex-start"
    },
    gretTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 53,
        color: COLOR.BUTTONCOLOR,
        // alignSelf: "flex-start"
    },
    inputView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.9,
        // shadowRadius: 3,
        // elevation: 3,
        marginTop: height * 0.01,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        // flexDirection: "row",
        alignItems: "center",
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: "space-around"
    },
    name: {
        height: height * 0.03,
        width: width * 0.4,
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    address: {
        height: height * 0.03,
        width: width * 0.4,
        // backgroundColor: "pink",
        justifyContent: "center"
    },
    product: {
        height: height * 0.03,
        width: width * 0.5,
        // backgroundColor: "blue",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    nameTxt: {
        fontFamily: "Poppins-Medium",
        fontSize: height / 56,
        color: "black"
    },
    productTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 56,
        color: COLOR.lightGrey
    },
    qrImg: {
        height: height * 0.15,
        width: width * 0.5
    },
    qrView: {
        height: height * 0.19,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.01,
        // backgroundColor: "yellow"
    },
    border: {
        height: height * 0.001,
        width: width * 0.9,
        backgroundColor: COLOR.RECTANGLE,
        alignSelf: "center",
        marginTop: height * 0.027
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.2,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})