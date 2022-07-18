import { StyleSheet, ActivityIndicator, FlatList, ImageBackground, TextInput, Dimensions, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImagePath } from "../../utils/ImagePath"
import { Image, Text } from '@rneui/themed';
import { COLOR } from '../../utils/Color';
import Header from '../../Components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { MyAccountUrl, VendorListUrl } from '../../RestApi/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
const { height, width } = Dimensions.get("screen")

let colors = ['#C8D3E5', '#F7F7F8'];

const Redemption = (props) => {
    const [vendors, setVendors] = useState("Vendors")
    const [id, setId] = useState("")
    const [vendorsList, setVendorsList] = useState([])
    const [vendorsListR, setVendorsListR] = useState([])
    const [redeemHistory, setRedeemHistory] = useState([])
    const [redeemHistoryR, setRedeemHistoryR] = useState([])
    const [loader, setLoader] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        VendorDetailListAPI()
        redeemHistoryAPI()
        myAccountAPI()
    }, [])

    // ************ Search Function Vendors ************
    const SeacrFunct = (value) => {
        setVendorsList(vendorsListR);
        setIsSearch(true);
        if (value !== "") {
            let mydata = vendorsList.filter((item, index) => {
                if (item?.firstName.includes(value)) {
                    return item;
                }
            });
            setVendorsList(mydata);
        } else {
            setIsSearch(false);
        }
    };

    // ************ Search Function History ************
    const SeacrFunctHistory = (value) => {
        setRedeemHistory(redeemHistoryR);
        setSearching(true);
        if (value !== "") {
            let mydata = redeemHistory.filter((item, index) => {
                if (item?.vendorEmail?.includes(value)) {
                    return item;
                }
            });
            setRedeemHistory(mydata);
        } else {
            setSearching(false);
        }
    };

    const VendorDetailListAPI = async () => {
        setLoader(true)
        const Value = await AsyncStorage.getItem("token")
        axios({
            method: "GET",
            url: VendorListUrl,
            headers: {
                Authorization: `Bearer ${Value}`,
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            console.log("@@@ Response Vendor API ======", res)
            if (res.data.status === 200) {
                setVendorsList(res?.data?.data?.list)
                setVendorsListR(res?.data?.data?.list)
                setLoader(false)
            } else {
                alert("Something Went Wrong")
                setLoader(false)
            }
        }).catch(async (err) => {
            console.log("@@@ Error Vendor APi =====", err)
            setLoader(false)
        })
    }

    const redeemHistoryAPI = async () => {
        setisLoading(true)
        const Value = await AsyncStorage.getItem("token")
        axios({
            method: "GET",
            url: `https://java-blockchainapp.mobiloitte.org/wallet/get-all-redeem-transaction-history?fkUserId=${id}&page=0&pageSize=10&coinName=GRET&txnType=REDEEM`,
            headers: {
                Authorization: `Bearer ${Value}`,
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            console.log("@@@ Response redeemHistoryAPI API ======", res)
            if (res.data.status === 200) {
                setRedeemHistory(res?.data?.data?.resultlist)
                setRedeemHistoryR(res?.data?.data?.resultlist)
                setisLoading(false)
            } else {
                alert("Something Went Wrong")
                setisLoading(false)
            }
        }).catch(async (err) => {
            console.log("@@@ Error redeemHistoryAPI APi =====", err)
            setisLoading(false)
        })
    }

    const myAccountAPI = async () => {
        const Value = await AsyncStorage.getItem("token")
        axios({
            method: "GET",
            url: MyAccountUrl,
            headers: {
                Authorization: `Bearer ${Value}`,
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            console.log("@@@ Response myAccountAPI  ======", res)
            if (res.data.status === 200) {
                setId(res?.data?.data?.userId)
            } else {
                alert("Something Went Wrong")
            }
        }).catch(async (err) => {
            console.log("@@@ Error myAccountAPI  =====", err)
        })
    }

    const renderFlatListDetail = (item) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate("VendorsDetails", { Id: item.userId, UserId: id })} style={styles.listParentView}>
                <ImageBackground source={ImagePath.IMAGEREC} style={styles.backImg}>
                    <Image source={{ uri: item?.logo }} resizeMode="contain" style={{ height: height * 0.1, width: width * 0.19 }}></Image>
                </ImageBackground>
                <View style={styles.titleView}>
                    <Text style={styles.titleTxt}>{item?.firstName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderHitsory = (item, index) => {
        return (
            <View style={{
                backgroundColor: colors[index % colors.length],
                height: height * 0.04,
                width: width * 1,
                flexDirection: "row"
            }}>
                <View style={styles.sno}>
                    <Text style={styles.dataTxt}>{index + 1}</Text>
                </View>
                <View style={styles.vnendorName}>
                    <Text numberOfLines={1} style={styles.dataTxt}>{item?.vendorName}</Text>
                </View>
                <View style={styles.vnendorEmail}>
                    <Text numberOfLines={1} style={styles.dataTxt}>{item?.vendorEmail}</Text>
                </View>
                {/* <View style={styles.gretView}>
                    <Text numberOfLines={1} style={styles.dataTxt}>{item.amount}</Text>
                </View>
                <View style={styles.hashView}>
                    <Text numberOfLines={1} style={styles.hashTxt}>{item.coinType}</Text>
                </View>
                <View style={styles.transType}>
                    <Text numberOfLines={1} style={styles.redeemTxt}>{item.txnType}</Text>
                </View> */}
                <View style={styles.statusView}>
                    <Text numberOfLines={1} style={styles.dataTxt}>{item?.amount}</Text>
                </View>
                <View style={styles.dateView}>
                    <Text numberOfLines={1} style={styles.dateTxt}>{moment(item?.date).format("MMM DD, YYYY")}</Text>
                </View>
            </View>
        )
    }

    function renderQr() {
        return (
            <View style={styles.parentViewQr}>
                <View style={styles.tabParent}>
                    {
                        vendors === "Vendors" ?
                            <View style={styles.tabView}>
                                <TouchableOpacity onPress={() => setVendors("Vendors")} style={{
                                    height: height * 0.08,
                                    width: width * 0.5,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: vendors === "Vendors" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                                    borderRadius: height * 0.2
                                }}>
                                    <Text style={styles.buyText}>Vendors</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setVendors("History")} style={{
                                        height: height * 0.08,
                                        width: width * 0.4,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: COLOR.TABBACK,
                                        borderRadius: height * 0.2
                                    }}>
                                    <Text style={styles.buyText}>History</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.tabView}>
                                <TouchableOpacity onPress={() => setVendors("Vendors")} style={{
                                    height: height * 0.08,
                                    width: width * 0.4,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: vendors === "Vendors" ? COLOR.BUTTONCOLOR : COLOR.TABBACK,
                                    borderRadius: height * 0.2
                                }}>
                                    <Text style={styles.buyText}>Vendors</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setVendors("History")} style={{
                                        height: height * 0.08,
                                        width: width * 0.5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: vendors === "Vendors" ? COLOR.TABBACK : COLOR.BUTTONCOLOR,
                                        borderRadius: height * 0.2
                                    }}>
                                    <Text style={styles.buyText}>History</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
                {vendors === "Vendors" ?
                    <View style={styles.vendorView}>
                        <View style={styles.searchView}>
                            <Text style={styles.vendorsTxt}>Vendors</Text>
                            <View style={styles.searchBar}>
                                <TextInput autoCapitalize="none" onChangeText={(value) => SeacrFunct(value)} style={styles.inputView} />
                                <TouchableOpacity>
                                    <Image source={ImagePath.SEARCH} resizeMode="contain" style={styles.searchImg} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listView}>
                            {
                                loader ? (
                                    <View style={[styles.container, styles.horizontal]}>
                                        <ActivityIndicator size="large" color="#244273" />
                                    </View>
                                ) : (
                                    isSearch ? (
                                        vendorsList.length > 0 ? (
                                            <FlatList
                                                data={vendorsList}
                                                numColumns={3}
                                                contentContainerStyle={{ paddingBottom: height * 0.01, }}
                                                nestedScrollEnabled={true}
                                                renderItem={({ item }) => renderFlatListDetail(item)}
                                            />
                                        ) : (
                                            <View style={styles.noDataView}>
                                                <Text style={styles.nodataTxt}>No Data Found...</Text>
                                            </View>
                                        )
                                    ) : vendorsListR.length > 0 ? (
                                        <FlatList
                                            data={vendorsListR}
                                            numColumns={3}
                                            contentContainerStyle={{ paddingBottom: height * 0.01, }}
                                            nestedScrollEnabled={true}
                                            renderItem={({ item }) => renderFlatListDetail(item)}
                                        />

                                    ) : (
                                        <View style={styles.noDataView}>
                                            <Text style={styles.nodataTxt}>No Data Found...</Text>
                                        </View>
                                    )
                                )
                            }
                        </View>
                    </View>
                    :
                    <View style={styles.vendorView}>
                        <View style={styles.searchView}>
                            <View style={styles.searchBar}>
                                <TextInput autoCapitalize="none" onChangeText={(value) => SeacrFunctHistory(value)} style={styles.inputView} />
                                <TouchableOpacity>
                                    <Image source={ImagePath.SEARCH} resizeMode="contain" style={styles.searchImg} />
                                </TouchableOpacity>
                            </View>
                            {/* <TouchableOpacity style={styles.exportView}>
                                <Image source={ImagePath.EXPORT} resizeMode="contain" style={{ height: height * 0.022, width: width * 0.16 }} />
                                <Text style={styles.exporttxt}>Export</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={styles.listHistoryView}>
                            <View style={styles.heading}>
                                <View style={styles.sno}>
                                    <Text style={styles.snoTxt}>S.No.</Text>
                                </View>
                                <View style={styles.vnendorName}>
                                    <Text style={styles.snoTxt}>Vendor Name</Text>
                                </View>
                                <View style={styles.vnendorEmail}>
                                    <Text style={styles.snoTxt}>Vendor Email</Text>
                                </View>
                                <View style={styles.gretView}>
                                    <Text style={styles.snoTxt}>   GRET{'\n'}Amount</Text>
                                </View>
                                {/* <View style={styles.hashView}>
                                    <Text style={styles.snoTxt}>Coin Type</Text>
                                </View>
                                <View style={styles.transType}>
                                    <Text style={styles.snoTxt}>Transaction Type</Text>
                                </View>
                                <View style={styles.statusView}>
                                    <Text style={styles.snoTxt}>Status</Text>
                                </View> */}
                                <View style={styles.dateView}>
                                    <Text style={styles.snoTxt}>Date</Text>
                                </View>
                            </View>
                            {
                                isLoading ? (
                                    <View style={[styles.container, styles.horizontal]}>
                                        <ActivityIndicator size="large" color="#244273" />
                                    </View>
                                ) : (
                                    searching ? (
                                        redeemHistory.length > 0 ? (
                                            <FlatList
                                                data={redeemHistory}
                                                numColumns={0}
                                                contentContainerStyle={{ paddingBottom: height * 0.1, }}
                                                nestedScrollEnabled={true}
                                                renderItem={({ item, index }) => renderHitsory(item, index)}
                                            />
                                        ) : (
                                            <View style={styles.noDataView}>
                                                <Text style={styles.nodataTxt}>No Data Found...</Text>
                                            </View>
                                        )
                                    ) : (
                                        redeemHistoryR.length > 0 ? (
                                            <FlatList
                                                data={redeemHistoryR}
                                                numColumns={0}
                                                contentContainerStyle={{ paddingBottom: height * 0.1, }}
                                                nestedScrollEnabled={true}
                                                renderItem={({ item, index }) => renderHitsory(item, index)}
                                            />
                                        ) : (
                                            <View style={styles.noDataView}>
                                                <Text style={styles.nodataTxt}>No Data Found...</Text>
                                            </View>
                                        )
                                    )
                                )
                            }
                        </View>
                    </View>
                }
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground source={ImagePath.SPLASHBACK} resizeMode="cover" style={styles.backgroundImg}>
                <Header
                    title={"Redemption"}
                    LeftIcon={true}
                    leftImg={ImagePath.BACKICON}
                    leftPress={() => props.navigation.goBack()}
                />
                {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}
                <ScrollView>
                    {renderQr()}
                </ScrollView>
                {/* </KeyboardAwareScrollView> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Redemption

const styles = StyleSheet.create({
    sno: {
        height: height * 0.04,
        width: width * 0.07,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    container: {
        // flex: 1,
        height: height * 0.4,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    noDataView: {
        height: height * 0.2,
        // flex: 1,
        width: width * 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    nodataTxt: {
        color: COLOR.BUTTONCOLOR,
        fontSize: height / 45,
        fontFamily: "Montserrat-SemiBold",
    },
    gretView: {
        height: height * 0.04,
        width: width * 0.18,
        // backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    hashView: {
        height: height * 0.04,
        width: width * 0.08,
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    transType: {
        height: height * 0.04,
        width: width * 0.13,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    statusView: {
        height: height * 0.04,
        width: width * 0.18,
        // backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    dateView: {
        height: height * 0.04,
        width: width * 0.24,
        // backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    vnendorName: {
        height: height * 0.04,
        width: width * 0.18,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    vnendorEmail: {
        height: height * 0.04,
        width: width * 0.33,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: width * 0.003,
        borderColor: COLOR.lightGrey
    },
    heading: {
        height: height * 0.04,
        width: width * 1,
        backgroundColor: COLOR.BUTTONCOLOR,
        flexDirection: "row"
    },
    titleTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 65,
        color: "white"
    },
    titleView: {
        height: height * 0.04,
        width: width * 0.3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.BUTTONCOLOR
    },
    exporttxt: {
        fontFamily: "Poppins-Light",
        fontSize: height / 80,
        color: COLOR.lightGrey
    },
    snoTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 95,
        color: "white"
    },
    redeemTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 95,
        color: COLOR.DATATXT
    },
    dataTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 70,
        color: COLOR.DATATXT
    },
    dateTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 70,
        color: COLOR.DATATXT
    },
    statuTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 100,
        color: COLOR.GREEN
    },
    hashTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: height / 100,
        color: COLOR.DATATXT
    },
    backImg: {
        height: height * 0.13,
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.3
    },
    searchBar: {
        height: height * 0.05,
        width: width * 0.65,
        backgroundColor: "white",
        borderWidth: height * 0.001,
        borderColor: COLOR.BORDER,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 6
    },
    exportView: {
        height: height * 0.04,
        width: width * 0.18,
        // backgroundColor: "green",
        alignItems: "center",
        justifyContent: "space-between"
    },
    listView: {
        height: height * 0.77,
        width: width * 1,
        alignSelf: "center",
        // backgroundColor: "yellow",
        marginTop: height * 0.02
    },
    listHistoryView: {
        height: height * 0.7,
        width: width * 1,
        alignSelf: "center",
        // backgroundColor: "yellow",
        marginTop: height * 0.02
    },
    inputView: {
        height: height * 0.06,
        width: width * 0.5,
        // backgroundColor: "pink",
        fontSize: height / 65,
    },
    searchImg: {
        height: height * 0.02,
        width: width * 0.07,
        // backgroundColor: "red"
    },
    mainContainer: {
        flex: 1,
    },
    listParentView: {
        // backgroundColor: "red",
        height: height * 0.17,
        marginTop: height * 0.01,
        marginLeft: width * 0.03,
        width: width * 0.29,
    },
    vendorView: {
        // height: height * 1,
        width: width * 1,
        // backgroundColor: "pink"
    },
    backgroundImg: {
        height: height * 1,
        width: width * 1
    },
    tabView: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: COLOR.TABBACK,
        borderRadius: height * 0.2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buyText: {
        fontFamily: "Poppins-Medium",
        fontSize: height / 40,
        color: "white"
    },
    vendorsTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: height / 48,
        color: "black"
    },
    searchView: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "yellow",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tabParent: {
        height: height * 0.12,
        width: width * 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    parentViewQr: {
        backgroundColor: "white",
        width: width * 1,
        // height: height * 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
})