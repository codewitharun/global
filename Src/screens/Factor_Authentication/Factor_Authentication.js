import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");
import Header from "../../components/Header/Header";
import { COLOR } from "../../utils/Colors";

const Factor_Authentication = (props) => {
  const renderProfile = () => {
    return (
      <View
        style={{
          height: height * 0.7,
          width: width * 1,
          // backgroundColor: "red",
          //   borderWidth: 1,
          marginVertical: 25,
        }}
      >
        <View style={styles.requirePasscode}>
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              fontSize: height / 50,
              color: "#2C3A4B",
            }}
          >
            Setting up 2-Factor Authentication
          </Text>
        </View>

        <View style={[styles.imgTxt]}>
          <View style={styles.imgPhtoId}>
            <Image
              source={ImagePath.INSTALL}
              resizeMode="contain"
              style={{ height: 32, width: 32 }}
            />
          </View>
          <View style={styles.imageTatal}>
            <Text style={styles.txxt}>
              Install Google Authentication, or a {"\n"}similar app
            </Text>
          </View>
        </View>

        <View style={[styles.imgTxt]}>
          <View style={styles.imgPhtoId}>
            <Image
              source={ImagePath.SCANN}
              resizeMode="contain"
              style={{ height: 32, width: 32 }}
            />
          </View>
          <View style={styles.imageTatal}>
            <Text style={styles.txxt}>
              Scan code with an Authentication{"\n"}
              app, or copy code to add it manually.
            </Text>
          </View>
        </View>

        <View style={styles.keyView}>
          <View
            style={{
              height: height * 0.06,
              width: width * 0.9,
              alignSelf: "center",
              // borderWidth:1,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.PoppinsMedium,
                fontSize: height / 50,
                color: "#2C3A4B",
              }}
            >
              Authentication Key
            </Text>
          </View>
        </View>

        <View style={styles.Qr}>
          <Image
            source={ImagePath.QR_CODE}
            resizeMode="contain"
            style={{ height: 150, width: 200 }}
          />
        </View>
        <View style={styles.copy}>
          <View style={styles.copyTxxt}>
            <Text
              style={{
                fontSize: height / 60,
                fontFamily: FONTS.PoppinsMedium,
                color: COLOR.BLACK,
              }}
            >
              FASFGYTFF251345121GDFCVB
            </Text>
          </View>
          <View style={styles.copyImg}>
            <Image
              source={ImagePath.COPY_ICONE}
              resizeMode="contain"
              style={{ height: 25, width: 25 }}
            />
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
        Title="2-Factor Authentication"
      />
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
          title="Proceed To Verify"
          ButtonPress={() =>
            props.navigation.navigate("EnableFactor_Authentication")
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Factor_Authentication;

const styles = StyleSheet.create({
  requirePasscode: {
    height: height * 0.072,
    width: width * 0.9,
    alignSelf: "center",
    // borderWidth:1,
    justifyContent: "flex-end",
  },

  imgTxt: {
    width: width * 0.9,
    height: height * 0.1,
    // backgroundColor: 'cyan',
    // marginTop: height * 0.01,
    // borderWidth: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  imgPhtoId: {
    width: width * 0.12,
    height: height * 0.07,
    // backgroundColor: "red",
    justifyContent: "center",
  },
  imageTatal: {
    width: width * 0.74,
    height: height * 0.08,
    // backgroundColor: "green",
    justifyContent: "center",
    // borderWidth: 1,
  },

  txxt: {
    color: "#2C2C4E",
    fontSize: height / 64,
    fontFamily: FONTS.PoppinsMedium,
  },
  keyView: {
    height: height * 0.06,
    width: width * 1,
    backgroundColor: "rgb(242,242,242)",
    justifyContent: "center",
  },
  Qr: {
    height: height * 0.25,
    width: width * 0.9,
    justifyContent: "center",
    alignSelf: "center",
    // borderWidth: 1,
    alignItems: "center",
  },
  copy: {
    height: height * 0.07,
    width: width * 0.9,
    justifyContent: "center",
    alignSelf: "center",
    // borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#F4F4F4",
  },
  copyTxxt: {
    height: height * 0.07,
    width: width * 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  copyImg: {
    height: height * 0.07,
    width: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
