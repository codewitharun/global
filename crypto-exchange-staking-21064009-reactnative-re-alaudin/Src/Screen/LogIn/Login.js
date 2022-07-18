import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get("screen");
import { ImagePath } from '../../Utils/ImagePath';
import { FONTS } from '../../Utils/FontFamily';
import AuthInput from '../../Components/AuthInput';

const Login = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Drawer")}>
                        <Image style={styles.CrossImageStyle}
                            source={ImagePath.Cross} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headingText}>
                    <Text style={styles.headingTextStyle}>E-bulls Account Login</Text>
                </View >
                <View style={styles.ButtonSliderView}>

                    <TouchableOpacity style={styles.EmailButton}>
                        <Text style={styles.EmailTextStyle}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.PhoneNumberStyle}>Phone number</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.EmailMainScreen}>
                    <View style={styles.EmailTextView}>
                        <Text style={styles.TextEmailStyle}>Email</Text>
                    </View>
                    <AuthInput
                        placeholder="Enter Your Email"
                        placeholderTextColor="#8E8E8E"
                        LeftIcon={true}
                        leftImg={ImagePath.Email_Icon}
                    />

                </View>



            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    TextEmailStyle: {
        color: "#FFFFFF",
        fontSize: height * 0.017,
        fontFamily: FONTS.PoppinsRegular
    },
    EmailTextView: {
        //  backgroundColor:'blue',
        height: height * 0.05,
        width: width * 0.85,
        alignSelf: "center",
        justifyContent: 'center'
    },
    EmailMainScreen: {
        // backgroundColor: 'green',
        height: height * 0.15,
        width: width * 0.95,
        alignSelf: "center",
        alignItems: 'center',
        marginTop: height * 0.02
    },
    PhoneNumberStyle: {
        color: "#FFFFFF",
        fontSize: height * 0.017,
        fontFamily: FONTS.PoppinsRegular
    },
    EmailTextStyle: {
        color: "#000000",
        fontSize: height * 0.017,
        fontFamily: FONTS.PoppinsRegular
    },
    EmailButton: {
        backgroundColor: "#EAB73B",
        height: height * 0.045,
        width: width * 0.233,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 7
    },
    ButtonSliderView: {
        // backgroundColor: "blue",
        height: height * 0.08,
        width: width * 0.7,
        alignSelf: "flex-end",
        justifyContent: 'space-evenly',
        flexDirection: "row",
        alignItems: "center"
    },
    CrossImageStyle: {
        height: height * 0.02,
        width: width * 0.04,
        resizeMode: 'contain'
    },
    headingTextStyle: {
        color: "#FFFFFF",
        fontSize: height * 0.03,
        fontFamily: FONTS.PoppinsBold
    },
    headerView: {
        // backgroundColor:"blue",
        height: height * 0.06,
        width: width * 0.9,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: "flex-end"
    },
    headingText: {
        //  backgroundColor:"blue",
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "flex-end",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: height * 0.04
    },
    mainContainer: {
        height: height * 1,
        width: width * 1,
        backgroundColor: "#141414"
    }
})