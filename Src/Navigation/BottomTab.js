import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import React from 'react'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar'
import Wallet from '../screens/Home/Wallet'
import Market from '../screens/Market/Market';
import Reward from '../screens/Reward/Reward';
import { ImagePath } from '../utils/ImagePath';
import { FONTS } from '../utils/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearTextGradient } from "react-native-text-gradient";
import Card from '../screens/Card/Card';
const { height, width } = Dimensions.get("window");


const BottomTab = (props) => {
    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';
        let icon2 = '';
        let titleOn = '';
        let titleOff = '';
        let title = '';

        switch (routeName) {
            case 'title1':

                icon = require("../assets/Images/BottomTab/WalletOn.png");
                icon2 = require("../assets/Images/BottomTab/WalletOff.png");
                titleOn = require("../assets/Images/BottomTab/WalletTitleOn.png");
                titleOff = require("../assets/Images/BottomTab/WalletTitleOff.png");
                title = "Wallet"
                break;
            case 'title2':
                icon = require("../assets/Images/BottomTab/MarketOn.png");
                icon2 = require("../assets/Images/BottomTab/MarketOff.png");
                titleOn = require("../assets/Images/BottomTab/MarkteTitleOn.png");
                titleOff = require("../assets/Images/BottomTab/MarketTitleOff.png");
                title = "Market"
                break;
            case 'title3':
                icon = require("../assets/Images/BottomTab/RewardOn.png");
                icon2 = require("../assets/Images/BottomTab/Reward.png");
                titleOn = require("../assets/Images/BottomTab/RewardTitleOn.png");
                titleOff = require("../assets/Images/BottomTab/RewardTitleOff.png");
                title = "Reward"
                break;
            case 'title4':
                icon = require("../assets/Images/BottomTab/CardOn.png");
                icon2 = require("../assets/Images/BottomTab/Card.png");
                titleOn = require("../assets/Images/BottomTab/CardNewTitle.png");
                titleOff = require("../assets/Images/BottomTab/CardNewTitleOff.png");
                title = "Card"
                break;
        }

        return (
            // <Ionicons
            //     name={icon}
            //     size={25}
            //     // android={icon}
            //     color={routeName === selectedTab ? 'black' : 'gray'}
            // />
            <View style={{ height: 40, width: 50, justifyContent: "center", alignItems: "center", }}>
                <Image style={{ height: 23, width: 23 }} source={routeName === selectedTab ? icon : icon2} resizeMode="contain" />
                <Image style={{ height: 15, width: 30 }} source={routeName === selectedTab ? titleOn : titleOff} resizeMode="contain" />
            </View>
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <CurvedBottomBar.Navigator
                style={styles.bottomBar}
                strokeWidth={0.5}
                height={55}
                type="up"
                circleWidth={55}
                bgColor="white"
                initialRouteName="title1"
                borderTopLeftRight
                swipeEnabled
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                            }}
                            onPress={() => props.navigation.navigate("HomePage")}>
                            <Image source={ImagePath.BASE} />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >
                <CurvedBottomBar.Screen
                    name="title1"
                    position="left"
                    component={({ navigate }) => (
                        <Wallet {...props} />
                    )}

                />
                <CurvedBottomBar.Screen
                    name="title2"
                    position="left"
                    component={({ navigate }) => (
                        <Market {...props} />
                    )}
                />
                <CurvedBottomBar.Screen
                    name="title3"
                    component={({ navigate }) => (
                        <Reward {...props} />
                    )}
                    position="right"
                />
                <CurvedBottomBar.Screen
                    name="title4"
                    component={({ navigate }) => (
                        <Card {...props} />
                    )}
                    position="right"
                />
            </CurvedBottomBar.Navigator>
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        marginVertical: 5,
    },
    bottomBar: {},
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    img: {
        width: 30,
        height: 30,
    },
})