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

const CryptoMarkitProfile = (props) => {
  const renderProfile = () => {
    return (
      <View
        style={{
          height: height * 0.8,
          width: width * 1,
          // backgroundColor: "red",
          // borderWidth: 1,
        }}
      >
        <View
          style={{
            height: height * 0.27,
            width: width * 1,
            // backgroundColor: "red",
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Image
            source={ImagePath.PPGIRL}
            resizeMode="contain"
            style={{ height: 120, width: 120 }}
          />
        </View>

        <View style={styles.cntMain}>
          <View style={styles.Email}>
            <Text style={styles.ttxxt2}>Name</Text>
          </View>
          <View style={{ height: height * 0.09, justifyContent: "center", width: width * 0.92, borderRadius: 10, backgroundColor: "#F4F4F4", alignSelf: "center" }}>
            <ImageBackground source={ImagePath.PFL_BG} style={styles.CNGbg}>
              <Text style={styles.ttxxt1}>Eleanor Pena</Text>
            </ImageBackground>
          </View>
          <View style={styles.Email}>
            <Text style={styles.ttxxt2}>Phone</Text>
          </View>
          <View style={{ height: height * 0.09, justifyContent: "center", width: width * 0.92, borderRadius: 10, backgroundColor: "#F4F4F4", alignSelf: "center" }}>
            <ImageBackground source={ImagePath.PFL_BG} style={styles.CNGbg}>
              <Text style={styles.ttxxt1}>(603) 555-0123</Text>
            </ImageBackground>
          </View>
          <View style={styles.Email}>
            <Text style={styles.ttxxt2}>Email</Text>
          </View>
          <View style={{ height: height * 0.09, justifyContent: "center", width: width * 0.92, borderRadius: 10, backgroundColor: "#F4F4F4", alignSelf: "center" }}>
            <ImageBackground source={ImagePath.PFL_BG} style={styles.CNGbg}>
              <Text style={styles.ttxxt1}>tranthuy.nute@gmail.com</Text>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        backIcon={true}
        onBackPress={() => props.navigation.goBack()}
        HeaderTitle={true}
        Title="Profile"
      />
      {/* {renderDetail()} */}
      {renderProfile()}
      <View
        style={{
          position: "absolute",
          bottom: 10,
          justifyContent: "center",
          alignItems: "center",
          height: height * 0.1,
          width: width * 1,
        }}
      >
        <CustomButton
          title="Edit"
          ButtonPress={() =>
            props.navigation.navigate("CryptoMarkitEditProfile")
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CryptoMarkitProfile;

const styles = StyleSheet.create({
  CNGbg: {
    height: height * 0.08,
    width: width * 0.9,
    borderRadius: 10,
    // borderWidth: 1,
    // backgroundColor: "skyblue",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  cntMain: {
    height: height * 0.4,
    width: width * 1,
    // borderWidth: 1,
    // justifyContent: "space-between",
  },

  Email: {
    height: height * 0.05,
    width: width * 0.9,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "center",
  },
  ttxxt1: {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: height / 51,
    color: "#333333",
  },
  ttxxt2: {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: height / 68,
    color: "#333333",
  },
});
