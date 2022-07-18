import {
    StyleSheet,
    Text,
    Modal,
    View,
    Image,
    SafeAreaView,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");
import Header from "../../components/Header/Header";

const TermsAndConditions = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <Header
                backIcon={true}
                onBackPress={() => props.navigation.goBack()}
                HeaderTitle={true}
                Title="Terms and Conditions"
            />
            <ScrollView style={{ marginTop: height * 0.04, paddingVertical: 25, height: height * 1, width: width * 1, }}>
                <View style={{
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                    height: height * 0.15,
                    width: width * 1,
                }}>
                    <Text style={{ color: "black", fontSize: height / 60, fontFamily: FONTS.PoppinsMedium }}>Currency is used to display your balance,{'\n'}transactions, and purchase cryptocurrency{'\n'}Throughout the app</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TermsAndConditions

const styles = StyleSheet.create({})