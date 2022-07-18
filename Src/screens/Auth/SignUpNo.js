import { SafeAreaView, Modal, TouchableWithoutFeedback, Keyboard, StyleSheet, KeyboardAvoidingView, FlatList, Text, View, Dimensions, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from "../../utils/FontFamily"
import { ImagePath } from '../../utils/ImagePath';
import CustomButton from '../../components/Buttons/CustomButton';
import { CountryCode } from '../../utils/CountryCode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get("screen");

const SignUpNo = (props) => {
    const [countryImage, setCountryImage] = useState();
    const [contrymodal, setcontrymodal] = useState(false);
    const [filterdata, setFilterdata] = useState("");
    const [number, setNumber] = useState(true);
    const [code, setCode] = React.useState("+260");

    // ************ Country Code Search Functions ************
    const SeacrFunct = (value) => {
        if (value !== "") {
            // console.log("countryCode----", CountryCode);
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
            }}
        >
            <View style={styles.item}>
                <Image source={icon} style={styles.image2} resizeMode="cover" />
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.dialcodeText}>{dialCode}</Text>
            </View>
        </TouchableOpacity>
    );


    const renderImage = () => {
        return (
            <View style={{ alignItems: "center", height: height * 0.4, width: width * 1 }}>
                <Image source={ImagePath.SIGNUPNO} resizeMode="contain" style={{ height: 180, width: 180, }} />
                <ImageBackground source={ImagePath.SIGNUPNOD} resizeMode="contain" style={{ height: 260, width: 260, }}>
                    <View style={{ justifyContent: "flex-end", height: height * 0.1, width: width * 0.9, alignSelf: "center", }}>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 35, color: "#2C2C4E" }}>Sign Up</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const renderMidddle = () => {
        return (
            <View style={{ height: height * 0.3, width: width * 0.9, alignSelf: "center" }}>
                <View style={{ height: height * 0.05, width: width * 0.9, alignSelf: "center" }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 45, color: "#2C2C4E" }}>Your Phone Number</Text>
                </View>
                <View
                    style={{
                        height: height * 0.08,
                        width: width * 0.89,

                        alignSelf: "center",
                        backgroundColor: "white",
                        // backgroundColor: "green",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        // borderColor: "#00000010",
                        // borderWidth: 1,
                    }}
                >
                    <TouchableOpacity onPress={() => setcontrymodal(true)}>
                        <View
                            style={{
                                height: height * 0.08,
                                // top: 3,
                                width: width * 0.16, //0.2
                                // borderRightWidth: 0.5,
                                borderWidth: 1,
                                borderColor: "lightgrey",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                // borderRightColor: "rgba(159, 159, 159, 1)",
                                flexDirection: "row",
                                // backgroundColor: "red",
                            }}
                        >
                            <Text style={{
                                fontFamily: FONTS.PoppinsRegular,
                                fontSize: height / 65,
                                // fontWeight: "700",
                                color: "#2C2C4E"
                            }}>{code}</Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: height * 0.08,
                            // top: 3,
                            width: width * 0.7, //0.2
                            // borderRightWidth: 0.5,
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            borderRadius: 10,
                            justifyContent: "space-around",
                            alignItems: "center",
                            borderRightColor: "rgba(159, 159, 159, 1)",
                            flexDirection: "row",
                            // backgroundColor: "red",
                            paddingLeft: 5,
                        }}
                    >
                        <TextInput
                            style={{
                                paddingHorizontal: 5,
                                height: height * 0.06,
                                width: width * 0.65,
                                fontSize: height / 55,
                                color: "#9796A8",
                                // backgroundColor: "red"
                            }}
                            placeholderTextColor="#9796A8"
                            // placeholder="Phone number"
                            returnKeyType="done"
                            keyboardType="number-pad"
                            onChangeText={(txt) => {
                                setNumber(false)
                            }}
                        />
                    </View>
                </View>
                <View style={{ height: height * 0.08, justifyContent: "flex-end", width: width * 0.85, alignSelf: "center" }}>
                    <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 68, color: "#A3A3B2" }}>We use your phone number to verify important {'\n'}changes to your account</Text>
                </View>
            </View>
        )
    }

    const renderModal = () => {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={contrymodal}
                    onRequestClose={() => {
                        setcontrymodal(!contrymodal);
                    }}
                >
                    <TouchableOpacity activeOpacity={1} onPress={() => setcontrymodal(!contrymodal)} style={styles.MainModalContainer}>
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
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }

    return (
        <SafeAreaView >
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ height: height * 1, width: width * 1, backgroundColor: "white" }}>
                        {renderImage()}
                        {renderMidddle()}
                        <View style={{ position: "absolute", bottom: 35, justifyContent: "center", alignItems: "center", height: height * 0.15, width: width * 1 }}>
                            <CustomButton
                                title="Send Verification Code"
                                ButtonPress={() => props.navigation.navigate("Otp")}
                            />
                        </View>
                        {renderModal()}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignUpNo

const styles = StyleSheet.create({
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
    searchView: {
        height: "12%",
        width: width / 1.2,
        // marginVertical: "5%",
        // marginHorizontal: '7%',
        justifyContent: "center",
        alignItems: "center",
    },
    searchInput: {
        borderBottomWidth: 0.9,
        borderColor: "#CFD2D8",
        fontSize: height / 50,
        fontWeight: "600",
        color: "black",
        txtStyle: {
            fontWeight: "400",
            fontSize: height / 55,
            color: "black",
        },
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
    container: {
        flex: 1,
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
})