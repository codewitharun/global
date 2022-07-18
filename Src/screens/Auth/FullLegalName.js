import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import CustomButton from "../../components/Buttons/CustomButton";
import { COLOR } from "../../utils/Colors";
import { FONTS } from "../../utils/FontFamily";
import { ImagePath } from "../../utils/ImagePath";

const { height, width } = Dimensions.get("window");

const FullLegalName = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.mainConatiner}>
        <View style={styles.header}>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.12,
              // backgroundColor: "red",
              // alignItems:'center',
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image
                source={ImagePath.KYC_BACK_BUTTON}
                resizeMode="contain"
                style={{ height: 35, width: 35 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTital}>
            <Text style={{ fontSize: width / 22, color: COLOR.SPLASH_TXT }}>
              Verify Your Identity
            </Text>
          </View>
        </View>

        <View style={styles.Tital}>
          <View style={styles.Titaltxt}>
            <Text style={{ color: "#2C2C4E", fontSize: height / 46, fontFamily: FONTS.PoppinsSemiBold }}>
              Full Legal Name
            </Text>
          </View>
        </View>

        <View style={styles.txtInput}>
          <View style={styles.txtInputView}>
            <TextInput />
          </View>
          <View style={styles.notic}>
            <Text style={{ color: "#A3A3B2", fontSize: height / 54, fontFamily: FONTS.PoppinsMedium }}>
              Enter your full legal name as shown on your ID
            </Text>
          </View>
        </View>

        <View style={styles.button}>
          <CustomButton
            title="Continue"
            ButtonPress={() => props.navigation.navigate("VerifyIdentity")}
          />
        </View>
      </View>
    </SafeAreaView >
  );
};

export default FullLegalName;

const styles = StyleSheet.create({
  mainConatiner: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "white",
    // backgroundColor: "skyblue",
  },
  header: {
    height: height * 0.08,
    width: width * 0.9,
    // backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  headerTital: {
    width: width * 0.66,
    height: height * 0.05,
    // backgroundColor: "yellow",
    fontFamily: FONTS.PoppinsMedium,
    justifyContent: "center",
    alignItems: "center",
  },
  Tital: {
    height: height * 0.18,
    width: width * 0.9,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "flex-end",
  },
  Titaltxt: {
    height: height * 0.065,
    width: width * 0.9,
    // backgroundColor: "red",
    justifyContent: "center",
    fontFamily: FONTS.PoppinsBold
  },
  txtInput: {
    height: height * 0.32,
    width: width * 0.9,
    alignSelf: "center",
    // backgroundColor: "green",
    // borderWidth: 1,
  },
  txtInputView: {
    height: height * 0.067,
    width: width * 0.9,
    // alignSelf: "center",
    // backgroundColor: "yellow",
    borderRadius: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.BORDER_WITH,
  },
  notic: {
    height: height * 0.04,
    width: width * 0.9,
    justifyContent: "center",
    // backgroundColor: "red",
    fontFamily: FONTS.PoppinsMedium
  },
  button: {
    width: width * 0.9,
    height: height * 0.1,
    // backgroundColor: "green",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
