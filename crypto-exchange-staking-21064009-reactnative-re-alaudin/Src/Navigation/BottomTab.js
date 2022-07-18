import { StyleSheet, Text, Image, View, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Screen/Settings/Settings';
import Stacking from '../Screen/Stacking/Stacking';
import Trade from '../Screen/Trade/Trade';
import Market from "../Screen/Market/Market"
import Wallet from "../Screen/Wallet/Wallet"
import Home from '../Screen/Home/Home';
const { height, width } = Dimensions.get("window");

import { ImagePath } from "../Utils/ImagePath";
import { FONTS } from '../Utils/FontFamily';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                position: "absolute",
                tabBarStyle: {
                    position: "absolute",
                    height: height / 10,
                    height: height * 0.09,
                    backgroundColor: "black",
                    width: width,
                    alignItems: "center",
                    // borderTopLeftRadius: height / 30,
                    // borderTopRightRadius: height / 30,
                    borderColor: "red",
                    borderTopWidth: 0,
                    bottom: -height * 0.0,
                },
            }}
        >
            {/* ************ Explore Tab ************ */}
            <Tab.Screen
                name="Home"
                component={Home}
                // component={DrawerRoutes}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.HOMEON}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#EAB73B", fontSize: height / 65 }}>Home</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.HOMEOFF}
                                    resizeMode="contain"
                                    style={styles.image}
                                // style={{ height}}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Home</Text>
                            </View>
                        ),
                }}
            />

            {/* ************ Auctions Tab ************ */}
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.MARKETON}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#EAB73B", fontSize: height / 65 }}>Market</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.MARKETOFF}
                                    resizeMode="contain"
                                    style={styles.image}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Market</Text>
                            </View>
                        ),
                }}
            />

            {/* ************ Collections Tab ************ */}
            <Tab.Screen
                name="Trade"
                // component={CollectionsStackScreen}
                component={Trade}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.TRADEON}
                                    resizeMode="contain"
                                    style={styles.img}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#EAB73B", fontSize: height / 65 }}>Trade</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.TRADEOFF}
                                    resizeMode="contain"
                                    style={[styles.image]}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Trade</Text>
                            </View>
                        ),
                }}
            />

            {/* ************ Wallet Tab ************ */}
            <Tab.Screen
                name="Stacking"
                component={Stacking}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.STACKINGON}
                                    resizeMode="contain"
                                    style={[styles.img]}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#EAB73B", fontSize: height / 65 }}>Stacking</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.STACKINGOFF}
                                    resizeMode="contain"
                                    style={[styles.image]}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Stacking</Text>
                            </View>
                        ),
                }}
            />

            {/* ************ Profile Tab ************ */}
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                // component={EditProfile}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        focused ? (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.WALLETON}
                                    resizeMode="contain"
                                    style={[styles.img]}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#EAB73B", fontSize: height / 65 }}>Wallet</Text>
                            </View>
                        ) : (
                            <View style={styles.TabImageContainer}>
                                <Image
                                    source={ImagePath.WALLETOFF}
                                    resizeMode="contain"
                                    style={styles.image}
                                />
                                <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#929292", fontSize: height / 65 }}>Wallet</Text>
                            </View>
                        ),
                }}
            />
        </Tab.Navigator>
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