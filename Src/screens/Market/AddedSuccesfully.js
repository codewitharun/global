import { StyleSheet, Text, Modal, View, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, ImageBackground, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePath } from '../../utils/ImagePath'
import { FONTS } from '../../utils/FontFamily';
import CustomButton from '../../components/Buttons/CustomButton';
import CodeInput from 'react-native-code-input';
const { height, width } = Dimensions.get("screen");
import Header from '../../components/Header/Header'

const AddedSuccesfully = (props) => {

    const renderImage = () => {
        return (
            <View style={{ alignItems: "center", justifyContent: "center", height: height * 0.6, width: width * 1 }}>
                <Image source={ImagePath.CARDOTPIMG} resizeMode="contain" style={{ height: 250, width: 230, }} />
                <Text style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 50, color: "#2C2C4E" }}>Your Card has been{'\n'}successfully added</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Add Credit or Debit Card"
            />
            {renderImage()}
            <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", height: height * 0.1, width: width * 1 }}>
                <CustomButton
                    title="Continue"
                    ButtonPress={() => props.navigation.navigate("CoinDetails")}
                />
            </View>
        </SafeAreaView>
    )
}

export default AddedSuccesfully

const styles = StyleSheet.create({})