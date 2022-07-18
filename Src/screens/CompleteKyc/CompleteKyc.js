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

const CompleteKyc = (props) => {
  const renderImage = () => {
    return (
      <View
        style={{ alignItems: "center", height: height * 1, width: width * 1 }}
      >
        <View
          style={{
            height: height * 0.5,
            width: width * 0.9,
            // backgroundColor: "red",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            source={ImagePath.DOCUMENT_VERIFIED}
            resizeMode="contain"
            style={{ height: 250, width: 250 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: height * 0.25,
            // backgroundColor: "red",
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
            Document and selfie submitted!
          </Text>
          <View
            style={{
              alignItems: "center",
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                marginTop: height * 0.02,
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 40,
                color: "#2C2C4E",
              }}
            >
              We will notify you once your
            </Text>
            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 40,
                color: "#2C2C4E",
              }}
            >
              Verification is complete.
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 40,
            height: height * 0.13,
            width: width * 0.9,
            alignItems: "center",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.PoppinsRegular,
              fontSize: height / 55,
              color: "#1774FF",
            }}
          >
            Tap anywhere to continue
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("VerificationPending")}
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

export default CompleteKyc;

const styles = StyleSheet.create({});
