import { StyleSheet, Text, Image, View, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Settings from '../Screen/Settings/Settings';
import Wallet from '../screens/Home/Wallet';
import Market from '../screens/Market/Market';
import Reward from '../screens/Reward/Reward';
import Card from '../screens/Card/Card';
import Home from "../screens/Home/Home"
const { height, width } = Dimensions.get("window");

import { ImagePath } from "../utils/ImagePath";
import { FONTS } from '../utils/FontFamily';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        // <ImageBackground source={ImagePath.BOTTOMTABBACK} resizeMode="contain" style={{ height: height * 0.96, width: width * 1 }} >
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                position: "absolute",
                tabBarStyle: {
                    position: "absolute",
                    height: height * 0.1,
                    backgroundColor: "white",
                    width: width * 1,
                    alignItems: "center",
                    borderTopLeftRadius: height / 25,
                    borderTopRightRadius: height / 25,
                    borderColor: "white",
                    borderTopWidth: 0,
                    elevation: 0,
                    bottom: -height * 0.0,
                },
            }}
        >
            {/* ************ Home Tab ************ */}
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                // component={DrawerRoutes}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/WalletOn.png")}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "blue", fontSize: height / 65 }}>Wallet</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/WalletOff.png")}
                                    resizeMode="contain"
                                    style={styles.image}
                                // style={{ height}}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Wallet</Text>
                            </View>
                        ),
                }}
            />

            {/* ************ Home Tab ************ */}
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/MarketOn.png")}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "blue", fontSize: height / 65 }}>Market</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/MarketOff.png")}
                                    resizeMode="contain"
                                    style={styles.image}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Market</Text>
                            </View>
                        ),
                }}
            />
            {/* ************ Home Tab ************ */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        <View style={styles.TabImageContainer}>
                            <Image
                                source={require("../assets/Images/BottomTab/BottomHomeIcon.png")}
                                resizeMode="contain"
                                style={{ position: "absolute", bottom: 1, height: height * 0.12, width: width * 0.29 }}
                            />
                        </View>

                }}
            />

            {/* ************ Reward Tab ************ */}
            <Tab.Screen
                name="Reward"
                // component={CollectionsStackScreen}
                component={Reward}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/RewardOn.png")}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "blue", fontSize: height / 65 }}>Reward</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/Reward.png")}
                                    resizeMode="contain"
                                    style={[styles.image]}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Reward</Text>
                            </View>
                        ),
                }}
            />

            {/* ************ Card Tab ************ */}
            <Tab.Screen
                name="Card"
                component={Card}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/CardOn.png")}
                                    resizeMode="contain"
                                    style={[styles.img]}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "blue", fontSize: height / 65 }}>Card</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={require("../assets/Images/BottomTab/Card.png")}
                                    resizeMode="contain"
                                    style={[styles.image]}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Card</Text>
                            </View>
                        ),
                }}
            />

        </Tab.Navigator>
        // </ImageBackground>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    img: {
        height: height * 0.05,
        width: width * 0.06,
    },
    image: {
        height: height * 0.05,
        width: width * 0.06,
    },
    TabImageContainer: {
        height: height * 0.08,
        width: width * 0.15,
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "red"
    },
})