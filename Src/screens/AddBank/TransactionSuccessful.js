import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const TransactionSuccessful = (props) => {

    const renderDetail = () => {
        return (
            <View style={styles.detailview}>
                <Image source={ImagePath.SUCCESS} resizeMode="contain" style={{ marginTop: height * 0.08, height: height * 0.25, width: width * 1 }} />
                <Text style={{ color: "#2C2C4E", fontSize: height / 58, fontFamily: FONTS.PoppinsSemiBold }}>Your deposit was successful</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Add Money to Wallet"
            />
            {renderDetail()}
            <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                <CustomButton
                    title="Done"
                    ButtonPress={() => props.navigation.navigate("FiatWallet")}
                />
            </View>
        </SafeAreaView>
    )
}

export default TransactionSuccessful

const styles = StyleSheet.create({
    detailview: {
        height: height * 0.55,
        width: width * 1,
        // backgroundColor: "pink",
        justifyContent: "space-between",
        alignItems: "center"
    },
})