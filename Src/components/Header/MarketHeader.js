import { ImageBackground, StyleSheet, Text, Dimensions, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../../utils/ImagePath';
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const MarketHeader = (props) => {
    const { backIcon,
        onBackPress,
        AuthLogo,
        AUTHLOGO,
        Title,
        HeaderTitle,
        rightIcon,
        Drawer,
        onDrawerPress,
        RightIconPress,
        RightIconTwo,
        Profile,
        bitcoinImg,
        coinname,
        iconImgTwo,
        iconImg,
        coinCode,
        Faq,
        RightIconTwoPress } =
        props;
    return (
        <View style={{ backgroundColor: "#1D6DFD", height: height * 0.15, width: width * 1 }}>
            <ImageBackground resizeMode="stretch" source={ImagePath.MARKETHEADER} style={{ paddingTop: 20, height: height * 0.22, width: width * 1 }}>
                <View style={{
                    height: height * 0.08, width: width * 1,
                    // backgroundColor: "red", 
                    flexDirection: "row",
                }}>
                    {backIcon ?
                        <View style={{
                            // backgroundColor: "green",
                            justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.13
                        }}>
                            <TouchableOpacity onPress={onBackPress} style={{
                                // backgroundColor: "green",
                                justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.15
                            }}>
                                <Image source={ImagePath.BACKICON} resizeMode="contain" style={{ height: 30, width: 30 }} />
                            </TouchableOpacity>
                        </View>
                        :
                        Drawer ?
                            <View style={{
                                // backgroundColor: "green",
                                justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.13
                            }}>
                                <TouchableOpacity onPress={onDrawerPress}>
                                    <Image source={ImagePath.DRAWER} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                            </View>
                            : null
                    }
                    {HeaderTitle ?
                        <View style={{
                            // backgroundColor: "red",
                            justifyContent: "flex-end", alignItems: "flex-end", height: height * 0.08, width: width * 0.64
                        }}>
                            <View style={{
                                // backgroundColor: "blue",
                                justifyContent: "center", alignItems: "center", height: height * 0.08, width: width * 0.52
                            }}>
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#FFFFFF", fontSize: height / 35 }}>{Title}</Text>
                            </View>
                        </View> : null}
                    {rightIcon ?
                        <View style={{
                            // backgroundColor: "orange",
                            height: height * 0.08, width: width * 0.1,
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}>
                            <TouchableOpacity onPress={RightIconPress} >
                                <ImageBackground source={ImagePath.ICONBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: 30, width: 30 }} >
                                    <Image source={iconImg} resizeMode="contain" style={{ height: 20, width: 20 }} />
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        : null}
                    {RightIconTwo ?
                        <View style={{
                            // backgroundColor: "yellow",
                            height: height * 0.08, width: width * 0.13,
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}>
                            <TouchableOpacity onPress={RightIconTwoPress} >
                                <ImageBackground source={ImagePath.ICONBACK} resizeMode="contain" style={{ justifyContent: "center", alignItems: "center", height: 30, width: 30 }} >
                                    <Image source={iconImgTwo} resizeMode="contain" style={{ height: 20, width: 20 }} />
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        : Faq ?
                            <View style={{
                                // backgroundColor: "yellow",
                                height: height * 0.08, width: width * 0.13,
                                justifyContent: "center",
                                alignItems: "flex-start"
                            }}>
                                <TouchableOpacity onPress={RightIconTwoPress}>
                                    <Image source={ImagePath.FAQ} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                            </View>
                            : Profile ?
                                <View style={{
                                    // backgroundColor: "yellow",
                                    height: height * 0.08, width: width * 0.13,
                                    justifyContent: "center",
                                    alignItems: "flex-start"
                                }}>
                                    <TouchableOpacity onPress={RightIconTwoPress}>
                                        <Image source={ImagePath.FAQ} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                    </TouchableOpacity>
                                </View>
                                : null
                    }
                </View>
                <View style={{
                    alignSelf: "center", flexDirection: "row", alignItems: "center", height: height * 0.06, width: width * 0.9,
                    // backgroundColor: "green"
                }}>
                    <View style={{
                        height: height * 0.06, width: width * 0.12,
                        // backgroundColor: "pink",
                        justifyContent: "center", alignItems: "flex-start"
                    }}>
                        <Image source={bitcoinImg} resizeMode="contain" style={{ height: 35, width: 40 }} />
                    </View>
                    <View style={{
                        height: height * 0.06, width: width * 0.23,
                        // backgroundColor: "grey",
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ fontFamily: FONTS.PoppinsMedium, color: "#FFFFFF", fontSize: height / 40 }}>{coinname}</Text>
                    </View>
                    <View style={{
                        height: height * 0.06, width: width * 0.12,
                        // backgroundColor: "blue",
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ fontFamily: FONTS.PoppinsMedium, color: "#FFFFFF", fontSize: height / 60 }}>({coinCode})</Text>
                    </View>
                </View>
            </ImageBackground>
        </View >
    )
}

export default MarketHeader

const styles = StyleSheet.create({})