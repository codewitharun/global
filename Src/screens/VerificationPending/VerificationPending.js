import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Dimensions,
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FONTS } from "../../utils/FontFamily";
import { ImagePath } from "../../utils/ImagePath";
import CustomButton from "../../components/Buttons/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { height, width } = Dimensions.get("window");

const VerificationPending = (props) => {
  const renderImage = () => {
    return (
      <View
        style={{ alignItems: "center", height: height * 1, width: width * 1 }}
      >
        <View
          style={{
            height: height * 0.5,
            width: width * 0.9,
            justifyContent: "flex-end",
            alignItems: "center",
            // backgroundColor: "red"
          }}
        >
          <Image
            source={ImagePath.VERIFICATION_PENDING}
            resizeMode="contain"
            style={{ height: 220, width: 220 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red",
            height: height * 0.25,
            width: width * 0.9,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              // marginTop: height * 0.15,
              fontFamily: FONTS.PoppinsRegular,
              fontSize: height / 50,
              color: "#2C2C4E",
            }}
          >
            Verificaiton Pending
          </Text>
          <View
            style={{
              alignItems: "center",
              height: height * 0.18,
              width: width * 0.9,
              alignSelf: "center",
              // backgroundColor: "red",
              // marginTop: height / 0.01,
            }}
          >
            <Text
              style={{
                // marginTop: height / 0.01,
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: width / 22,
                color: "#2C2C4E",
              }}
            >
              We will notify when your
            </Text>
            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: width / 23,
                color: "#2C2C4E",
              }}
            >
              account is Verified,which can
            </Text>

            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: width / 23,
                color: "#2C2C4E",
              }}
            >
              take up to 24 hours during
            </Text>

            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: width / 23,
                color: "#2C2C4E",
              }}
            >
              peak traffic times.
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 50,
            height: height * 0.3,
            width: width * 0.9,
            alignItems: "center",
            justifyContent: "flex-end",
            alignSelf: "center",
            // backgroundColor: "yellow",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsSemiBold,
              fontSize: height / 55,
              color: "#2C2C4E",
            }}
          >
            Questions?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("")}>
            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 55,
                color: "#1774FF",
              }}
            >
              Contact Support
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}
        style={{
          height: height * 1,
          width: width * 1,
          backgroundColor: "white",
        }}
      >
        {renderImage()}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerificationPending;

const styles = StyleSheet.create({});
