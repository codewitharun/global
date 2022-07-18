import {
  StyleSheet,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView,
  FlatList,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImagePath } from "../../utils/ImagePath";
// import { Image, Text } from "@rneui/themed";
import { COLOR } from "../../utils/Color";
import { CountryCode } from "../../utils/CountryCode";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthInput from "../../Components/AuthInput";
import CodeInput from "react-native-code-input";
import axios from "axios";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import CountDown from "react-native-countdown-component";
import Header from "../../Components/Header";
import { ResendOtpUrl, SignUpVerifyUrl } from "../../RestApi/ApiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
const { height, width } = Dimensions.get("screen");

const SignUpVerify = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  const [count, setCount] = useState(true);
  const [email, setEmail] = useState(props?.route?.params?.email);

  // ========= Verify OTP API ====== //
  const OtpApi = async (txt) => {
    const Token = await AsyncStorage.getItem("token");
    console.log(count);

    setIsLoading(true);
    axios({
      method: "GET",
      url: SignUpVerifyUrl,
      params: {
        token: txt,
      },
    })
      .then(async (response) => {
        if (response?.data?.status === 200) {
          console.log("====== Verify Response ======", response);
          // alert(response?.data?.message);
          showMessage({
            message: response?.data?.message,
            type: "success",
            icon: "success",
            textStyle: {
              fontSize: height / 55,
            },
            style: {
              width: Platform.OS === "android" ? width * 0.92 : null,
              borderRadius: Platform.OS === "android" ? 5 : null,
              margin: Platform.OS === "android" ? 15 : null,
              alignItems: Platform.OS === "android" ? "center" : null,
            },
          });
          props.navigation.navigate("Login");
          setIsLoading(false);
        } else if (response.data.status === 201 || 205) {
          showMessage({
            message: response?.data?.message,
            type: "success",
            icon: "success",
            textStyle: { fontSize: height / 55 },
            style: {
              width: Platform.OS === "android" ? width * 0.92 : null,
              borderRadius: Platform.OS === "android" ? 5 : null,
              margin: Platform.OS === "android" ? 15 : null,
              alignItems: Platform.OS === "android" ? "center" : null,
            },
          });
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("===== Verify Catch Error ======", err.response);
        setIsLoading(false);
      });
    // setIsLoading(false)
  };

  // --- Resend Otp --------
  const ResendOtpApi = () => {
    setIsLoadingSend(true);
    axios({
      method: "GET",
      url: `https://java-blockchainapp.mobiloitte.org/account/resend-verify-email?email=${email}&webUrl=ghdfjg`,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (response) => {
        setIsLoadingSend(false);
        if (response.data.status === 200) {
          console.log("====== Resend Otp Response ======", response);
          // alert(`Otp send ${response?.data?.message}fully`);
          showMessage({
            message: `Otp Send ${response?.data?.message}fully`,
            type: "success",
            icon: "success",
            textStyle: {
              fontSize: height / 55,
            },
            style: {
              width: Platform.OS === "android" ? width * 0.92 : null,
              borderRadius: Platform.OS === "android" ? 5 : null,
              margin: Platform.OS === "android" ? 15 : null,
              alignItems: Platform.OS === "android" ? "center" : null,
            },
          });
          setIsLoadingSend(false);
        } else if (response.data.status === 201) {
          alert("Invalid OTP");
          setIsLoadingSend(false);
        } else if (response.data.status === 205) {
          alert("Not Verified");
          setIsLoadingSend(false);
        }
      })
      .catch((err) => {
        console.log("===== Resend Otp Catch Error ======", err.response);
        setIsLoadingSend(false);
      });
  };

  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.inputView}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: height / 65,
              color: "black",
            }}
          >
            Always Make Sure That you Are Visiting
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: height / 65,
              color: "black",
            }}
          >
            The Current URL
          </Text>
        </View>
        {isLoading ? (
          <View
            style={{
              height: height * 0.25,
              width: width * 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator
              size="large"
              color="#244273"
              style={{ marginTop: height * 0.14 }}
            />
          </View>
        ) : (
          <View style={styles.codeInputView}>
            <CodeInput
              secureTextEntry
              space={20}
              codeInputStyle={{
                backgroundColor: COLOR.TXT_INPUT,
                color: COLOR.BUTTONCOLOR,
                fontSize: Platform.OS === "ios" ? height / 20 : height / 28,
                height: Platform.OS === "ios" ? height * 0.08 : height * 0.09,
                borderRadius: height / 75,
                width: width * 0.16,
                alignItems: "center",
                fontWeight: "bold",
              }}
              keyboardType="numeric"
              codeLength={4}
              borderType="border-circle"
              autoFocus={false}
              containerStyle={{ marginTop: height * 0.15 }}
              onFulfill={(txt) => {
                OtpApi(txt), setCount(false);
              }}
            />
          </View>
        )}
        <View style={styles.countView}>
          {count ? (
            <CountDown
              until={60}
              size={20}
              onFinish={() => {
                setCount(false);
              }}
              digitStyle={{ backgroundColor: COLOR.BACKGROUND_THEME }}
              digitTxtStyle={{ color: COLOR.GREY, fontSize: height / 50 }}
              separatorStyle={{ color: COLOR.GREY, fontSize: height / 50 }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "", s: "" }}
              showSeparator
            />
          ) : (
            <Text style={{ alignSelf: "center", color: "white" }}>00 : 00</Text>
          )}
        </View>
        <View style={styles.recieveTxtView}>
          <Text
            style={{
              fontFamily: "Montserrat-Medium",
              fontSize: height / 52,
              color: COLOR.RECIEVETXT,
            }}
          >
            Didn't recieve the code?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCount(true), ResendOtpApi();
          }}
          style={styles.sendTxtView}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Medium",
              fontSize: height / 50,
              color: COLOR.BUTTONCOLOR,
            }}
          >
            {isLoadingSend ? (
              <ActivityIndicator size="large" color="#244273" />
            ) : (
              "Send OTP again"
            )}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={ImagePath.SPLASHBACK}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <Header
          title={"Verify OTP"}
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          leftPress={() => props.navigation.goBack()}
        />
        <KeyboardAwareScrollView enableOnAndroid={true}>
          {/* <ScrollView> */}
          {renderQr()}
          {/* </ScrollView> */}
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpVerify;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  inputView: {
    height: height * 0.07,
    width: width * 1,
    // backgroundColor: "yellow",
    marginTop: height * 0.06,
    alignItems: "center",
    justifyContent: "space-between",
  },
  codeInputView: {
    height: height * 0.25,
    width: width * 1,
    // backgroundColor: "pink",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  recieveTxtView: {
    height: height * 0.1,
    width: width * 1,
    // backgroundColor: "pink",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  sendTxtView: {
    height: height * 0.06,
    width: width * 1,
    // backgroundColor: "lightblue",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  countView: {
    height: height * 0.08,
    width: width * 1,
    // backgroundColor: "pink",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
