import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../Components/CustomButton'
import CustomInput from '../../Components/CustomInput'
import { ImagePath } from '../../Utils/ImagePath'
import AuthInput from '../../Components/AuthInput'
import HomeHeader from '../../Components/HomeHeader'
import { FONTS } from '../../Utils/FontFamily'
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { ScrollView } from 'react-native-gesture-handler'
const { height, width } = Dimensions.get("screen")

const slides = [
    {
        key: 1,
        image: ImagePath.COVER,
        heading: "Crypto Concepts Decoded for All!",
        paraheading: "Watch Fincocktail clear doubts about",
        subheading: "cryptos one question at a time"
    },
    {
        key: 2,
        image: ImagePath.COVER,
        heading: "Crypto Concepts Decoded for All!",
        paraheading: "Watch Fincocktail clear doubts about",
        subheading: "cryptos one question at a time"
    },
    {
        key: 3,
        image: ImagePath.COVER,
        heading: "Crypto Concepts Decoded for All!",
        paraheading: "Watch Fincocktail clear doubts about",
        subheading: "cryptos one question at a time"
    },
];


const Home = (props) => {

    const renderSwiper = () => {
        return (
            <View style={styles.swiperHeader}>
                <SwiperFlatList
                    paginationStyle={{
                        width: width * 0.2,
                        height: height * 0.01,
                        // backgroundColor: "cyan",
                        alignSelf: "center",
                        // marginTop: height * 0.1,
                        justifyContent: "center",
                    }}
                    paginationStyleItemActive={{
                        width: width * 0.02,
                        height: height * 0.009,
                        backgroundColor: "#2FC7F6",
                        alignSelf: "center"
                    }}
                    paginationStyleItem={{
                        width: width * 0.02,
                        height: height * 0.009,
                        borderRadius: 20,
                    }}
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    data={slides}
                    showPagination={true}
                    paginationActiveColor="blue"
                    renderItem={_renderItem}
                ></SwiperFlatList>
            </View>
        )
    }

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.swiperHeader}>
                <Image source={item.image} resizeMode="stretch" style={{ height: height * 0.25, width: width * 0.9 }} />
            </View>
        );
    };

    const renderSound = () => {
        return (
            <View style={styles.soundView}>
                <View style={styles.mainSoundView}>
                    <TouchableOpacity>
                        <Image source={ImagePath.SOUND} resizeMode="contain" style={{ height: height * 0.03, width: width * 0.04 }} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: width * 0.02, fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 75 }}>Announcement on the Suspennsion of the MANDOX</Text>
                </View>
                <View style={styles.statsView}>
                    <View style={styles.subPart}>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 70 }}>BTC/USDT</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FA4B24", fontSize: height / 60 }}>45942.44</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FA4B24", fontSize: height / 70 }}>-0.50%</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#929292", fontSize: height / 70 }}>$45942.44</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.subPart}>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 70 }}>ETH/USDT</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#4ED46C", fontSize: height / 60 }}>45942.44</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#4ED46C", fontSize: height / 70 }}>-0.50%</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#929292", fontSize: height / 70 }}>$45942.44</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.subPart}>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 70 }}>HTB/USDT</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#4ED46C", fontSize: height / 60 }}>45942.44</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#4ED46C", fontSize: height / 70 }}>-0.50%</Text>
                        <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#929292", fontSize: height / 70 }}>$45942.44</Text>
                    </View>
                </View>
            </View>
        )
    }

    const renderBtn = () => {
        return (
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.depositBtn}>
                    <Image source={ImagePath.DEPOSIT} resizeMode="contain" style={{ height: height * 0.06, width: width * 0.08 }} />
                    <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 95 }}>Deposit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainBtn}>
                    <Image source={ImagePath.STACKINGBTN} resizeMode="contain" style={{ height: height * 0.06, width: width * 0.08 }} />
                    <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 95 }}>Stacking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainBtn}>
                    <Image source={ImagePath.NATIVE} resizeMode="contain" style={{ height: height * 0.06, width: width * 0.08 }} />
                    <Text style={{ fontFamily: FONTS.PoppinsSemiBold, color: "#FFFFFF", fontSize: height / 95 }}>Native token</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#141414', }}>
            <HomeHeader
                LeftIcon={true}
                leftImg={ImagePath.PROFILE}
                leftPress={() => props.navigation.openDrawer()}
                RightIcon={true}
                RightIconTwo={true}
                rightImg={ImagePath.HEADPHONE}
                RightIconTwoImg={ImagePath.BELL}
            />
            {renderSwiper()}
            <ScrollView>
                {renderSound()}
                {renderBtn()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    swiperHeader: {
        height: height * 0.25,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "grey",
        borderRadius: 15,
    },
    soundView: {
        height: height * 0.2,
        width: width * 1,
        alignSelf: "center",
        // backgroundColor: "grey",
        justifyContent: "center"
    },
    btnView: {
        height: height * 0.13,
        width: width * 1,
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        backgroundColor: "#1E1E1E",
        justifyContent: "space-between"
    },
    mainBtn: {
        height: height * 0.1,
        width: width * 0.2,
        alignSelf: "center",
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    depositBtn: {
        height: height * 0.1,
        width: width * 0.1,
        alignSelf: "center",
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    mainSoundView: {
        height: height * 0.04,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center"
    },
    statsView: {
        height: height * 0.15,
        width: width * 1,
        alignSelf: "center",
        backgroundColor: "#1E1E1E",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    subPart: {
        height: height * 0.15,
        width: width * 0.33,
        alignSelf: "center",
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    separator: {
        height: height * 0.09,
        width: width * 0.003,
        alignSelf: "center",
        backgroundColor: "#404040",
        flexDirection: "row",
        alignItems: "center"
    },

})