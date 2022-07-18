import {
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    View,
    Image,
    Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ImagePath } from "../../utils/ImagePath";
// import { Image, Text } from "@rneui/themed";
import { COLOR } from "../../utils/Color";
import Header from "../../Components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CustomButton from "../../Components/CustomButton";

const { height, width } = Dimensions.get("screen");

const KycSuccess = (props) => {
    const [status, setStatus] = useState("")
    const [userDetail, setUserDetail] = useState("")
    const [statusMsg, setStatusMsg] = useState("")
    const [kycDetail, setKycDetail] = useState("")
    const [kycDocument, setKycDocument] = useState([])
    const [statuses, setStatuses] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        // const unsubscribe = props.navigation.addListener("focus", () => {
        //     GetAccountApi()
        //     GetKycDetails()
        // });
        GetKycDetails()
        GetAccountApi()
        // return unsubscribe;
    }, [])

    // ========= GetAccount Pass API ====== //
    const GetAccountApi = async () => {
        const Value = await AsyncStorage.getItem("token");
        setIsLoading(true);
        axios({
            method: "GET",
            url: "https://java-blockchainapp.mobiloitte.org/account/my-account",
            headers: {
                authorization: `Bearer ${Value}`,
                "content-type": "application/json"
            },
        })
            .then(async (response) => {
                console.log("====== GetAccountApi Response ======", response);
                if (response.data.status === 200) {
                    setStatus(response?.data?.data?.kyc?.kycStatus)
                    setUserDetail(response?.data?.data)
                    if (response?.data?.data?.kyc === null) {
                        setStatusMsg("PENDING")
                    } else {
                        setStatusMsg(response?.data?.data?.kyc?.kycStatus)
                    }
                    setIsLoading(false);
                } else {
                    alert("No Data Found");
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log("===== GetAccountApi Catch Error ======", err);
                setIsLoading(false);
            });
    };

    // ========= GetAccount Pass API ====== //
    const GetKycDetails = async () => {
        const Value = await AsyncStorage.getItem("token");
        setLoader(true);
        axios({
            method: "GET",
            url: "https://java-blockchainapp.mobiloitte.org/account/get-all-kyc-details",
            headers: {
                authorization: `Bearer ${Value}`,
                "content-type": "application/json"
            },
        })
            .then(async (response) => {
                console.log("====== GetKycDetails Response ======", response);
                setKycDetail(response?.data?.data)
                setKycDocument(response?.data?.data?.document[0])
                if (response?.data?.data?.kycStatus === "PENDING") {
                    setStatuses("Under Review")
                } else if (response?.data?.data?.kycStatus === "ACCEPTED") {
                    setStatuses("Approved")
                } else (
                    setStatuses("Rejected")
                )
                setLoader(false);
            })
            .catch((err) => {
                console.log("===== GetKycDetails Catch Error ======", err);
                setLoader(false);
            });
    };

    function renderMiddle() {
        return (
            <View>
                {isLoading ? (
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#244273" />
                    </View>
                ) :
                    <View style={styles.parentViewQr}>
                        <View style={styles.kycTop}>
                            <View style={styles.basicDetail}>
                                <Text style={styles.KycTxt}>KYC's / <Text style={styles.KycNameTxt}>{userDetail?.firstName + " " + userDetail?.lastName}</Text></Text>
                                <Text style={styles.idTxt}>Application ID : <Text style={styles.applicationIdTxt}>{userDetail?.kyc?.document[0]?.docIdNumber}</Text></Text>
                            </View>
                            <View style={styles.timeView}>
                                <Text style={styles.idTxt}>{moment(kycDetail?.createTime).format("MMM DD, YYYY, hh:mm A")}</Text>
                            </View>
                        </View>
                        <View style={styles.personalView}>
                            <Text style={styles.personalTxt}>Appication Info</Text>
                        </View>
                        <View style={styles.detailView}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Submitted By</Text>
                                <Text style={styles.fieldTxt}>{userDetail?.firstName + " " + userDetail?.lastName}</Text>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Submitted At</Text>
                                <Text style={styles.fieldTxt}>{moment(kycDetail?.createTime).format("MMM DD, YYYY, hh:mm: A")}</Text>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Status</Text>
                                <View style={styles.reviewParent}>
                                    <View style={styles.imgViewParent}>
                                        <Image source={statuses === "Under Review" ? ImagePath.UNDER_REVIEW : statuses === "Approved" ? ImagePath.COMPLETED : ImagePath.REJECTED} resizeMode="contain" style={{ height: 20, width: 20 }} />
                                    </View>
                                    <Text style={[styles.fieldTxt, { color: statuses === "Under Review" ? "#F3AC4E" : statuses === "Approved" ? COLOR.GREEN : "red" }]}>{statuses}</Text>
                                </View>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Accepted Time</Text>
                                <Text style={styles.fieldTxt}>{moment(kycDetail?.createTime).format("MMM DD, YYYY, hh:mm: A")}</Text>
                            </View>

                        </View>
                        <View style={styles.personalView}>
                            <Text style={styles.personalTxt}>Uploaded Documents</Text>
                        </View>
                        {
                            loader ? (
                                <View style={[styles.container, styles.horizontal]}>
                                    <ActivityIndicator size="large" color="#244273" />
                                </View>
                            ) :
                                <View style={styles.documetVIew}>
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTxt}>Document Type</Text>
                                        <Text style={styles.fieldTxt}>{kycDocument?.docName}</Text>
                                    </View>
                                    <View style={styles.border}></View>
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTxt}>Front Side</Text>
                                        <Image source={{ uri: kycDocument?.frontIdUrl }} resizeMode="contain" style={{ height: 50, width: 50 }} />
                                    </View>
                                    <View style={styles.border}></View>
                                    <View style={styles.section}>
                                        <Text style={styles.sectionTxt}>Back Side</Text>
                                        <Image source={{ uri: kycDocument?.backIdUrl }} resizeMode="contain" style={{ height: 50, width: 50 }} />
                                    </View>
                                </View>
                        }
                        <View style={styles.personalView}>
                            <Text style={styles.personalTxt}>Appication Information</Text>
                        </View>
                        <View style={styles.documentView}>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>First Name</Text>
                                <Text style={styles.fieldTxt}>{userDetail?.firstName}</Text>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Last Name</Text>
                                <Text style={styles.fieldTxt}>{userDetail?.lastName}</Text>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Email Address</Text>
                                <Text style={styles.fieldTxt}>{userDetail?.email}</Text>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Phone Number</Text>
                                <Text style={styles.fieldTxt}>{userDetail?.phoneNo}</Text>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Full Address</Text>
                                <Text style={styles.fieldTxt}>{userDetail?.address}</Text>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.section}>
                                <Text style={styles.sectionTxt}>Country of Residence</Text>
                                <Text style={styles.fieldTxt}>{userDetail?.country}</Text>
                            </View>
                            {/* <View style={styles.border}></View> */}
                        </View>
                        {
                            statuses === "Rejected" ?
                                <View style={styles.buttonView}>
                                    <CustomButton
                                        title="Resubmit"
                                        ButtonPress={() => props.navigation.navigate("Kyc")}
                                    />
                                </View>
                                :
                                null
                        }
                    </View>
                }
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground
                source={ImagePath.SPLASHBACK}
                resizeMode="cover"
                style={styles.backgroundImg}
            >
                <Header
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    title={"KYC Details"}
                    leftPress={() => props.navigation.replace("DashBoard")}
                />
                <ScrollView showsVerticalScrollIndicator={false} enableOnAndroid={true}>
                    {renderMiddle()}
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default KycSuccess;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1,
    },
    imgViewParent: {
        height: height * 0.04,
        width: width * 0.08,
        justifyContent: "center",
        // backgroundColor: "red"
    },
    buttonView: {
        height: height * 0.1,
        width: width * 1,
        justifyContent: "center",
        // backgroundColor: "red",
        alignItems: "center"
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        height: height * 1.5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // bottom: 40
    },
    reviewParent: {
        height: height * 0.05,
        // width: width * 0.32,
        // backgroundColor: "green",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    kycTop: {
        height: height * 0.14,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between",
        marginTop: height * 0.02
    },
    basicDetail: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "space-between"
        // flexDirection: "row"
    },
    detailView: {
        height: height * 0.29,
        width: width * 0.9,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.BUTTONCOLOR,
        // backgroundColor: "pink",
        alignSelf: "center",
        // flexDirection: "row"
    },
    documentView: {
        height: height * 0.43,
        width: width * 0.9,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.BUTTONCOLOR,
        // backgroundColor: "pink",
        alignSelf: "center",
        // bottom: 30
        // flexDirection: "row"
    },
    documetVIew: {
        height: height * 0.21,
        width: width * 0.9,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.BUTTONCOLOR,
        // backgroundColor: "pink",
        alignSelf: "center",
        // flexDirection: "row"
    },
    timeView: {
        height: height * 0.04,
        width: width * 0.9,
        // backgroundColor: "green",
        alignSelf: "center",
    },
    imgView: {
        height: height * 0.3,
        width: width * 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    statusView: {
        height: height * 0.1,
        width: width * 1,
        // backgroundColor: "red",
        justifyContent: "space-between",
        alignItems: "center"
    },
    currencyText: {
        height: height * 0.06,
        width: width * 0.4,
        justifyContent: "center",
    },
    tokenText: {
        // backgroundColor: "yellow",
        height: height * 0.06,
        width: width * 0.4,
        justifyContent: "center",
    },
    personalView: {
        height: height * 0.045,
        marginTop: height * 0.02,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "center"
    },
    section: {
        height: height * 0.07,
        width: width * 0.82,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    personalTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 55,
        color: COLOR.BUTTONCOLOR
    },
    sectionTxt: {
        fontFamily: "Poppins-Medium",
        fontSize: height / 70,
        color: "#707070"
    },
    fieldTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 65,
        color: COLOR.BUTTONCOLOR
    },
    codeTxt: {
        // backgroundColor: "pink",
        height: height * 0.06,
        width: width * 0.4,
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    dateTxt: {
        // backgroundColor: "pink",
        height: height * 0.075,
        width: width * 0.4,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statusTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 35,
        // color: ""
    },
    KycTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 35,
        color: "black"
    },
    KycNameTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 45,
        color: COLOR.BUTTONCOLOR
    },
    applicationIdTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 65,
        color: COLOR.BUTTONCOLOR
    },
    iconView: {
        // backgroundColor: "pink",
        height: height * 0.1,
        marginTop: height * 0.06,
        width: width * 0.7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    currencyView: {
        // backgroundColor: "red",
        height: height * 0.06,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    currencyViewOne: {
        // backgroundColor: "green",
        height: height * 0.03,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: height * 0.03,
    },
    amuntView: {
        // backgroundColor: "green",
        height: height * 0.03,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: height * 0.02,
    },
    trashView: {
        // backgroundColor: "green",
        height: height * 0.09,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: height * 0.01,
    },
    recieverView: {
        // backgroundColor: "pink",
        height: height * 0.09,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    currencyViewTwo: {
        // backgroundColor: "red",
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconInsideView: {
        // backgroundColor: "yellow",
        height: height * 0.1,
        width: width * 0.2,
        alignItems: "center",
    },
    copyImgView: {
        height: height * 0.03,
        width: width * 0.05,
        justifyContent: "flex-end",
        // backgroundColor: "green"
    },
    border: {
        height: height * 0.0015,
        width: width * 0.9,
        backgroundColor: COLOR.BUTTONCOLOR,
        alignSelf: "center",
        // marginTop: height * 0.015,
    },
    balnceView: {
        // backgroundColor: "green",
        height: height * 0.1,
        width: width * 0.35,
        alignItems: "center",
        justifyContent: "space-between",
    },
    balanceTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 50,
        color: COLOR.LABETEXT,
    },
    currency: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 53,
        color: COLOR.LABETEXT,
    },
    token: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 55,
        color: "black",
    },
    code: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 75,
        color: "black",
    },
    amtTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 25,
        color: "black",
    },
    amountView: {
        // backgroundColor: "blue",
        height: height * 0.06,
        width: width * 0.8,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    completedImg: {
        height: height * 0.05,
        width: width * 0.05,
    },
    gremTxt: {
        fontFamily: "Lato-Bold",
        fontSize: height / 54,
        color: COLOR.LIGHTGREEN,
        marginLeft: width * 0.02,
    },
});
