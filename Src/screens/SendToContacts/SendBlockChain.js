import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, Modal, View, Image, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

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


]

const SendBlockChain = (props) => {
    const [modalVisible, setModalVisible] = useState(false)

    const renderDataModal = ({ item }) => {
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("")} style={styles.mainContainer}>
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

                        <View style={styles.listParentModal}>
                            <FlatList
                                data={DATA}
                                nestedScrollEnabled={true}
                                renderItem={(item) => renderDataModal(item)}
                                contentContainerStyle={{ paddingBottom: height * 0.06 }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            // </View>
        )
    }


    const renderDetail = () => {
        return (
            <View style={styles.detailView}>
                <View style={styles.headeing}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Please Enter Blockchain Details Below</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.searchView}>
                    <View style={styles.searchparent}>
                        <View style={styles.drop}>
                            <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsSemiBold }}>Blockchain Types</Text>
                        </View>
                        <View style={styles.down}>
                            <Image source={ImagePath.DOWNING} resizeMode="contain" style={{ height: 15, width: 15 }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.phoneView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Blockchain Address</Text>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.searchparent}>
                        <View style={[styles.input, styles.shadowProp]}>
                            <TextInput
                                placeholder='Blockchain Address'
                                placeholderTextColor={"#B3B4B7"}
                                style={{
                                    fontSize: height / 50,
                                    color: "black",
                                    fontFamily: FONTS.PoppinsSemiBold
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.phoneView}>
                    <Text style={{ color: "#2C2C4E", fontSize: height / 50, fontFamily: FONTS.PoppinsBold }}>Enter Amount</Text>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.searchparent}>
                        <View style={[styles.input, styles.shadowProp]}>
                            <TextInput
                                placeholder='1586.01 BTC'
                                placeholderTextColor={"#B3B4B7"}
                                style={{
                                    fontSize: height / 50,
                                    color: "black",
                                    fontFamily: FONTS.PoppinsSemiBold
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        // <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    <Header
                        backIcon={true}
                        onBackPress={() => props.navigation.goBack()}
                        HeaderTitle={true}
                        Title="Send Bitcoin"
                    />
                    {renderDetail()}
                    {renderModalRecieve()}
                    <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                        <CustomButton
                            title="Send Crypto"
                            ButtonPress={() => props.navigation.navigate("TransactionSuccess")}
                        />
                    </View>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        // </SafeAreaView >
    )
}

export default SendBlockChain

const styles = StyleSheet.create({
    detailView: {
        height: height * 0.6,
        width: width * 1,
        marginTop: height * 0.05,
        // backgroundColor: "pink"
    },
    mainContainer: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    coinText: {
        height: height * 0.09,
        width: width * 0.25,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start"
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
    itemView: {
        height: height * 0.09,
        width: width * 0.4,
        // backgroundColor: "lightgreen",
        flexDirection: "row"
    },
    container: {
        flex: 1,
    },
    coin: {
        height: height * 0.09,
        width: width * 0.12,
        // backgroundColor: "yellow",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    amtView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    phoneView: {
        height: height * 0.03,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end",
        marginTop: height * 0.02
    },
    listView: {
        height: height * 0.09,
        width: width * 0.9,
        paddingVertical: 10,
        // backgroundColor: "pink"
    },
    searchView: {
        height: height * 0.08,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    modalparentView: {
        height: height * 1,
        width: width * 1,
        justifyContent: "center",
        // backgroundColor: "red"
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        height: height * 0.3,
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
    searchModal: {
        height: height * 0.06,
        width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    crossView: {
        height: height * 0.06,
        width: width * 0.2,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    listParentModal: {
        height: height * 0.2,
        width: width * 0.9,
        marginTop: height * 0.02,
        // backgroundColor: "red",
        alignSelf: "center"
    },
    headeing: {
        height: height * 0.09,
        width: width * 0.9,
        // backgroundColor: "yellow",
        alignSelf: "center",
        justifyContent: "center"
    },
    searchparent: {
        height: height * 0.07,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: height * 0.04,
        borderWidth: 1,
        // borderRadius: 5,
        borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.9,
        // shadowRadius: 3,
        // elevation: 3,
        // position: 'absolute',
        // bottom: 10
    },
    input: {
        height: height * 0.07,
        width: width * 0.65,
        // backgroundColor: "red"
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 2,
        //     height: 6
        // },
        // shadowRadius: 5,
        // shadowOpacity: 2.0

    },
    drop: {
        height: height * 0.07,
        width: width * 0.75,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    down: {
        height: height * 0.07,
        width: width * 0.1,
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"

    },
})