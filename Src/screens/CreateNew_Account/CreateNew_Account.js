import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { ImagePath } from "../../utils/ImagePath";
import CustomButton from "../../components/Buttons/CustomButton";
import { FONTS } from "../../utils/FontFamily";
import { COLOR } from "../../utils/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { height, width } = Dimensions.get("screen");

const CreateNew_Account = (props) => {
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} >
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "FFFFF" }}>
          <View style={styles.main}>
            <View style={styles.imagecon}>
              <Image
                style={{ height: 230, width: 400, resizeMode: "stretch" }}
                source={ImagePath.CREATACCOUNT_LOGO}
              />
            </View>
            <View style={styles.imagemirror}>
              <Image
                style={{ height: 220, width: 440, resizeMode: "contain" }}
                source={ImagePath.CREATACCOUNT_MIRROR_LOGO}
              />
              <View style={styles.text}>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: height / 40,
                    fontWeight: "600",
                    fontFamily: FONTS.PoppinsBold,
                    color: "#2C2C4E",
                  }}
                >
                  Create New Account
                </Text>
              </View>
            </View>
            <View style={styles.email}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  fontFamily: FONTS.PoppinsBold,
                  color: "#2C2C4E",
                }}
              >
                E-mail
              </Text>
            </View>
            <View style={{ height: height * 0.07 }}>
              <View style={styles.textinput}>
                <View
                  style={{
                    width: width * 0.85,
                    alignSelf: "center",
                    // backgroundColor: "red",
                  }}
                >
                  <TextInput
                    style={{ fontSize: height / 56, color: "black", }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.txt}>
              <View
                style={{
                  flexDirection: "row",
                  fontFamily: FONTS.PoppinsMedium,
                  width: width * 0.9,
                  alignItems: "center",
                  // backgroundColor: "red",
                  // borderWidth: 1,

                }}
              >
                <Text style={{ color: "#A3A3B3", fontFamily: FONTS.PoppinsRegular, fontSize: height / 68 }}>
                  By signing up, you’re agree to our
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicy")} >
                  <Text style={{ marginLeft: width * 0.01, color: "#1774FF", fontFamily: FONTS.PoppinsRegular, fontSize: height / 68 }}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: width * 0.9,
                  // backgroundColor: "red",
                  alignItems: "center",
                  // borderWidth: 1,
                  // justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#A3A3B3", fontFamily: FONTS.PoppinsRegular, fontSize: height / 68 }}>and</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("TermsAndConditions")} >
                  <Text style={{ marginLeft: width * 0.01, color: "#1774FF", fontFamily: FONTS.PoppinsRegular, fontSize: height / 68 }}>
                    Terms and conditions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btncon}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: height * 0.1,
                  width: width * 1,
                }}
              >
                <CustomButton
                  title="Continue"
                  ButtonPress={() => props.navigation.navigate("Signup1")}
                />
              </View>
            </View>
            <View style={styles.line}>
              <View style={{ backgroundColor: "#E1E1E1", height: height * 0.002, width: width * 0.4 }}>

              </View>
              <View style={{ justifyContent: "center", alignItems: "center", height: height * 0.05, width: width * 0.1 }}>
                <Text style={{ fontFamily: FONTS.PoppinsRegular, fontSize: height / 60, color: "#2C2C4E" }}>OR</Text>
              </View>
              <View style={{ backgroundColor: "#E1E1E1", height: height * 0.002, width: width * 0.4 }}>

              </View>
            </View>
            <View style={styles.images}>

              <TouchableOpacity style={{ justifyContent: "center", alignItems: "flex-end", height: height * 0.1, width: width * 0.34 }}>
                <Image source={ImagePath.GOOGLE} resizeMode="contain" style={{ height: 30, width: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: height * 0.05, width: width * 0.06 }}>
                <Image source={ImagePath.FB} resizeMode="contain" style={{ height: 30, width: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "flex-start", height: height * 0.1, width: width * 0.34 }}>
                <Image source={ImagePath.APPLE} resizeMode="contain" style={{ height: 30, width: 30 }} />
              </TouchableOpacity>

            </View>
            <View style={styles.joined}>
              <View style={styles.before}>
                <Text style={{ fontSize: height / 60, fontFamily: FONTS.PoppinsRegular, color: "#B6B6B6" }}>
                  Joined us before?
                </Text>
              </View>
              <View style={styles.login}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Login")}
                >
                  <Text
                    style={{ fontSize: height / 60, fontFamily: FONTS.PoppinsRegular, color: "#1774FF" }}
                  >
                    {" "}Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // </SafeAreaView >
  );
};

export default CreateNew_Account;

const styles = StyleSheet.create({
  main: {
    height: height * 1,
    width: width * 1,
    backgroundColor: COLOR.WHITE,
  },
  imagecon: {
    height: height * 0.34,
    width: width * 0.9,
    // backgroundColor: "red",
    // borderEndWidth: 1,
  },
  imagemirror: {
    height: height * 0.07,
    width: width * 1,
    alignSelf: "center",
    justifyContent: "flex-start",
    // backgroundColor: "red",
  },
  text: {
    height: height * 0.08,
    width: width * 0.9,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "flex-end",
    // backgroundColor:"green",
    fontFamily: FONTS.PoppinsBold,
  },
  email: {
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "flex-end",
    // backgroundColor:"cyan"
  },
  textinput: {
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "cyan",
    borderWidth: 1,
    borderColor: "#2C2C4E33",
    borderRadius: 10,
  },
  txt: {
    height: height * 0.1,
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "cyan",
    fontFamily: FONTS.PoppinsRegular,
  },
  txet: {
    height: height * 0.03,
    width: width * 0.9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor:"green"
  },
  btncon: {
    height: height * 0.15,
    width: width * 0.9,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor:"pink",
    alignItems: "center",
  },
  btn: {
    height: height * 0.055,
    width: width * 0.9,
    flexDirection: "row",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
  },
  container: {
    flex: 1,
  },
  line: {
    height: height * 0.02,
    width: width * 0.9,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    // backgroundColor: "cyan",
  },
  or: {
    height: height * 0.04,
    width: width * 0.1,
    flexDirection: "row",
    // backgroundColor:'cyan',
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    height: height * 0.1,
    width: width * 0.9,
    alignSelf: "center"
  },
  image: {
    height: height * 0.08,
    width: width * 0.4,
    flexDirection: "row",
    alignSelf: "center",

    justifyContent: "space-evenly",
    // justifyContent: 'center',
    backgroundColor: "green",
    alignContent: "flex-start",
  },
  imag: {
    height: height * 0.08,
    width: width * 0.12,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor:"cyan",
  },
  joined: {
    height: height * 0.08,
    width: width * 0.9,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    // alignItems: "flex-end",
    // backgroundColor: "cyan",
    position: "absolute",
    bottom: 1,
  },
  before: {
    height: height * 0.06,
    width: width * 0.35,
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "green",
  },
  login: {
    height: height * 0.06,
    width: width * 0.13,
    alignItems: "flex-start",
    alignSelf: "center",
    justifyContent: "flex-end",
    // backgroundColor: "pink",
  },
});
