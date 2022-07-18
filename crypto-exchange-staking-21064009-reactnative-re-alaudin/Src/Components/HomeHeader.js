import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from '../Utils/FontFamily';
import { ImagePath } from '../Utils/ImagePath';
const { height, width } = Dimensions.get("screen")

const HomeHeader = (props) => {
    const {
        title,
        rightPress,
        RightIcon,
        LeftIcon,
        leftPress,
        rightImg,
        leftImg,
        RightIconTwo,
        RightIconTwoImg,
        RightIconTwoPress,
    } = props;

    return (
        <View style={styles.headerParent}>
            {
                LeftIcon ?
                    <TouchableOpacity onPress={leftPress} style={{ justifyContent: "center", alignItems: "center", height: height * 0.08, width: width * 0.15, }}>
                        <Image source={leftImg} style={styles.headerImage} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={leftPress} style={{ justifyContent: "center", alignItems: "center", height: height * 0.08, width: width * 0.15, }}>
                        <Image source={leftImg} style={styles.headerImage} />
                    </TouchableOpacity>
            }
            <View style={{ justifyContent: "center", alignItems: "flex-start", alignSelf: "center", height: height * 0.08, width: width * 0.55, }}>
                <View style={styles.inputView}>
                    <Image source={ImagePath.SEARCH} resizeMode="contain" style={{ height: height * 0.02, width: width * 0.03, }} />
                    <TextInput placeholder='Search coin' placeholderTextColor={"#9A9A9A"} style={{ height: height * 0.04, width: width * 0.37, fontSize: width / 55, color: "#FFFFFF" }} />
                </View>
            </View>
            {
                RightIcon ?
                    <TouchableOpacity onPress={rightPress} style={{ justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.15, }}>
                        <Image source={rightImg} style={styles.headerImage} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={leftPress} style={{ justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.15, }}>
                        <Image source={leftImg} style={styles.headerImage} />
                    </TouchableOpacity>
            }
            {
                RightIconTwo ?
                    <TouchableOpacity onPress={RightIconTwoPress} style={{ justifyContent: "center", alignItems: "center", height: height * 0.08, width: width * 0.15, }}>
                        <Image source={RightIconTwoImg} style={styles.headerImage} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={leftPress} style={{ justifyContent: "center", alignItems: "center", height: height * 0.08, width: width * 0.15, }}>
                        <Image source={leftImg} style={styles.headerImage} />
                    </TouchableOpacity>
            }
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerParent: {
        height: height * 0.08,
        width: width * 1,
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        // paddingHorizontal: width * 0.04
        // paddingRight: width * 0.040
    },
    headerImage: {
        height: height * 0.05,
        width: width * 0.05,
        resizeMode: "contain"
    },
    walletText: {
        fontFamily: "Poppins-Bold",
        fontSize: height / 45,
        // color: COLOR.BUTTONCOLOR
    },
    inputView: {
        height: height * 0.03,
        width: width * 0.45,
        // backgroundColor: "grey",
        borderWidth: 1,
        borderColor: "#9A9A9A",
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 6
    },
})