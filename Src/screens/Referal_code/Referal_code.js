import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
// import CustomButton from "../../components/Buttons/CustomButton";
CustomButton;
import { FONTS } from "../../utils/FontFamily";
import { ImagePath } from "../../utils/ImagePath";
import CustomButton from "../../components/Buttons/CustomButton";
import { COLOR } from "../../utils/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { height, width } = Dimensions.get("window");
const Referal_code = (props) => {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView enableOnAndroid={true}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        extraHeight={130} extraScrollHeight={130}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.main}>
            <View style={styles.arowimg}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image
                  style={{ height: 27, width: 20, resizeMode: "center" }}
                  source={ImagePath.BACKARROW}
                />
              </TouchableOpacity>
            </View>


            <View style={styles.imagesV}>
              <View>
                <Image
                  style={{ height: 300, width: 360, resizeMode: "stretch" }}
                  source={ImagePath.REFERRAL_CODE}
                />
              </View>
              <View>
                <Image
                  style={{ height: 100, width: 375, resizeMode: "stretch" }}
                  source={ImagePath.REFERRAL_CODE_MIRROR}
                />
              </View>
            </View>

            <View
              style={{
                position: "absolute",
                height: height * 0.4,
                width: width * 0.9,
                // backgroundColor: "red",
                alignSelf: "center",
                bottom: 20,
              }}
            >
              <View style={styles.text}>
                <Text
                  style={{
                    fontSize: height / 52,
                    fontFamily: FONTS.PoppinsSemiBold,
                    color: "#2C2C4E",
                    // fontWeight: "500",
                  }}
                >
                  Referral code (optional)
                </Text>
              </View>
              <View style={styles.textinput}>
                <TextInput
                  style={{
                    fontSize: 16,
                    color: "black",
                    fontFamily: FONTS.PoppinsRegular,
                  }}
                  placeholder={""}
                  keyboardType={"default"}
                  maxLength={30}
                />
              </View>
              <View style={styles.txtt}>
                <Text style={{ fontSize: height / 56, fontFamily: FONTS.PoppinsMedium, }}>
                  using a referal code at signup will earn you{" "}
                </Text>
              </View>
              <View style={styles.ttx}>
                <Text style={{ fontSize: height / 56, fontFamily: FONTS.PoppinsMedium }}>
                  signup bonus.
                </Text>
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
                    ButtonPress={() => props.navigation.navigate("Login")}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Referal_code;

const styles = StyleSheet.create({
  main: {
    height: height * 1,
    width: width * 1,
    backgroundColor: COLOR.WHITE,
  },
  arowimg: {
    height: height * 0.06,
    width: width * 0.9,
    // borderWidth:1,
    justifyContent: "flex-end",
    alignSelf: "center",
  },

  imagesV: {
    height: height * 0.7,
    width: width * 1,
    // backgroundColor: "yellow",
    alignSelf: "center",
  },
  text: {
    height: height * 0.05,
    width: width * 0.9,
    alignSelf: "center",
    // backgroundColor:'green'
  },
  textinput: {
    height: height * 0.07,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: "#2C2C4E33",
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#ffff",
  },
  txtt: {
    height: height * 0.04,
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: 'center', alignItems: 'center'
  },
  container: {
    flex: 1,
  },
  ttx: {
    height: height * 0.04,
    width: width * 0.9,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: "flex-start",
    // backgroundColor:"cyan"
    // borderWidth:1
  },
  btncon: {
    height: height * 0.13,
    width: width * 0.9,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor:"pink",
    position: "absolute",
    bottom: 30,
  },
});
