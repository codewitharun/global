import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, ScrollView, Dimensions, Image, TouchableOpacity, FlatList, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { ImagePath } from '../../utils/ImagePath'
import CustomButton from '../../components/Buttons/CustomButton';
import Header from '../../components/Header/Header'
import { FONTS } from '../../utils/FontFamily';
import { color, log } from 'react-native-reanimated';
//import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("screen");

const DATA = [
    {
        key: 1,
        coin: "Bitcoin",
        amt: "0.00",
        image: ImagePath.BITCOIN,
        income: "4% p.a."
        , srt1: "BTC"
    },
    {
        key: 2,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH,
        income: "4% p.a."
        , srt1: "ETH"
    },
    {
        key: 3,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG,
        income: "4% p.a."
        , srt1: "TEH"
    },
    {
        key: 4,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        income: "4% p.a."
        , srt1: "BNV"
    },
    {
        key: 5,
        coin: "Bitcoin",
        amt: "0.00",
        image: ImagePath.BITCOIN,
        income: "4% p.a."
        , srt1: "CDN"
    },
    {
        key: 6,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH,
        income: "4% p.a."
        , srt1: "DGC"
    },
    {
        key: 7,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG,
        income: "4% p.a."
        , srt1: "SHI"
    },
    {
        key: 8,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        income: "4% p.a."
        , srt1: "ETH"
    },
    {
        key: 9,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH,
        income: "4% p.a."
        , srt1: "ETH"
    },
    {
        key: 10,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG,
        income: "4% p.a."
        , srt1: "ETH"
    },
    {
        key: 11,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        income: "4% p.a."
        , srt1: "ETH"
    },
    {
        key: 12,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH,
        income: "4% p.a."
        , srt1: "ETH"
    },
    {
        key: 13,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG,
        income: "4% p.a."
        , srt1: "ETH"
    },
    {
        key: 14,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH,
        income: "4% p.a."
        , srt1: "ETH"
    },


]
const Crypto_Earn = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [ModalVisible3, setModalVisible3] = useState(false);
    const [select, setSelect] = useState("Flexible");
    const [check, setCheck] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);



    return (

        // <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ height: height * 0.95, width: width * 1, borderRadius: 25, backgroundColor: "white", alignSelf: "center" }} >
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Crypto Earn"
            />

            <View style={styles.headingTestVIew}>
                <Text style={styles.HeadingTExt}>Earn up to 12.5% p.a. on your crypto assest</Text>
            </View>
            <View style={styles.NotficationParent}>
                <View style={styles.NotficationChild}>
                    <View style={styles.TicImageView}>
                        <Image style={{
                            height: height / 79.1,
                            width: width / 28.00
                        }}
                            source={ImagePath.TIC_MARK} />
                    </View>
                    <View style={styles.TextVIew}>
                        <Text style={styles.HeadingTExt1}>Receive the earnings in your Crypto Wallet every 7 days</Text>

                    </View>



                </View>
                <View style={styles.NotficationChild}>
                    <View style={styles.TicImageView}>
                        <Image style={{
                            height: height / 79.1,
                            width: width / 28.00
                        }}
                            source={ImagePath.TIC_MARK} />
                    </View>
                    <View style={styles.TextVIew}>
                        <Text style={styles.HeadingTExt1}>Earnings are paid in the currency of
                            your allocated crypto or stablecoin</Text>

                    </View>



                </View>
                <View style={styles.NotficationChild}>
                    <View style={styles.TicImageView}>
                        <Image style={{
                            height: height / 79.1,
                            width: width / 28.00
                        }}
                            source={ImagePath.TIC_MARK} />
                    </View>
                    <View style={styles.TextVIew}>
                        <Text style={styles.HeadingTExt1}>Frosted Rose Gold, lcy White, &
                            Obsidian cardholders are entitled to
                            a 2% CRO bonus</Text>

                    </View>



                </View>
            </View>
            <View style={styles.MidButtonVIew}>
                <View style={styles.TextVIew1}>
                    <Text style={styles.MidTExtstyle}>3 Month Term</Text>
                </View>
                <View style={styles.arrowImageView} >
                    <TouchableOpacity>
                        <Image style={styles.ArrowimageStyle}
                            source={ImagePath.DOWN_ARROW2} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                backdropColor={'green'}
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.modalView3}>
                        <View style={styles.searchModal}>
                            <View style={styles.buyTextView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Select Term</Text>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible1(false)} style={styles.crossView}>
                                <Image source={ImagePath.CROSSBLUE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.listParentModal8}>
                            <TouchableOpacity onPress={() => setSelect("Flexible")} style={styles.childMOdal1}>
                                <View style={{ height: height * 0.10, width: width * 0.83, }}>
                                    <View style={styles.headingParantVIew}>
                                        <View style={styles.headingChildView}>
                                            <Text style={styles.flexibleTextStyle}>Flexible</Text>
                                        </View>
                                        <View style={styles.headingImageView} >
                                            <ImageBackground style={{
                                                height: height * 0.021,
                                                width: width * 0.131,
                                                resizeMode: "contain",
                                                justifyContent: "center"
                                                // alignSelf:"center",
                                                //marginBottom:height*0.02
                                            }}
                                                source={ImagePath.SELECT_TERMBG} >
                                                <View style={{ height: height * 0.019, width: width * 0.10, alignItems: "center", alignSelf: "center", justifyContent: "center" }}>
                                                    <Text style={styles.percentTextStyle}>0.5% p.a.</Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </View>
                                    <View style={{ height: height * 0.05, width: width * 0.55, }}>
                                        <Text style={styles.EarnTextStyle}>Earn 0.5% per annum Transfer out your assets at any time</Text>
                                    </View>
                                </View>
                                <View style={{ height: height * 0.05, width: width * 0.08, alignSelf: 'center', marginTop: height * 0.03 }}>
                                    <ImageBackground resizeMode="contain" style={{ height: height * 0.032, width: width * 0.0704, justifyContent: "center" }}
                                        source={select == "Flexible" ? ImagePath.CHECK_BG : ImagePath.UNTICKCIRCLE_BG} >
                                        <Image style={{ height: height * 0.010, width: width * 0.034, alignSelf: "center", resizeMode: "contain" }}
                                            source={ImagePath.CHECK_MARK} />
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: height * 0.04 }}></View>
                            <TouchableOpacity onPress={() => setSelect("1")} style={styles.childMOdal1}>
                                <View style={{ height: height * 0.10, width: width * 0.83, }}>
                                    <View style={styles.headingParantVIew}>
                                        <View style={styles.headingChildView1}>
                                            <Text style={styles.flexibleTextStyle}>1 Month Term</Text>
                                        </View>
                                        <View style={styles.headingImageView} >
                                            <ImageBackground style={{
                                                height: height * 0.029,
                                                width: width * 0.180,
                                                resizeMode: "contain",
                                                justifyContent: "center"
                                                // alignSelf:"center",
                                                //marginBottom:height*0.02
                                            }}
                                                source={ImagePath.SELECT_TERMBG} >
                                                <View style={{ height: height * 0.02, width: width * 0.15, alignItems: "center", alignSelf: "center", justifyContent: "center" }}>
                                                    <Text style={styles.percentTextStyle}>0.75-1.5% p.a.</Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </View>
                                    <View style={{ height: height * 0.05, width: width * 0.55, }}>
                                        <Text style={styles.EarnTextStyle}>Earn 0.5% per annum Transfer out your assets at any time</Text>
                                    </View>
                                </View>
                                <View style={{ height: height * 0.05, width: width * 0.08, alignSelf: 'center', marginTop: height * 0.03 }}>
                                    <TouchableOpacity>
                                        <ImageBackground resizeMode="contain" style={{ height: height * 0.032, width: width * 0.0704, justifyContent: "center" }}
                                            source={select === "1" ? ImagePath.CHECK_BG : ImagePath.UNTICKCIRCLE_BG} >
                                            <Image style={{ height: height * 0.010, width: width * 0.034, alignSelf: "center", resizeMode: "contain" }}
                                                source={ImagePath.CHECK_MARK} />
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: height * 0.04 }}></View>
                            <TouchableOpacity onPress={() => setSelect("3")} style={styles.childMOdal1}>
                                <View style={{ height: height * 0.10, width: width * 0.83, }}>
                                    <View style={styles.headingParantVIew}>
                                        <View style={styles.headingChildView1}>
                                            <Text style={styles.flexibleTextStyle}>3 Month Term</Text>
                                        </View>
                                        <View style={styles.headingImageView} >
                                            <ImageBackground style={{
                                                height: height * 0.026,
                                                width: width * 0.160,
                                                resizeMode: "contain",
                                                justifyContent: "center"
                                                // alignSelf:"center",
                                                //marginBottom:height*0.02
                                            }}
                                                source={ImagePath.SELECT_TERMBG} >
                                                <View style={{ height: height * 0.015, width: width * 0.14, alignItems: "center", alignSelf: "center", justifyContent: "center" }}>
                                                    <Text style={styles.percentTextStyle}>1.5-3% p.a.</Text>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    </View>
                                    <View style={{ height: height * 0.05, width: width * 0.55, }}>
                                        <Text style={styles.EarnTextStyle}>Earn 0.5% per annum Transfer out your assets at any time</Text>
                                    </View>
                                </View>
                                <View style={{ height: height * 0.05, width: width * 0.08, alignSelf: 'center', marginTop: height * 0.03 }}>
                                    <ImageBackground resizeMode="contain" style={{ height: height * 0.032, width: width * 0.0704, justifyContent: "center" }}
                                        source={select == "3" ? ImagePath.CHECK_BG : ImagePath.UNTICKCIRCLE_BG} >
                                        <Image style={{ height: height * 0.010, width: width * 0.034, alignSelf: "center", resizeMode: "contain" }}
                                            source={ImagePath.CHECK_MARK} />
                                    </ImageBackground>
                                </View>

                            </TouchableOpacity>
                            <View style={{ height: height * 0.02 }}></View>
                            <View style={{ position: "absolute", bottom: 0, height: height * 0.07, width: width * 0.9, alignSelf: 'center', justifyContent: 'center' }}>
                                <CustomButton
                                    title="Continue"
                                    ButtonPress={() => { setModalVisible2(true), setModalVisible1(false) }}
                                />
                            </View>



                        </View>
                    </View>
                </View>
            </Modal>





            <Modal
                backdropColor={'green'}
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.modalView}>
                        <View style={styles.searchModal}>
                            <View style={styles.buyTextView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Select Cryptocurrency</Text>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.crossView}>
                                <Image source={ImagePath.CROSSBLUE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.listParentModal}>
                            <FlatList
                                data={DATA}
                                //  nestedScrollEnabled={true}
                                contentContainerStyle={{ paddingBottom: height * 0.2 }}
                                renderItem={({ item }) => {

                                    return (
                                        <TouchableOpacity onPress={() => { setModalVisible1(true), setModalVisible(false) }}>
                                            <View style={styles.modalConatiner1}>
                                                <View style={styles.modalImageView}>
                                                    <Image style={{
                                                        height: height * 0.04,
                                                        width: width * 0.11,
                                                        resizeMode: "contain"
                                                    }}
                                                        source={item.image} />
                                                </View>

                                                <View style={styles.modalTxtView2}>
                                                    <Text style={styles.cointext1}>{item.coin}</Text>
                                                </View>
                                                <View style={styles.modalTxtView1}>
                                                    <Text style={styles.cointext1}>{item.srt1}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>



                                    )
                                }} />
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                backdropColor={'green'}
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.modalView1}>
                        <View style={styles.searchModal}>
                            <View style={styles.buyTextView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Crypto Earn Terms</Text>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible2(false)} style={styles.crossView}>
                                <Image source={ImagePath.CROSSBLUE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setCheck(check ? false : true)} style={{ height: height * 0.06, width: width * 0.90, borderBottomWidth: 1, borderColor: "#EBEEF2", marginTop: height * 0.01, flexDirection: 'row' }}>
                            <View style={{ height: height * 0.04, width: width * 0.08, }}>

                                <ImageBackground resizeMode="contain" style={{ height: height * 0.020, width: width * 0.0455, resizeMode: 'contain', alignSelf: "center", justifyContent: "center", borderRadius: 10 }}
                                    source={check ? ImagePath.CHECKSQUARE_BG : ImagePath.UNTICKSQUARE_BG} >
                                    <Image style={{ height: height * 0.010, width: width * 0.034, alignSelf: "center", resizeMode: "contain" }}
                                        source={ImagePath.CHECK_MARK} />
                                </ImageBackground>

                            </View>
                            <View style={{ height: height * 0.05, width: width * 0.75, }} >
                                <Text style={styles.TermStyles}>I understand and agree that my use of Crypto Earn is governed by the Crypto Earn T&Cs.</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setCheckTwo(checkTwo ? false : true)} style={{ height: height * 0.06, width: width * 0.90, borderBottomWidth: 1, borderColor: "#EBEEF2", marginTop: height * 0.02, flexDirection: 'row' }}>
                            <View style={{ height: height * 0.04, width: width * 0.08, }}>

                                <ImageBackground resizeMode="contain" style={{ height: height * 0.020, width: width * 0.0455, resizeMode: 'contain', alignSelf: "center", justifyContent: "center" }}
                                    source={checkTwo ? ImagePath.CHECKSQUARE_BG : ImagePath.UNTICKSQUARE_BG} >
                                    <Image style={{ height: height * 0.010, width: width * 0.034, alignSelf: "center", resizeMode: "contain" }}
                                        source={ImagePath.CHECK_MARK} />
                                </ImageBackground>

                            </View>
                            <View style={{ height: height * 0.05, width: width * 0.75, }} >
                                <Text style={styles.TermStyles}>I understand and agree that my use of Crypto Earn is governed by the Crypto Earn T&Cs.</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={{ height: height * 0.01 }}></View>
                        <View style={{ height: height * 0.2, width: width * 0.9, alignSelf: 'center', }}>
                            <CustomButton
                                title="Continue"
                                ButtonPress={() => { setModalVisible3(true), setModalVisible2(false) }}
                            />
                        </View>


                    </View>
                </View>
            </Modal>

            <Modal
                backdropColor={'green'}
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={ModalVisible3}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.modalView5}>
                        <View style={styles.searchModal}>
                            <View style={styles.buyTextView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Crypto Earn - Flexible</Text>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible3(false)} style={styles.crossView}>
                                <Image source={ImagePath.CROSSBLUE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: height * 0.04, width: width * 0.55, alignSelf: 'center', marginTop: height * 0.015 }}>
                            <Text style={styles.usdTextStyle}>$ 464.5 USD =</Text>
                        </View>
                        <View style={{ height: height * 0.08, width: width * 0.34, alignSelf: 'center', flexDirection: "row", justifyContent: 'space-evenly' }}>
                            <View style={{ height: height * 0.05, width: width * 0.15, borderBottomWidth: 2, borderColor: "#000000", marginLeft: width * 0.022 }}>

                                <Text style={styles.usdTextStyle1}>0.01</Text>
                            </View>
                            <View style={{ height: height * 0.05, width: width * 0.15, justifyContent: 'center', }}>
                                <Text style={styles.BTCTextStyle1}>BTC</Text>
                            </View>
                        </View>
                        <View style={{ height: height * 0.04, width: width * 0.45, alignItems: 'center' }}>
                            <Text style={styles.ReciveTextStyle}>You will Receive</Text>
                        </View>
                        <View style={{ height: height * 0.07, width: width * 0.45, flexDirection: 'row', justifyContent: "center" }}>
                            <Text style={styles.ReciveTextStyle2}>0.5%</Text>
                            <View style={{ height: height * 0.05, width: width * 0.10, alignSelf: "center" }}>
                                <Text style={styles.ReciveTextStyle1}> p.a.</Text>
                            </View>
                        </View>
                        <View style={{ height: height * 0.06, width: width * 0.72, flexDirection: 'row', justifyContent: "center" }} >
                            <Text style={styles.ReciveTextStyle6}>You can transfer out the funds at anytime and earnings will be paid out every 7 days.</Text>
                        </View>

                        <View style={{ height: height * 0.03, width: width * 0.90, }} >
                            <Text style={styles.CryptoTextStyle}> From Crypto Wallets</Text>
                        </View>
                        <View style={{ height: height * 0.07, width: width * 0.95, flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={{ height: height * 0.05, width: width * 0.10, marginLeft: width * 0.03 }}>
                                <Image style={{ height: height * 0.04, width: width * 0.09, resizeMode: "contain" }}
                                    source={ImagePath.BITCOIN} />
                            </View>
                            <View style={{ height: height * 0.040, width: width * 0.55, justifyContent: "center" }}>
                                <Text style={styles.BITCOINTextStyle}>Bitcoin</Text>
                            </View>
                            <View style={{ height: height * 0.038, width: width * 0.14, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.BITCOINTextStyle1}>0 BTC</Text>
                            </View>
                            <View style={{ height: height * 0.03, width: width * 0.06, }}>
                                <Image style={{ height: height * 0.02, width: width * 0.04, resizeMode: "contain" }}
                                    source={ImagePath.TIC_MARK} />
                            </View>
                        </View>
                        <TouchableOpacity>
                            <ImageBackground source={ImagePath.INSUFBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: height * 0.07, width: width * 0.94 }} >
                                <Text style={{ color: "#FFFFFF", fontSize: height / 55, fontFamily: FONTS.PoppinsSemiBold }}>Insufficient Balance</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <View style={styles.listParentModal1}>
                <FlatList
                    data={DATA}
                    // nestedScrollEnabled={true}
                    //contentContainerStyle={{ paddingBottom: height * 0.22 }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.modalConatiner}>
                                <View style={styles.modalImageView}>
                                    <Image style={{
                                        height: height * 0.04,
                                        width: width * 0.11,
                                        resizeMode: "contain"
                                    }}
                                        source={item.image} />
                                </View>

                                <View style={styles.modalTxtView}>
                                    <Text style={styles.cointext}>{item.coin}</Text>
                                </View>
                                <View style={styles.modalTxtView1}>
                                    <Text style={styles.cointext}>{item.income}</Text>
                                </View>
                            </View>



                        )
                    }}
                />

            </View>

            {/* <ScrollView style={{ marginTop: height * 0.03, paddingVertical: 5, height: height * 1, width: width * 1, }}>

                </ScrollView> */}
            <View style={{ position: "absolute", bottom: 20, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                <CustomButton
                    title="Start Earning Now"
                    ButtonPress={() => setModalVisible(true)}
                />
            </View>
        </View>


    )
}


