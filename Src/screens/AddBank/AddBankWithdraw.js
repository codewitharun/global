import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
import { CountryCode } from '../../utils/CountryCode';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const AddBank = (props) => {
    const [contrymodal, setcontrymodal] = useState(false);
    // ************ Country Code States Starts Here ************
    const [filterdata, setFilterdata] = useState("");
    const [name, setName] = useState("India");
    const [countryImage, setCountryImage] = useState();
    const [code, setCode] = React.useState("+260");
    const [isText, setIsText] = React.useState("");

    // ************ Country Code Search Functions ************
    const SeacrFunct = (value) => {
        if (value !== "") {
            let mydata = CountryCode.filter((item) =>
                item.label.toLowerCase().includes(value.toLowerCase())
            );
            setFilterdata(mydata);
            setIsText(value);
        }
    };

    // ************ Country Code Render Item ************
    const renderItem = ({ item }) => (
        < Item name={item.label} dialCode={item.value} icon={item.icon} />
    );

    // ************ Country Code Item Functions ************
    const Item = ({ name, dialCode, icon }) => (
        <TouchableOpacity
            key={String(name)}
            onPress={() => {
                setCode(dialCode);
                setCountryImage(icon);
                setcontrymodal(!contrymodal);
                setName(name)
            }}
        >
            <View style={styles.item}>
                <Image source={icon} style={styles.image2} resizeMode="cover" />
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.dialcodeText}>{dialCode}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderDetails = () => {
        return (
            <View style={styles.detailParentView}>
                <View style={styles.imgView}>
                    <Image source={ImagePath.WALLET} resizeMode="contain" style={{ height: 20, width: 20 }} />
                </View>
                <View style={styles.textView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Available Balance : $0.00</Text>
                </View>
            </View>
        )
    }

    const renderModal = () => {
        return (
            <View>
                {/* ************ Country Code Modal ************ */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={contrymodal}
                    onRequestClose={() => {
                        setcontrymodal(!contrymodal);
                    }}
                >
                    <View style={styles.MainModalContainer}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                        >
                            <View style={styles.ModalSecondContainer}>
                                <View style={styles.searchView}>
                                    <TextInput
                                        value={filterdata}
                                        style={styles.searchInput}
                                        placeholder="Search country name"
                                        onChangeText={(text) => {
                                            setIsText(text);
                                            SeacrFunct(text);
                                        }}
                                        placeholderTextColor="#9796A8"
                                    />
                                </View>

                                <View style={{ height: "80%", width: width }}>
                                    <FlatList
                                        data={filterdata ? filterdata : CountryCode}
                                        renderItem={renderItem}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => item.value}
                                    />
                                </View>
                                <View style={styles.ModalThirdContainer}></View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </Modal>
            </View>
        )
    }

    const renderInfo = () => {
        return (
            <View style={styles.infoView}>
                <View style={styles.depositView}>
                    <View style={styles.depoTxt}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Select Withdrawal Balance</Text>
                    </View>
                    <View style={styles.touchBar}>
                        <TouchableOpacity style={styles.touchInside}>
                            <View style={styles.imgPaye}>
                                <Image source={ImagePath.MOBILE} resizeMode="contain" style={{ height: 30, width: 30, }} />
                            </View>
                            <View style={styles.payTxt}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Mobile Money</Text>
                            </View>
                            <View style={styles.downArrow}>
                                <Image source={ImagePath.DOWNARROW} resizeMode="contain" style={{ height: 13, width: 13, }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.depoTxt, { marginTop: height * 0.02 }]}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Country</Text>
                    </View>
                    <View style={styles.touchBar}>
                        <TouchableOpacity onPress={() => setcontrymodal(true)} style={styles.touchInside}>
                            <View style={styles.imgPaye}>
                                <Image source={countryImage ? countryImage : require("../../assets/Images/countryimages/in.png")} resizeMode="contain" style={{ height: 30, width: 30, }} />
                            </View>
                            <View style={styles.payTxt}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>{name}</Text>
                            </View>
                            <View style={styles.downArrow}>
                                <Image source={ImagePath.DOWNARROW} resizeMode="contain" style={{ height: 13, width: 13, }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.depoTxt, { marginTop: height * 0.02 }]}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Network Operator</Text>
                    </View>
                    <View style={styles.touchBar}>
                        <TouchableOpacity style={styles.touchInside}>
                            <View style={styles.imgPaye}>
                                <Image source={ImagePath.NETWORK} resizeMode="contain" style={{ height: 30, width: 30, }} />
                            </View>
                            <View style={styles.payTxt}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>MTN MOMO</Text>
                            </View>
                            <View style={styles.downArrow}>
                                <Image source={ImagePath.DOWNARROW} resizeMode="contain" style={{ height: 13, width: 13, }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.depoTxt, { marginTop: height * 0.02 }]}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Cashout Number</Text>
                    </View>
                    <View style={styles.touchBar}>
                        <View style={styles.touchInside}>
                            <View style={styles.codeView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>{code}</Text>
                            </View>
                            <View style={styles.separator}>

                            </View>
                            <View style={styles.input}>
                                <TextInput style={{ marginLeft: width * 0.02, width: width * 0.5, color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }} />
                            </View>

                        </View>
                    </View>
                    <View style={[styles.depoTxt, { marginTop: height * 0.02 }]}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Enter Amount</Text>
                    </View>
                    <View style={styles.touchBar}>
                        <TouchableOpacity style={styles.touchInside}>
                            <View style={styles.codeView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>XAF</Text>
                            </View>
                            <View style={styles.separator}>

                            </View>
                            <View style={[styles.payTxt, { marginLeft: width * 0.03 }]}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>10,000.00</Text>
                            </View>
                            <View style={styles.downArrow}>
                                <Image source={ImagePath.DOWNARROW} resizeMode="contain" style={{ height: 13, width: 13, }} />
                            </View>
                        </TouchableOpacity>
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
                Title="Add Money to Wallet"
            />
            {renderDetails()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 5, height: height * 1, width: width * 1, }}>
                {renderInfo()}
                <View style={{ bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.12, width: width * 1 }}>
                    <CustomButton
                        title="Withdraw"
                        ButtonPress={() => props.navigation.navigate("TransactionSuccessful")}
                    />
                </View>
            </ScrollView>

            {renderModal()}
        </SafeAreaView>
    )
}

