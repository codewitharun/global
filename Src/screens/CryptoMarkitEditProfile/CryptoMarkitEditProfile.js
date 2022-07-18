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

const CryptoMarkitEditProfile = (props) => {
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
            width: width * 0.5,
            // backgroundColor: "red",
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Image
            source={ImagePath.PPGIRL}
            resizeMode="contain"
            style={{ height: 120, width: 120 }}
          />
        </View>
        <View
          style={{
            height: height * 0.28,
            width: width * 0.33,
            // backgroundColor: "green",
            // borderWidth: 1,
            alignItems: "flex-end",
            alignSelf: "center",
            position: "absolute",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Image
              source={ImagePath.PRC}
              resizeMode="contain"
              style={{ height: 40, width: 50 }}
            />
          </TouchableOpacity>

          <View
            style={{
              height: height * 0.07,
              width: width * 0.25,
              // backgroundColor: "skyblue",
              // borderWidth: 1,
              alignItems: "flex-end",
              alignSelf: "center",
              position: "absolute",
              justifyContent: "center",
            }}
          >
            <Image
              source={ImagePath.PRC_PEN}
              resizeMode="contain"
              style={{ height: 18, width: 20 }}
            />
          </View>
        </View>

        <View style={styles.cntMain}>
          <View style={styles.Email}>
            <Text style={styles.ttxxt2}>Name</Text>
          </View>
          <View style={{ height: height * 0.09, justifyContent: "center", width: width * 0.92, borderRadius: 10, backgroundColor: "#F4F4F4", alignSelf: "center" }}>
            <ImageBackground source={ImagePath.PFL_BG} style={styles.CNGbg}>
              <TextInput placeholder="Elenaor Pena" style={{ color: "black", fontSize: height / 55 }} />
            </ImageBackground>
          </View>
          <View style={styles.Email}>
            <Text style={styles.ttxxt2}>Phone</Text>
          </View>
          <View style={{ height: height * 0.09, justifyContent: "center", width: width * 0.92, borderRadius: 10, backgroundColor: "#F4F4F4", alignSelf: "center" }}>
            <ImageBackground source={ImagePath.PFL_BG} style={styles.CNGbg}>
              <TextInput placeholder="(603) 555-0123" style={{ color: "black", fontSize: height / 55 }} />
            </ImageBackground>
          </View>
          <View style={styles.Email}>
            <Text style={styles.ttxxt2}>Email</Text>
          </View>
          <View style={{ height: height * 0.09, justifyContent: "center", width: width * 0.92, borderRadius: 10, backgroundColor: "#F4F4F4", alignSelf: "center" }}>
            <ImageBackground source={ImagePath.PFL_BG} style={styles.CNGbg}>
              <TextInput placeholder="tranthuy.nute@gmail.com" style={{ color: "black", fontSize: height / 55 }} />
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderProfile()}
      </ScrollView>
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
          title="Save"
          ButtonPress={() => props.navigation.navigate("CryptoMarkitProfile")}
        />
      </View>
    </SafeAreaView>
  );
};

export default CryptoMarkitEditProfile;

const styles = StyleSheet.create({
  CNGbg: {
    height: height * 0.08,
    width: width * 0.9,
    // borderWidth: 1,
    // borderRadius: 10,
    // backgroundColor: "skyblue",
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
    height: height * 0.04,
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
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: height / 68,
    color: "#333333",
  },
  ttxxt3: {
    fontFamily: FONTS.PoppinsSemiBold,
    fontSize: height / 42,
    color: "#333333",
  },
});