export default Crypto_Earn

const styles = StyleSheet.create({
    BITCOINTextStyle1: {
        color: "#000000",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.016,
    },
    BITCOINTextStyle: {
        color: "#000000",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.018,
    },
    CryptoTextStyle: {
        color: "#000000",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.014,
        //  textAlign: "center"
    },
    ReciveTextStyle6: {
        color: "#000000",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.013,
        textAlign: "center"
        // alignSelf:"baseline"

    },
    ReciveTextStyle1: {
        color: "#000000",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.016,
        // alignSelf:"baseline"

    },
    ReciveTextStyle2: {
        color: "#000000",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.025,

    },
    ReciveTextStyle: {
        color: "#000000",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.018,

    },
    BTCTextStyle1: {
        color: "#000000",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.016,
        textAlign: "center"
    },
    usdTextStyle1: {
        color: "#000000",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.030,
        textAlign: "center"
    },
    usdTextStyle: {
        color: "#000000",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.022,
        textAlign: "center"
    },
    TermStyles: {
        color: "#1A1A1A",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.014,
    },
    EarnTextStyle: {
        color: "#1A1A1A",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.016,
    },

    headingImageView: {
        height: height * 0.03,
        width: width * 0.20,
        //  borderWidth: 1,
        justifyContent: 'center'
    },
    headingChildView: {
        height: height * 0.03,
        width: width * 0.18,
        // borderWidth: 1
    },
    headingChildView1: {
        height: height * 0.04,
        width: width * 0.29,
        // borderWidth: 1
    },
    flexibleTextStyle: {
        color: "#1A1A1A",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.018,
    },
    percentTextStyle: {
        color: "#1A1A1A",
        fontFamily: FONTS.PoppinsRegular,
        fontSize: height * 0.010,
    },
    headingParantVIew: {
        flexDirection: "row",
        height: height * 0.04,
        width: width * 0.45,
        // borderWidth: 1
    },
    listParentModal: {
        height: height * 0.79,
        width: width * 0.9,
        marginTop: height * 0.02,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    searchIconView: {
        height: height * 0.07,
        width: width * 0.2,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
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
    modalparentView: {
        height: height * 1,
        width: width * 1,
        justifyContent: "flex-end",
        // backgroundColor: "red"
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    crossView: {
        height: height * 0.06,
        width: width * 0.2,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    buyTextView: {
        height: height * 0.06,
        width: width * 0.6,
        // backgroundColor: "green",
        justifyContent: "center",
        // alignItems:"center"
    },
    searchModal: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalView: {
        height: height * 0.79,
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
    modalView3: {
        height: height * 0.65,
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
    modalView1: {
        height: height * 0.42,
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
    modalView5: {
        height: height * 0.65,
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
    modalparentView: {
        height: height * 1,
        width: width * 1,
        justifyContent: "flex-end",
        // backgroundColor: "red"
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    modalheadingView: {
        height: height * 0.08,
        width: width * 55,
        flexDirection: "row"
    },
    modal3View: {
        height: height * 0.6,
        width: width * 1,
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        borderRadius: 25
    },
    modal2View: {
        height: height * 0.4,
        width: width * 1,
        backgroundColor: "transparent",
        alignSelf: "center"
    },
    centeredView: {
        height: height * 1,
        width: width * 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    cointext: {
        color: "#1A1A1A",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.016,

    },
    cointext1: {
        color: "#1A1A1A",
        fontFamily: FONTS.PoppinsSemiBold,
        fontSize: height * 0.018,

    },
    modalTxtView2: {
        height: height * 0.044,
        width: width * 0.69,
        //   borderWidth: 1,
        justifyContent: 'center',
        // alignItems: "center",
        // backgroundColor:"red"
    },
    modalTxtView: {
        height: height * 0.04,
        width: width * 0.54,
        //   borderWidth: 1,
        justifyContent: 'center'
    },
    modalTxtView1: {
        height: height * 0.044,
        width: width * 0.48,
        //  borderWidth: 1,
        justifyContent: 'center'
    },
    modalImageView: {
        height: height * 0.04,
        width: width * 0.12,
        // borderWidth: 1
    },
    modalConatiner1: {
        height: height * 0.07,
        width: width * 10,
        // borderWidth: 1,
        flexDirection: "row"
        // backgroundColor:'green'
    },
    modalConatiner: {
        height: height * 0.07,
        width: width * 10,
        // borderWidth: 1,
        flexDirection: "row"
        // backgroundColor:'green'
    },
    listParentModal1: {
        height: height * 0.28,
        width: width * 0.8,

        marginTop: height * 0.01,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    listParentModal8: {
        height: height * 0.45,
        width: width * 0.9,

        marginTop: height * 0.02,
        //  backgroundColor: "red",
        alignSelf: "center"
    },
    childMOdal1: {
        height: height * 0.10,
        width: width * 0.92,
        // borderWidth: 1,
        flexDirection: "row",
        borderColor: "#EBEEF2"
        , borderBottomWidth: 1
        // marginTop: height * 0.02,
        //  backgroundColor: "red",
        // alignSelf: "center"
    },
    arrowImageView: {
        height: height * 0.022,
        width: width * 0.10,
        //resizeMode:"contain"
        // borderWidth:1,
        justifyContent: "center"
    },
    ArrowimageStyle: {
        height: height * 0.080,
        width: width * 0.020,
        resizeMode: "contain"
    },
    TextVIew1: {
        //  borderWidth: 1,
        height: height * 0.02
        , width: width * 0.23,
    },

    MidTExtstyle: {
        fontSize: height * 0.014,
        color: "#000000",
        fontFamily: FONTS.PoppinsRegular
    },
    MidButtonVIew: {
        // borderWidth: 1,
        height: height * 0.03
        , width: width * 0.32,
        // alignItems: 'center'
        justifyContent: "center",
        marginLeft: width * 0.08,
        flexDirection: 'row'
        // alignSelf:"center"
    },
    TextVIew: {
        // borderWidth: 1,
        height: height * 0.07
        , width: width * 0.70,
    },
    TicImageView: {
        // borderWidth: 1,
        height: height * 0.03
        , width: width * 0.08,
        // alignItems: 'center'
        justifyContent: "center",
        // alignSelf:"center"
    },
    NotficationChild: {
        // borderWidth: 1,
        height: height * 0.08
        , width: width * 0.82,
        flexDirection: "row"
        // flexDirection:"row"
        // marginTop: height * 0.04,
        // marginLeft: width * 0.04,
        // alignSelf:"center",
        // backgroundColor:"white"
    },

    NotficationParent: {
        // borderWidth: 1,
        height: height * 0.27
        , width: width * 0.84,
        marginTop: height * 0.04,
        marginLeft: width * 0.07,
        // alignSelf:"center",
        // backgroundColor:"white"
    },
    HeadingTExt: {
        fontSize: height * 0.02,
        color: "#000000",
        fontFamily: FONTS.PoppinsSemiBold
    },
    HeadingTExt1: {
        fontSize: height * 0.016,
        color: "#191919",
        fontFamily: FONTS.PoppinsSemiBold
    },
    mainContainar: {
        height: "100%",
        width: "100%",
        backgroundColor: "white"

    },
    headingTestVIew: {
        //borderWidth: 1,
        height: height * 0.06
        , width: width * 0.65,
        marginTop: height * 0.04,
        marginLeft: width * 0.07,
        // alignSelf:"center",
        // backgroundColor:"white"
    }

})