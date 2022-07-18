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

const AddContect = (props) => {
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

        <View
          style={{
            height: height * 0.11,
            width: width * 0.9,
            // borderWidth: 0.9,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              fontSize: height / 68,
              color: "#333333",
            }}
          >
            Kumasi, Ghana
          </Text>
          <Text
            style={{
              fontFamily: FONTS.PoppinsSemiBold,
              fontSize: height / 54,
              color: "#333333",
            }}
          >
            Theresa Webb
          </Text>
        </View>
        <View style={styles.cntMain}>
          <View style={styles.CNGbg}>
            <ImageBackground source={ImagePath.CNT_BG} style={styles.CNGbg}>
              <View style={styles.Mobile}>
                <Text style={styles.ttxxt1}>Mobile</Text>
              </View>
              <View style={styles.Email}>
                <Text style={styles.ttxxt2}>+2332471729</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.CNGbg}>
            <ImageBackground source={ImagePath.CNT_BG} style={styles.CNGbg}>
              <View style={styles.Mobile}>
                <Text style={styles.ttxxt1}>Email</Text>
              </View>
              <View style={styles.Email}>
                <Text style={styles.ttxxt2}>asamoahgodfred42@gmail.com</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.CNGbg}>
            <ImageBackground source={ImagePath.CNT_BG} style={styles.CNGbg}>
              <View style={styles.Mobile}>
                <Text style={styles.ttxxt1}>Crypto address</Text>
              </View>
              <View style={styles.Email}>
                <Text style={styles.ttxxt2}>
                  1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
                </Text>
              </View>
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
        Title="Contacts"
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
      ></View>
    </SafeAreaView>
  );
};

export default AddContect;

const styles = StyleSheet.create({
  CNGbg: {
    height: height * 0.11,
    width: width * 1,
    // borderWidth: 1,
    // backgroundColor: "skyblue",
    justifyContent: "center",
  },
  cntMain: {
    height: height * 0.34,
    width: width * 1,
    // borderWidth: 1,
    justifyContent: "space-between",
  },
  Mobile: {
    height: height * 0.04,
    width: width * 0.8,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "flex-end",
  },
  Email: {
    height: height * 0.04,
    width: width * 0.8,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "flex-start",
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
