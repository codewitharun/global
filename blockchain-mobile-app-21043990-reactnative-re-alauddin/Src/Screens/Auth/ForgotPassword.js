import {
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  FlatList,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImagePath } from "../../utils/ImagePath";
// import { Image, Text } from "@rneui/themed";
import { COLOR } from "../../utils/Color";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthInput from "../../Components/AuthInput";
import CustomInput from "../../Components/CustomInput";
import { ForgotPasswordUrl } from "../../RestApi/ApiConfig";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../../Components/CustomButton";
import Header from "../../Components/Header";
const { height, width } = Dimensions.get("screen");

const ForgotPassword = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  function renderQr() {
    const [Email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(null);

    const _emailvalidate = (mail) => {
      var emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      //  /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
      if (mail === "") {
        setErrorEmail("*Please enter email.");
      } else if (!emailRegex.test(mail)) {
        setErrorEmail("*Please enter valid email.");
      } else {
        setErrorEmail(null);
      }
    };

    const validate = () => {
      let flag = true;
      if (Email === "") {
        setErrorEmail("*Please enter email.");
        flag = false;
      }
      return flag;
    };

    const onSubmit = () => {
      if (validate()) {
        ForgotPassAPI();
      } else {
        Alert.alert("Please fill above details");
      }
    };

    // ========= Forgot Pass API ====== //
    const ForgotPassAPI = () => {
      setIsLoading(true);
      axios({
        method: "GET",
        url: `https://java-blockchainapp.mobiloitte.org/account/forget-password/mobiloitApp?email=${Email}`,
        headers: {
          "content-type": "application/json",
        },
      })
        .then(async (response) => {
          if (response.data.status === 200) {
            console.log("====== Forgot Response ======", response);
            props.navigation.navigate("VerifyOtp", { email: Email });
            setIsLoading(false);
          } else if (response.data.status === 201) {
            alert("Your email is not registered");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log("===== Forgot Catch Error ======", err);
          setIsLoading(false);
        });
    };

    return (
      <View style={styles.parentViewQr}>
        <View style={styles.inputView}>
          <View style={styles.emailtxtView}>
            <Text style={styles.emailTxt}>Enter your Email</Text>
          </View>
          <View style={{ height: height * 0.1, width: width * 0.9 }}>
            <AuthInput
              placeholder={"Enter your Email"}
              maxLength={256}
              autoCapitalize="none"
              onChangeText={(txt) => {
                setEmail(txt), _emailvalidate(txt);
              }}
            />
            {errorEmail != null ? (
              <View
                style={{
                  // height: height * 0.015,
                  width: width / 1.3,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 13,
                  }}
                >
                  {errorEmail}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.btnView}>
          <CustomButton
            title={
              isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                "Send"
              )
            }
            ButtonPress={() => onSubmit()}
          />
        </View>
        <View style={styles.backLoginView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.loginBtn}
          >
            <Text style={styles.loginTxt}>Back To Login</Text>
          </TouchableOpacity>
        </View>
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
          title={"Forgot Password"}
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          leftPress={() => props.navigation.navigate("Login")}
        />
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <ScrollView>{renderQr()}</ScrollView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  emailtxtView: {
    height: height * 0.03,
    width: width * 0.88,
    alignItems: "flex-start",
  },
  btnView: {
    marginTop: height * 0.17,
    height: height * 0.1,
    width: width * 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  backLoginView: {
    marginTop: height * 0.1,
    height: height * 0.2,
    width: width * 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  emailTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 65,
    color: "black",
  },
  loginBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLOR.BUTTONCOLOR,
    height: height * 0.1,
    borderRadius: 15,
    width: width * 0.6,
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  inputView: {
    height: height * 0.13,
    width: width * 1,
    // backgroundColor: "yellow",
    marginTop: height * 0.12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginTxt: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: height / 60,
    color: COLOR.BUTTONCOLOR,
  },
});
