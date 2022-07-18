import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import MarketHeader from '../../components/Header/MarketHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import CustomButton from "../../components/Buttons/CustomButton"
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const CoinDetails = (props) => {
    const [timing, setTiming] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [medium, setMedium] = useState("Crypto")

    const renderBalc = () => {
        return (
            <View style={styles.balanceView}>
                <Text style={{ color: "#2C2C4E", fontSize: height / 29, fontFamily: FONTS.PoppinsSemiBold }}>$43,114.57</Text>
                <Text style={{ color: "#21BF73", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}> + 5443.4</Text>
                <Text style={{ color: "#21BF73", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}> (12.63%)</Text>
            </View>
        )
    }

    const renderGraph = () => {
        return (
            <View style={styles.graphView}>
                <Image source={ImagePath.GRAPH} resizeMode="contain" style={{ height: height * 0.2, width: width * 0.9 }} />
            </View>
        )
    }

    const renderRating = () => {
        return (
            <View style={styles.ratingView}>
                <Image source={ImagePath.RATINGBAR} resizeMode="contain" style={{ height: height * 0.04, width: width * 0.9 }} />
            </View>
        )
    }

    const renderTime = () => {
        return (
            <View style={styles.timeView}>
                <TouchableOpacity onPress={() => setTiming("1H")}>
                    <ImageBackground source={timing == "1H" ? ImagePath.HRBACK : ImagePath.ICONBACK} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.13, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: timing == "1H" ? "#E5E5E5" : "#2C2C4E", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>1H</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTiming("24H")}>
                    <ImageBackground source={timing == "24H" ? ImagePath.HRBACK : ImagePath.ICONBACK} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.13, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: timing == "24H" ? "#E5E5E5" : "#2C2C4E", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>24 H</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTiming("1W")}>
                    <ImageBackground source={timing == "1W" ? ImagePath.HRBACK : ImagePath.ICONBACK} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.13, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: timing == "1W" ? "#E5E5E5" : "#2C2C4E", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>1W</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTiming("1M")}>
                    <ImageBackground source={timing == "1M" ? ImagePath.HRBACK : ImagePath.ICONBACK} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.13, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: timing == "1M" ? "#E5E5E5" : "#2C2C4E", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>1M</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTiming("6M")}>
                    <ImageBackground source={timing == "6M" ? ImagePath.HRBACK : ImagePath.ICONBACK} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.13, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: timing == "6M" ? "#E5E5E5" : "#2C2C4E", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>6M</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTiming("1Y")}>
                    <ImageBackground source={timing == "1Y" ? ImagePath.HRBACK : ImagePath.ICONBACK} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.13, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: timing == "1Y" ? "#E5E5E5" : "#2C2C4E", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>1Y</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTiming("ALL")}>
                    <ImageBackground source={timing == "ALL" ? ImagePath.HRBACK : ImagePath.ICONBACK} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.13, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: timing == "ALL" ? "#E5E5E5" : "#2C2C4E", fontSize: height / 75, fontFamily: FONTS.PoppinsSemiBold }}>All</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }

    const renderMarketData = () => {
        return (
            <View style={styles.marketDataView}>
                <View style={styles.marketTxtView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Market Data</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.insideMarket}>
                    <View style={styles.marketCap}>
                        <View style={styles.markettxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Market Cap</Text>
                        </View>
                        <View style={styles.marketPriceView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>$833.63 B</Text>
                            <Text style={{ color: "#21BF73", fontSize: height / 84, fontFamily: FONTS.PoppinsMedium }}> +14.49%</Text>
                        </View>
                    </View>
                    <View style={styles.rankView}>
                        <View style={styles.ranktxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Rank</Text>
                        </View>
                        <View style={styles.rankNumView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 56, fontFamily: FONTS.PoppinsSemiBold }}>#1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.insideMarket}>
                    <View style={styles.marketCap}>
                        <View style={styles.markettxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Low (24h)</Text>
                        </View>
                        <View style={styles.marketPriceView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>$833.63 B</Text>
                            {/* <Text style={{ color: "#21BF73", fontSize: height / 84, fontFamily: FONTS.PoppinsMedium }}> +14.49%</Text> */}
                        </View>
                    </View>
                    <View style={styles.rankView}>
                        <View style={styles.ranktxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>High (24h)</Text>
                        </View>
                        <View style={styles.rankNumView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>$44,435.06</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.insideMarket}>
                    <View style={styles.marketCap}>
                        <View style={styles.markettxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Volume (24h)</Text>
                        </View>
                        <View style={styles.marketPriceView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>$833.63 B</Text>
                            {/* <Text style={{ color: "#21BF73", fontSize: height / 84, fontFamily: FONTS.PoppinsMedium }}> +14.49%</Text> */}
                        </View>
                    </View>
                    <View style={styles.rankView}>
                        <View style={styles.ranktxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Circulating Supply</Text>
                        </View>
                        <View style={styles.rankNumView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>18.97M</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.insideMarket}>
                    <View style={styles.marketCap}>
                        <View style={styles.markettxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Circulating</Text>
                        </View>
                        <View style={styles.marketPriceView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>19M BTC</Text>
                            {/* <Text style={{ color: "#21BF73", fontSize: height / 84, fontFamily: FONTS.PoppinsMedium }}> +14.49%</Text> */}
                        </View>
                    </View>
                    <View style={styles.rankView}>
                        <View style={styles.ranktxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Max Supply</Text>
                        </View>
                        <View style={styles.rankNumView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>21M BTC</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.insideMarket}>
                    <View style={styles.marketCap}>
                        <View style={styles.markettxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>Total Supply</Text>
                        </View>
                        <View style={styles.marketPriceView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>19M BTC</Text>
                            {/* <Text style={{ color: "#21BF73", fontSize: height / 84, fontFamily: FONTS.PoppinsMedium }}> +14.49%</Text> */}
                        </View>
                    </View>
                    <View style={styles.rankView}>
                        <View style={styles.ranktxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>All-Time high</Text>
                        </View>
                        <View style={styles.rankNumView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>$68,435.06</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.insideMarket}>
                    <View style={styles.marketCap}>
                        <View style={styles.markettxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>ROI</Text>
                        </View>
                        <View style={styles.marketPriceView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>+33.37.01%</Text>
                            {/* <Text style={{ color: "#21BF73", fontSize: height / 84, fontFamily: FONTS.PoppinsMedium }}> +14.49%</Text> */}
                        </View>
                    </View>
                    <View style={styles.rankView}>
                        <View style={styles.ranktxtView}>
                            <Text style={{ color: "#B0B0B0", fontSize: height / 70, fontFamily: FONTS.PoppinsMedium }}>% of ATH</Text>
                        </View>
                        <View style={styles.rankNumView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold }}>67.19%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.border}></View>
            </View>
        )
    }

    const renderRecurring = () => {
        return (
            <View style={styles.rcurrinView}>
                <ImageBackground source={ImagePath.RECURRINGBACK} resizeMode="contain" style={{ height: height * 0.2, width: width * 0.9, justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.recurTxtView}>
                        <View style={styles.recurTopView}>
                            <Text style={{ marginTop: height * 0.02, color: "#FFFFFF", fontSize: height / 56, fontFamily: FONTS.PoppinsSemiBold }}>Recurring Buy</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>Buying BTC every week</Text>
                        </View>
                        <ImageBackground source={ImagePath.CALENDERBACK} resizeMode="stretch" style={{ height: height * 0.1, width: width * 0.3, justifyContent: "flex-start", alignItems: "center" }}>
                            <Image source={ImagePath.CALENDER} resizeMode="contain" style={{ height: 50, width: 50 }} />
                        </ImageBackground>
                    </View>
                    <View style={styles.recurSubTxtView}>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>performed better than trying</Text>
                        <Text style={{ color: "#FFFFFF", fontSize: height / 60, fontFamily: FONTS.PoppinsRegular }}>to time the Market <Text style={{ color: "#FFFFFF", fontSize: height / 60, fontFamily: FONTS.PoppinsSemiBold, textDecorationLine: "underline" }}>Learn More</Text></Text>
                    </View>

                </ImageBackground>
            </View>
        )
    }

    const renderInfo = () => {
        return (
            <View style={styles.infoView}>
                <View style={styles.infotxtView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Info</Text>
                </View>
                <View style={styles.border}></View>
                <View style={styles.aboutTxtView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsMedium }}>About Bitcoin</Text>
                </View>
                <View style={styles.aboutInsideTxtView}>
                    <Text style={{ lineHeight: height * 0.02, color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Amet minim mollit non deserunt ullamco{'\n'}est sit aliqua dolor do amet sint. Velit{'\n'}officia consequat duis enim velit mollit.{'\n'}Exercitation veniam consequat sunt{'\n'}nostrud amet.</Text>
                </View>
                <View style={styles.tagView}>
                    <Text style={{ color: "#B0B0B0", fontSize: height / 65, fontFamily: FONTS.PoppinsMedium }}>Tags</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Amet minim mollit non</Text>
                </View>
                <View style={styles.tagView}>
                    <Text style={{ color: "#B0B0B0", fontSize: height / 65, fontFamily: FONTS.PoppinsMedium }}>Consensus Method</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Amet minim mollit non</Text>
                </View>
                <View style={styles.tagView}>
                    <Text style={{ color: "#B0B0B0", fontSize: height / 65, fontFamily: FONTS.PoppinsMedium }}>Token Type</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Native</Text>
                </View>
                <View style={styles.tagView}>
                    <Text style={{ color: "#B0B0B0", fontSize: height / 65, fontFamily: FONTS.PoppinsMedium }}>Token Usage</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Payments</Text>
                </View>
                <View style={styles.tagView}>
                    <Text style={{ color: "#B0B0B0", fontSize: height / 65, fontFamily: FONTS.PoppinsMedium }}>Issue Date</Text>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>2013</Text>
                </View>
                <View style={styles.tagView}>
                    <Text style={{ color: "#B0B0B0", fontSize: height / 65, fontFamily: FONTS.PoppinsMedium }}>Website</Text>
                    <TouchableOpacity><Text style={{ color: "#1774FF", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>https://bitcoin.org/</Text></TouchableOpacity>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity>
                        <ImageBackground source={ImagePath.EXPLORERBACK} resizeMode="contain" style={{ height: height * 0.08, width: width * 0.42, justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ color: "#FFFFFF", fontSize: height / 50, fontFamily: FONTS.PoppinsRegular }}>Markets</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={ImagePath.EXPLORERBACK} resizeMode="contain" style={{ height: height * 0.08, width: width * 0.42, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#FFFFFF", fontSize: height / 50, fontFamily: FONTS.PoppinsRegular }}>Explorer</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.coinView}>
                    <View style={styles.coinTopView}>
                        <Image source={ImagePath.BITCOIN} resizeMode="contain" style={{ height: 40, width: 40 }} />
                        <View style={styles.coinTopInsideView}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Bitcoin</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row", height: height * 0.03, width: width * 0.3, justifyContent: "flex-end", alignItems: "center", }}>
                        <Text style={{ color: "#1774FF", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>$0.00</Text>
                        <View style={styles.arrowView}>
                            <Image source={ImagePath.COINFORWARD} resizeMode="contain" style={{ height: 9, width: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderModalRecieve = () => {
        return (
            // <View style={styles.modalView}>
            <Modal
                backdropColor={'green'}
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>Buy BTC</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Image source={ImagePath.MODALCLOSE} resizeMode="contain" style={{ height: 15, width: 15 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.borderModal}></View>
                        <View style={styles.sectionView}>
                            <TouchableOpacity onPress={() => setMedium("Crypto")} style={styles.cryptoView}>
                                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Credit Card</Text>
                                {medium == "Crypto" ?
                                    <View style={{ height: height * 0.004, width: width * 0.4, backgroundColor: "#1774FF" }}></View> : null}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setMedium("USD")} style={styles.usdollarView}>
                                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Crypto Wallet</Text>
                                {medium == "USD" ?
                                    <View style={{ height: height * 0.004, width: width * 0.4, backgroundColor: "#1774FF" }}></View> : null}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.borderModalin}></View>
                        {medium == "USD"
                            ?
                            <>
                                <View style={styles.BtcView}>
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 25, fontFamily: FONTS.PoppinsSemiBold, textDecorationLine: "underline" }}>0.01</Text>
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>{" "}{" "}BTC</Text>
                                </View>
                                <TouchableOpacity style={styles.addView}>
                                    <Image source={ImagePath.ADDBTN} resizeMode="contain" style={{ height: 15, width: 15 }} />
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>{"  "}{"  "}Add Funds</Text>
                                </TouchableOpacity>
                                <View style={{ justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                                    <CustomButton
                                        title="Buy"
                                        ButtonPress={() => setModalVisible(true)}
                                    />
                                </View>
                            </>
                            :
                            <>
                                <View style={styles.BtcViewUsd}>
                                    <View style={styles.usdView}>
                                        <Text style={{ color: "#2C2C4E", fontSize: height / 45, fontFamily: FONTS.PoppinsSemiBold }}>$ 464.5 USD =</Text>
                                    </View>
                                    <View style={styles.BtcInsideView}>
                                        <Text style={{ color: "#2C2C4E", fontSize: height / 25, fontFamily: FONTS.PoppinsSemiBold, textDecorationLine: "underline" }}>0.01</Text>
                                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>{" "}{" "}BTC</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => props.navigation.navigate("AddCard")} style={styles.addView}>
                                    <Image source={ImagePath.ADDBTN} resizeMode="contain" style={{ height: 15, width: 15 }} />
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>{"  "}{"  "}Add Credit or Debit Card</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: height * 0.1, width: width * 0.9, alignSelf: "center" }}>
                                    <TouchableOpacity>
                                        <ImageBackground source={ImagePath.CLOCKBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: height * 0.065, width: width * 0.14 }} >
                                            <Image source={ImagePath.CLOCK} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <ImageBackground source={ImagePath.INSUFBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: height * 0.07, width: width * 0.72 }} >
                                            <Text style={{ color: "#FFFFFF", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Insufficient Balance</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            </>
                        }
                    </View>
                </View>
            </Modal>
            // </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <MarketHeader
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                rightIcon={true}
                RightIconTwoPress={() => props.navigation.navigate()}
                RightIconTwo={true}
                RightIconPress={() => props.navigation.navigate("")}
                bitcoinImg={ImagePath.BITCOIN}
                coinname="Bitcoin"
                coinCode="BTC"
                iconImg={ImagePath.BELL}
                iconImgTwo={ImagePath.STAR}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 5, marginTop: height * 0.06, height: height * 1, width: width * 1, }}>
                {renderBalc()}
                {renderGraph()}
                {renderRating()}
                {renderTime()}
                {renderMarketData()}
                {renderRecurring()}
                {renderInfo()}
                <View style={{ bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                    <CustomButton
                        title="Buy"
                        ButtonPress={() => setModalVisible(true)}
                    />
                </View>
            </ScrollView>
            {renderModalRecieve()}
        </SafeAreaView>
    )
}

export default CoinDetails

const styles = StyleSheet.create({
    balanceView: {
        height: height * 0.055,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    graphView: {
        height: height * 0.25,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    ratingView: {
        height: height * 0.04,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    timeView: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    marketDataView: {
        height: height * 0.5,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        // alignItems: "center"
    },
    modalView: {
        height: height * 0.55,
        width: width * 1,
        borderRadius: height / 35,
        backgroundColor: "#FFFFFF",
        // backgroundColor: "lightgrey",
        // justifyContent: "space-between",
        paddingVertical: height * 0.02,
        alignItems: "center",
        // marginTop: height * 0.22,
        alignSelf: "center"
    },
    rcurrinView: {
        height: height * 0.22,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        // alignItems: "center"
    },
    sectionView: {
        height: height * 0.07,
        width: width * 0.8,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        // paddingHorizontal: 60,
        justifyContent: "space-between"
    },
    cryptoView: {
        height: height * 0.07,
        width: width * 0.4,
        // backgroundColor: "grey",
        justifyContent: "space-between",
        alignItems: "center"
        // alignSelf: "center"
    },
    usdollarView: {
        height: height * 0.07,
        width: width * 0.4,
        // marginLeft: width * 0.05,
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "space-between"
        // alignSelf: "center"
    },
    modalparentView: {
        height: height * 1,
        width: width * 1,
        justifyContent: "flex-end",
        // backgroundColor: "red"
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    infoView: {
        height: height * 0.8,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        // alignItems: "center"
    },
    modalHeader: {
        height: height * 0.05,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    BtcView: {
        height: height * 0.18,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    BtcViewUsd: {
        height: height * 0.18,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    usdView: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "grey",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    BtcInsideView: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center"
    },
    recurTxtView: {
        height: height * 0.09,
        width: width * 0.8,
        // backgroundColor: "red",
        flexDirection: "row"
    },
    recurSubTxtView: {
        height: height * 0.08,
        width: width * 0.8,
        // backgroundColor: "blue",
        // flexDirection: "row"
    },
    recurTopView: {
        height: height * 0.09,
        width: width * 0.5,
        // backgroundColor: "pink",
        justifyContent: "space-between"
    },
    coinTopView: {
        height: height * 0.08,
        width: width * 0.6,
        flexDirection: "row",
        // backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "space-between"
    },
    coinTopInsideView: {
        height: height * 0.08,
        width: width * 0.45,
        flexDirection: "row",
        // backgroundColor: "green",
        alignItems: "center",
        justifyContent: "space-between"
    },
    arrowView: {
        height: height * 0.025,
        width: width * 0.03,
        flexDirection: "row",
        // backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"
    },
    border: {
        height: height * 0.002,
        width: width * 0.9,
        backgroundColor: "#DFE2E4",
        // backgroundColor: "lightgrey",
        alignSelf: "center",
        marginTop: height * 0.01
    },
    borderModal: {
        height: height * 0.002,
        width: width * 1,
        backgroundColor: "#DFE2E4",
        // backgroundColor: "lightgrey",
        alignSelf: "center",
        marginTop: height * 0.01
    },
    borderModalin: {
        height: height * 0.002,
        width: width * 0.8,
        backgroundColor: "#DFE2E4",
        // backgroundColor: "lightgrey",
        alignSelf: "center",
        // marginTop: height * 0.01
    },
    marketTxtView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        // alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    infotxtView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "red",
        // alignSelf: "center",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    aboutTxtView: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "red",
        // alignSelf: "center",
        // marginTop: height * 0.02,
        flexDirection: "row",
        alignItems: "center"
    },
    aboutInsideTxtView: {
        height: height * 0.17,
        width: width * 0.9,
        // backgroundColor: "red",
        // alignSelf: "center",
        // marginTop: height * 0.02,
        flexDirection: "row",
        alignItems: "center"
    },
    tagView: {
        height: height * 0.05,
        width: width * 0.9,
        // backgroundColor: "red",
        // alignSelf: "center",
        // marginTop: height * 0.02,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    btnView: {
        height: height * 0.13,
        width: width * 0.9,
        // backgroundColor: "red",
        // alignSelf: "center",
        // marginTop: height * 0.02,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    coinView: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "red",
        // alignSelf: "center",
        // marginTop: height * 0.02,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    insideMarket: {
        height: height * 0.05,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.02,
        flexDirection: "row"
    },
    marketCap: {
        height: height * 0.05,
        width: width * 0.65,
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "space-between"
        // marginTop: height * 0.02
    },
    rankView: {
        height: height * 0.05,
        width: width * 0.25,
        // backgroundColor: "blue",
        alignSelf: "center",
        justifyContent: "space-between",
        // flexDirection: 
        // marginTop: height * 0.02
    },
    markettxtView: {
        height: height * 0.025,
        width: width * 0.65,
        // backgroundColor: "blue",
        alignSelf: "center",
        justifyContent: "flex-end"
        // marginTop: height * 0.02
    },
    ranktxtView: {
        height: height * 0.025,
        width: width * 0.25,
        // backgroundColor: "green",
        alignSelf: "center",
        justifyContent: "flex-end"
        // marginTop: height * 0.02
    },
    marketPriceView: {
        height: height * 0.025,
        width: width * 0.65,
        // backgroundColor: "green",
        alignSelf: "center",
        // justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "row"
        // marginTop: height * 0.02
    },
    rankNumView: {
        height: height * 0.025,
        width: width * 0.25,
        // backgroundColor: "pink",
        alignSelf: "center",
        // justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "row"
        // marginTop: height * 0.02
    },
})