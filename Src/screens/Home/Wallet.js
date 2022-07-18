import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import WalletHeader from '../../components/Header/WalletHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const DATA = [
    {
        key: 1,
        coin: "Bitcoin",
        amt: "0.00",
        image: ImagePath.BITCOIN
    },
    {
        key: 2,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH
    },
    {
        key: 3,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG
    },
    {
        key: 4,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH
    },
    {
        key: 5,
        coin: "Bitcoin",
        amt: "0.00",
        image: ImagePath.BITCOIN
    },
    {
        key: 6,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH
    },
    {
        key: 7,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG
    },
    {
        key: 8,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH
    },
    {
        key: 9,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH
    },
    {
        key: 10,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG
    },
    {
        key: 11,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH
    },
    {
        key: 12,
        coin: "Etherium",
        amt: "0.00",
        image: ImagePath.ETH
    },
    {
        key: 13,
        coin: "Tether",
        amt: "0.00",
        image: ImagePath.BNG
    },
    {
        key: 14,
        coin: "BNB",
        amt: "0.00",
        image: ImagePath.TTH
    },


]

const Wallet = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [sendModal, setSendModal] = useState(false)
    const [sendModalTwo, setSendModalTwo] = useState(false)

    const renderBalance = () => {
        return (
            <View style={styles.balncHeader}>
                <View style={styles.blcView}>
                    <View style={{ height: height * 0.05, justifyContent: "flex-end", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#B3B4B7", fontSize: height / 65, fontFamily: FONTS.PoppinsSemiBold }}>Balance</Text>
                    </View>
                    <View style={{ height: height * 0.07, justifyContent: "center", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 25, fontFamily: FONTS.PoppinsSemiBold }}>$ 14,400</Text>
                    </View>
                    <View style={{ height: height * 0.04, justifyContent: "center", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#B3B4B7", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>Monthly profit</Text>
                    </View>
                    <View style={{ height: height * 0.05, justifyContent: "flex-start", width: width * 0.5, backgroundColor: "white" }}>
                        <Text style={{ color: "#777E90", fontSize: height / 38, fontFamily: FONTS.PoppinsSemiBold }}>$105.40</Text>
                    </View>
                </View>
                <View style={styles.dollarView}>
                    <ImageBackground resizeMode="contain" source={ImagePath.DOLLAR} style={{ height: 170, width: 170, alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity style={styles.usdView}>
                            <Text style={{ color: "#0000FF", fontSize: height / 53, fontFamily: FONTS.PoppinsSemiBold }}>USD</Text>
                            <Image source={ImagePath.DOWN} resizeMode="contain" style={{ height: 25, width: 13 }} />
                        </TouchableOpacity>
                        <View style={styles.growView}>
                            <ImageBackground resizeMode="contain" source={ImagePath.GROW} style={{ height: 40, width: 60, backgroundColor: "lighblue", alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 7 }}>
                                <Image source={ImagePath.UP} resizeMode="contain" style={{ height: 9, width: 13 }} />
                                <Text style={{ color: "#FFFFFF", fontSize: height / 70, fontFamily: FONTS.PoppinsRegular }}>+13%</Text>
                            </ImageBackground>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }

    const renderButton = () => {
        return (
            <View style={styles.btnView}>
                <View style={styles.recParent}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.btn}>
                        <Image source={ImagePath.RECIEVE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>Recieve</Text>
                </View>
                <View style={styles.sendParent}>
                    <TouchableOpacity onPress={() => setSendModal(true)} style={styles.btn}>
                        <Image source={ImagePath.SEND} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>Send</Text>
                </View>
                <View style={styles.tradeParent}>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={ImagePath.TRADE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>Trade</Text>
                </View>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View style={styles.listParent}>
                <Text style={{ marginTop: height * 0.03, color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>All Coins</Text>
                <FlatList
                    data={DATA}
                    nestedScrollEnabled={true}
                    renderItem={(item) => renderData(item)}
                    contentContainerStyle={{ paddingBottom: height * 0.15 }}
                />
            </View>
        )
    }

    const renderModalRecieve = () => {
        return (
            // <View style={styles.modalView}>
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
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Receive Cryptocurrency</Text>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.crossView}>
                                <Image source={ImagePath.CROSSBLUE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.searchparentModal}>
                            <View style={styles.input}>
                                <TextInput placeholder='Cryptocurrency'
                                    placeholderTextColor={"#B3B4B7"}
                                    style={{
                                        fontSize: height / 50,
                                        color: "black"
                                    }}
                                />
                            </View>
                            <TouchableOpacity style={styles.searchIconView}>
                                <Image source={ImagePath.SEARCH} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listParentModal}>
                            <FlatList
                                data={DATA}
                                nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                renderItem={(item) => renderDataModal(item)}
                                contentContainerStyle={{ paddingBottom: height * 0.22 }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            // </View>
        )
    }

    const renderModalSend = () => {
        return (
            // <View style={styles.modalView}>
            <Modal
                backdropColor={'green'}
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={sendModal}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.modalView}>
                        <View style={styles.searchModal}>
                            <View style={styles.buyTextView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Send Cryptocurrency</Text>
                            </View>
                            <TouchableOpacity onPress={() => setSendModal(false)} style={styles.crossView}>
                                <Image source={ImagePath.CROSSBLUE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.searchparentModal}>
                            <View style={styles.input}>
                                <TextInput placeholder='Cryptocurrency'
                                    placeholderTextColor={"#B3B4B7"}
                                    style={{
                                        fontSize: height / 50,
                                        color: "black"
                                    }}
                                />
                            </View>
                            <TouchableOpacity style={styles.searchIconView}>
                                <Image source={ImagePath.SEARCH} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listParentModal}>
                            <FlatList
                                data={DATA}
                                nestedScrollEnabled={true}
                                renderItem={(item) => renderDataModalSend(item)}
                                contentContainerStyle={{ paddingBottom: height * 0.22 }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            // </View>
        )
    }

    const renderModalSendTwo = () => {
        return (
            // <View style={styles.modalView}>
            <Modal
                backdropOpacity={1}
                animationType="slide"
                transparent={true}
                visible={sendModalTwo}
            >
                <View style={styles.modalparentView}>
                    <View style={styles.sendmodalView}>
                        <View style={styles.searchModal}>
                            <View style={styles.buyTextView}>
                                <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Send Cryptocurrency</Text>
                            </View>
                            <TouchableOpacity onPress={() => { setSendModalTwo(false), setSendModal(true) }} style={styles.crossView}>
                                <Image source={ImagePath.CROSSBLUE} resizeMode="contain" style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalGrid}>
                            <View style={styles.contactView}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("SendToContact")}>
                                    <ImageBackground source={ImagePath.BACKGROUNDCONTACT} resizeMode="contain" style={{ height: 80, width: 80, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={ImagePath.BASE} resizeMode="contain" style={{ height: 50, width: 50 }} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={styles.contactTxtView}>
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>Contacts</Text>
                                </View>
                            </View>
                            <View style={styles.blockView}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("SendBlockChain")}>
                                    <ImageBackground source={ImagePath.BACKGROUNDCONTACT} resizeMode="contain" style={{ height: 80, width: 80, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={ImagePath.BLOCK} resizeMode="contain" style={{ height: 50, width: 50 }} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={styles.contactTxtView}>
                                    <Text style={{ color: "#2C2C4E", fontSize: height / 65, fontFamily: FONTS.PoppinsRegular }}>Blockchain</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            // </View>
        )
    }

    const renderData = ({ item }) => {
        return (
            <View style={styles.listView}>
                <View style={styles.border}></View>
                <TouchableOpacity style={styles.mainContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.coin}>
                            <Image source={item.image} resizeMode="contain" style={{ height: 35, width: 35 }} />
                        </View>
                        <View style={styles.coinText}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>{item.coin}</Text>
                        </View>
                    </View>
                    <View style={styles.amtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>${item.amt}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const renderDataModal = ({ item }) => {
        return (
            <View style={styles.listView}>

                <TouchableOpacity onPress={() => props.navigation.navigate("RecieveBitcoin")} style={styles.mainContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.coin}>
                            <Image source={item.image} resizeMode="contain" style={{ height: 35, width: 35 }} />
                        </View>
                        <View style={styles.coinText}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>{item.coin}</Text>
                        </View>
                    </View>
                    <View style={styles.amtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>${item.amt}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.border}></View>
            </View>
        )
    }

    const renderDataModalSend = ({ item }) => {
        return (
            <View style={styles.listView}>

                <TouchableOpacity onPress={() => { setSendModal(false), setSendModalTwo(true) }} style={styles.mainContainer}>
                    <View style={styles.itemView}>
                        <View style={styles.coin}>
                            <Image source={item.image} resizeMode="contain" style={{ height: 35, width: 35 }} />
                        </View>
                        <View style={styles.coinText}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>{item.coin}</Text>
                        </View>
                    </View>
                    <View style={styles.amtView}>
                        <Text style={{ color: "#2C2C4E", fontSize: height / 55, fontFamily: FONTS.PoppinsRegular }}>${item.amt}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.border}></View>
            </View>
        )
    }

    const renderSearch = () => {
        return (
            <View style={styles.searchparent}>
                <View style={styles.input}>
                    <TextInput placeholder='Search coins'
                        placeholderTextColor={"#B3B4B7"}
                        style={{
                            fontSize: height / 50,
                            color: "black"
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.searchIconView}>
                    <Image source={ImagePath.SEARCH} resizeMode="contain" style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
            <WalletHeader
                Drawer={true}
                HeaderTitle={true}
                Title="Crypto Wallet"
                onDrawerPress={() => props.navigation.openDrawer()}
                rightIcon={true}
                RightIconTwoPress={() => props.navigation.navigate("HelpCenter")}
                RightIconTwo={true}
                RightIconPress={() => props.navigation.navigate("Pay")}
            />
            {/* <KeyboardAwareScrollView> */}
            {renderBalance()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 5, marginTop: height * 0.17, height: height * 1, width: width * 1, }}>
                {renderButton()}
                {renderSearch()}
                {renderList()}
            </ScrollView>
            {/* </KeyboardAwareScrollView> */}
            {renderModalRecieve()}
            {renderModalSend()}
            {renderModalSendTwo()}
        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({
    balncHeader: {
        height: height * 0.22,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        position: "absolute",
        zIndex: 1,
        top: 90,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15
    },
    buyTextView: {
        height: height * 0.06,
        width: width * 0.6,
        // backgroundColor: "green",
        justifyContent: "center",
        // alignItems:"center"
    },
    crossView: {
        height: height * 0.06,
        width: width * 0.2,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    contactTxtView: {
        height: height * 0.05,
        width: width * 0.3,
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
    },
    searchModal: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listView: {
        height: height * 0.09,
        width: width * 0.9,
        paddingVertical: 10,
        // backgroundColor: "pink"
    },
    itemView: {
        height: height * 0.09,
        width: width * 0.4,
        // backgroundColor: "lightgreen",
        flexDirection: "row"
    },
    mainContainer: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    coin: {
        height: height * 0.09,
        width: width * 0.12,
        // backgroundColor: "yellow",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    coinText: {
        height: height * 0.09,
        width: width * 0.25,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    modalGrid: {
        height: height * 0.25,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    contactView: {
        height: height * 0.25,
        width: width * 0.4,
        alignSelf: "center",
        // backgroundColor: "blue"
        justifyContent: "center",
        alignItems: "center"
    },
    blockView: {
        height: height * 0.25,
        width: width * 0.4,
        alignSelf: "center",
        // backgroundColor: "green"
        justifyContent: "center",
        alignItems: "center"
    },
    modalparentView: {
        height: height * 1,
        width: width * 1,
        justifyContent: "flex-end",
        // backgroundColor: "red"
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    amtView: {
        height: height * 0.09,
        width: width * 0.25,
        // backgroundColor: "black",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    border: {
        height: height * 0.002,
        width: width * 0.9,
        backgroundColor: "lightgrey",
        // marginTop: height * 0.01
    },
    blcView: {
        height: height * 0.22,
        width: width * 0.35,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    btnView: {
        zIndex: 1,
        height: height * 0.11,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor: "red",
        // marginTop: height * 0.08,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    dollarView: {
        height: height * 0.22,
        width: width * 0.4,
        // marginLeft: 30,
        // backgroundColor: "pink",
        justifyContent: "flex-end"
    },
    usdView: {
        height: height * 0.05,
        width: width * 0.14,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginLeft: 30
    },
    growView: {
        height: height * 0.03,
        width: width * 0.16,
        // backgroundColor: "pink",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
        marginLeft: 30
    },
    recParent: {
        height: height * 0.08,
        width: width * 0.25,
        // backgroundColor: "pink",
        justifyContent: "space-between",
        alignItems: "center"
    },
    sendParent: {
        height: height * 0.08,
        width: width * 0.25,
        // backgroundColor: "green",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tradeParent: {
        height: height * 0.08,
        width: width * 0.25,
        // backgroundColor: "yellow",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn: {
        height: height * 0.05,
        width: width * 0.25,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    searchparent: {
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: height * 0.05,
        borderWidth: 1,
        // borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    searchparentModal: {
        height: height * 0.08,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: height * 0.02,
        borderWidth: 1,
        // borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    input: {
        height: height * 0.07,
        width: width * 0.65,
        justifyContent: 'center'
        // backgroundColor: "red"
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 2,
        //     height: 6
        // },
        // shadowRadius: 5,
        // shadowOpacity: 2.0

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    searchIconView: {
        height: height * 0.07,
        width: width * 0.17,
        //backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    listParent: {
        height: height * 0.79,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    listParentModal: {
        height: height * 0.79,
        width: width * 0.9,
        marginTop: height * 0.02,
        // backgroundColor: "red",
        alignSelf: "center"
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
    sendmodalView: {
        height: height * 0.39,
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

    modalText: {
        fontSize: height / 45,
        color: "white",
        fontFamily: "ClashDisplay-Regular",
        fontWeight: "500"
    },

    insideModal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

})