export default AddBank

const styles = StyleSheet.create({
    detailParentView: {
        height: height * 0.07,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.03,
        flexDirection: "row"
    },
    imgView: {
        height: height * 0.07,
        width: width * 0.1,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    textView: {
        height: height * 0.07,
        width: width * 0.8,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    infoView: {
        height: height * 0.8,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        marginTop: height * 0.02
    },
    depositView: {
        height: height * 0.1,
        width: width * 0.9,
        // backgroundColor: "green",
        alignSelf: "center"
    },
    depoTxt: {
        height: height * 0.04,
        width: width * 0.9,
        // backgroundColor: "pink",
        justifyContent: "center",

    },
    touchBar: {
        height: height * 0.085,
        width: width * 0.9,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    touchInside: {
        height: height * 0.06,
        width: width * 0.9,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgrey",
        // backgroundColor: "green",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
    },
    imgPaye: {
        height: height * 0.06,
        width: width * 0.23,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    codeView: {
        height: height * 0.06,
        width: width * 0.2,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    payTxt: {
        height: height * 0.06,
        width: width * 0.4,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    input: {
        height: height * 0.06,
        width: width * 0.6,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    separator: {
        height: height * 0.04,
        width: width * 0.004,
        backgroundColor: "#2C2C4E",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    downArrow: {
        height: height * 0.06,
        width: width * 0.3,
        // backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
    // ***** Country Code Modal *****
    MainModalContainer: {
        height: height * 1,
        width: width * 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red"
        backgroundColor: "rgba(0,0,0,0.55)",
    },
    ModalSecondContainer: {
        height: height * 0.5,
        width: width * 0.93,
        backgroundColor: "#ECECEC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    ModalThirdContainer: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "10%",
        position: "absolute",
        bottom: Platform.OS === "ios" ? 20 : 0,
        width: width,
    },


    image2: {
        height: height * 0.03,
        width: width * 0.07,
    },
    item: {
        // marginHorizontal: '10%',
        marginVertical: "3%",
        // justifyContent: 'center',
        // width: width / 1.1,
        width: width / 1.3,
        alignSelf: "center",
        flexDirection: "row",
    },

    nameText: {
        fontSize: height / 50,
        alignSelf: "center",
        marginLeft: 15,
        color: "black",
        width: width / 1.7,
    },
    dialcodeText: {
        fontSize: height / 50,
        alignSelf: "center",
        marginLeft: height / 70,
        color: "black",
    },
})