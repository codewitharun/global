import {
  StyleSheet,
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
import CustomInput from "../../Components/CustomInput";
import Header from "../../Components/Header";
import CustomButton from "../../Components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ChangePasswordUrl } from "../../RestApi/ApiConfig";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height, width } = Dimensions.get("screen");

const ChangePassword = (props) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [hidepass, setHidePass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //   *****validation******//

  const [Password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);

  const _passwordvalidate = (pass) => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?;,+<>])[a-zA-Z0-9!@#$%^&*?;,+<>]{8,16}$/;
    if (pass === "") {
      setErrorPassword("*Please enter password.");
    } else if (pass.length < 8 == true) {
      setErrorPassword("*Password must be 8-20 characters");
      return false;
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword("*must have one special character.");
    } else {
      setErrorPassword(null);
    }
  };

  const [NewPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState(true);
  const [errorNewPassword, setErrorNewPassword] = useState(null);

  const _newpasswordvalidate = (npass) => {
    var newpasswordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?;,+<>])[a-zA-Z0-9!@#$%^&*?;,+<>]{8,16}$/;
    if (npass === "") {
      setErrorNewPassword("*Please enter password.");
    } else if (npass.length < 8 == true) {
      setErrorNewPassword("*Password must be 8-20 characters");
      return false;
    } else if (!newpasswordRegex.test(npass)) {
      setErrorNewPassword("*must have one special character.");
    } else {
      setErrorNewPassword(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (Password === "") {
      setErrorPassword("*Please enter password.");
      flag = false;
    }
    if (NewPassword === "") {
      setErrorNewPassword("*Please enter password");
      flag = false;
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      ChangePasswordApi();
    } else {
    }
  };

  //   ******** Change Password Api *********
  const ChangePasswordApi = async () => {
    const Token = await AsyncStorage.getItem("token");

    setIsLoading(true);
    axios({
      method: "POST",
      url: ChangePasswordUrl,
      data: {
        newPassword: NewPassword,
        oldPassword: Password,
      },
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then(async (response) => {
        if (response) {
          console.log("====== Change Password Response ======", response);
          setIsLoading(false);
          //   props.navigation.navigate("DashBoard");
        } else {
          console.log("@@@ Response ====>", response);
          alert("Something went wrong.");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("===== Login Catch Error ======", err);
        if (err.response.status === 401) {
          alert("Bad Credentials");
        } else {
          alert("Something went wrong.");
        }
        setIsLoading(false);
      });
  };

  // ******validation*****//
  function renderQr() {
    return (
      <View style={styles.parentViewQr}>
        <View style={styles.mainView}>
          <View style={styles.txtView}>
            <Text style={styles.currntTxt}>Current Password</Text>
          </View>

          <View style={{}}>
            <CustomInput
              placeholder={"Password"}
              // rightImg={ImagePath.PASSEYE}
              keyboardType={"default"}
              RightIcon={true}
              secureTextEntry={hidepass}
              rightImg={hidepass ? ImagePath.HIDEEYE : ImagePath.SHOWEYE}
              rightPress={() => setHidePass(hidepass ? false : true)}
              onChangeText={(txt) => {
                setPassword(txt), _passwordvalidate(txt);
              }}
              maxLength={16}
            />
          </View>
          {errorPassword != null ? (
            <View style={{ height: height * 0.015, width: width / 1.3 }}>
              <Text style={{ color: "red", fontSize: 10 }}>
                {errorPassword}
              </Text>
            </View>
          ) : null}

          <View style={styles.newPassView}>
            <Text style={styles.newPassTxt}>New Password</Text>
          </View>
          <View>
            <CustomInput
              placeholder={"New Password"}
              // RightIcon={true}
              keyboardType={"default"}
              RightIcon={true}
              secureTextEntry={visiblePassword}
              rightImg={visiblePassword ? ImagePath.HIDEEYE : ImagePath.SHOWEYE}
              rightPress={() =>
                setVisiblePassword(visiblePassword ? false : true)
              }
              onChangeText={(txt) => {
                setNewPassword(txt), _newpasswordvalidate(txt);
              }}
              maxLength={16}
            />
          </View>
          {errorNewPassword != null ? (
            <View style={{ height: height * 0.015, width: width / 1.3 }}>
              <Text style={{ color: "red", fontSize: 10 }}>
                {errorNewPassword}
              </Text>
            </View>
          ) : null}
        </View>

        {/* {errorNewPassword != null ? (
            <View style={{ height: height * 0.015, width: width / 1.3 }}>
              <Text style={{ color: "red", fontSize: 10 }}>
                {errorNewPassword}
              </Text>
            </View>
          ) : null} */}
        <View style={styles.buttonView}>
          <CustomButton
            title={"Change Password"}
            ButtonPress={() => onSubmit()}
            // ButtonPress={() => props.navigation.navigate("DashBoard")}
          />
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
          title={"Change password"}
          LeftIcon={true}
          leftImg={ImagePath.BACKICON}
          leftPress={() => props.navigation.navigate("DashBoard")}
        />
        <KeyboardAwareScrollView enableOnAndroid={true}>
          {renderQr()}
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImg: {
    height: height * 1,
    width: width * 1,
  },
  mainView: {
    alignItems: "center",
    top: height * 0.1,
    height: height * 0.4,
    width: width * 1,
  },
  currntTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 64,
    color: COLOR.REMEBERTEXT,
    alignSelf: "flex-start",
  },
  newPassView: {
    marginTop: height * 0.03,
    width: width * 0.44,
    paddingLeft: width * 0.07,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  txtView: {
    width: width * 0.44,
    paddingLeft: width * 0.07,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  newPassTxt: {
    fontFamily: "Poppins-Regular",
    fontSize: height / 64,
    color: COLOR.REMEBERTEXT,
    alignSelf: "flex-start",
  },
  rectangle: {
    height: height * 0.12,
    width: width * 0.9,
    backgroundColor: "white",
    borderWidth: height * 0.002,
    borderColor: COLOR.RECTANGLE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    height: height * 0.2,
    width: width * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  parentViewQr: {
    backgroundColor: "white",
    width: width * 1,
    height: height * 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  copyTxt: {
    fontFamily: "Lato-Regular",
    fontSize: height / 85,
    color: COLOR.COPYTXT,
  },
});
