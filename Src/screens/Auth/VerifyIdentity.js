import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import CustomButton from "../../components/Buttons/CustomButton";
import { COLOR } from "../../utils/Colors";
import { FONTS } from "../../utils/FontFamily";
import { ImagePath } from "../../utils/ImagePath";

const { height, width } = Dimensions.get("window");

const VerifyIdentity = (props) => {
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
            <Text
              style={{
                fontSize: height / 44,
                color: "black",
                fontFamily: FONTS.PoppinsMedium,
              }}
            >
              Verify Your Identity
            </Text>
          </View>
        </View>

        <View style={styles.accountopennigtxt}>
          <View style={styles.txt1}>
            <Text style={styles.tittaltxt}> Account Opening:</Text>
          </View>
          <View style={styles.txt1}>
            <Text style={styles.tittaltxt}> Government regulations</Text>
          </View>
          <View style={styles.txt1}>
            <Text style={styles.tittaltxt}>require us to know more </Text>
          </View>
          <View style={styles.txt1}>
            <Text style={styles.tittaltxt}>about you. </Text>
          </View>
        </View>
        <View style={styles.requiredInfo}>
          <Text
            style={{
              fontFamily: FONTS.PoppinsMedium,
              fontSize: width / 30,
              color: "black",
              fontWeight: "400",
            }}
          >
            INFORMATION REQUIRED
          </Text>
        </View>

        <View style={styles.commonV}>
          <ImageBackground source={ImagePath.NAMEBACK} resizeMode="stretch">
            <TouchableOpacity
              onPress={() => props.navigation.navigate("FullLegalName")}
            >
              <View style={styles.legalName}>
                <View style={styles.userbgimage}>
                  <Image
                    source={ImagePath.USER_BUTTON_BG}
                    style={{ marginLeft: width * 0.01, resizeMode: "contain", height: 58, width: 60 }}
                  />
                </View>
                <View
                  style={{
                    width: width * 0.14,
                    height: height * 0.068,
                    // backgroundColor: "yellow",
                    justifyContent: "center",
                    position: "absolute",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={ImagePath.USER_ICONE}
                    style={{ marginLeft: width * 0.02, resizeMode: "contain", height: 30, width: 33 }}
                  />
                </View>
                <View style={styles.legalNametxt}>
                  <Text
                    style={{
                      fontSize: height / 48,
                      color: COLOR.BLACK,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    Full Legal Name
                  </Text>
                </View>
                <View style={styles.nextArowV}>
                  <Image
                    source={ImagePath.NEXT_ARROW}
                    style={{ resizeMode: "contain" }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground source={ImagePath.NAMEBACK} resizeMode="stretch">
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Instructions")}
            >
              <View style={styles.legalName}>
                <View style={styles.userbgimage}>
                  <Image
                    source={ImagePath.USER_BUTTON_BG}
                    style={{ marginLeft: width * 0.01, resizeMode: "contain", height: 58, width: 60 }}
                  />
                </View>
                <View
                  style={{
                    width: width * 0.14,
                    height: height * 0.068,
                    // backgroundColor: "yellow",
                    justifyContent: "center",
                    position: "absolute",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={ImagePath.ID_ICONE}
                    style={{ marginLeft: width * 0.02, resizeMode: "contain", height: 32, width: 35 }}
                  />
                </View>
                <View style={styles.legalNametxt}>
                  <Text
                    style={{
                      fontSize: height / 48,
                      color: COLOR.BLACK,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    ID
                  </Text>
                </View>

                <View style={styles.nextArowV}>
                  <Image
                    source={ImagePath.NEXT_ARROW}
                    style={{ resizeMode: "contain" }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground source={ImagePath.NAMEBACK} resizeMode="stretch">
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ScanPhoto")}
            >
              <View style={styles.legalName}>
                <View style={styles.userbgimage}>
                  <Image
                    source={ImagePath.USER_BUTTON_BG}
                    style={{ marginLeft: width * 0.01, resizeMode: "contain", height: 58, width: 60 }}
                  />
                </View>
                <View
                  style={{
                    width: width * 0.14,
                    height: height * 0.068,
                    // backgroundColor: "yellow",
                    justifyContent: "center",
                    position: "absolute",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={ImagePath.SELFE}
                    style={{ marginLeft: width * 0.02, resizeMode: "contain", height: 30, width: 32 }}
                  />
                </View>
                <View style={styles.legalNametxt}>
                  <Text
                    style={{
                      fontSize: height / 48,
                      color: COLOR.BLACK,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    Selfie
                  </Text>
                </View>

                <View style={styles.nextArowV}>
                  <Image
                    source={ImagePath.NEXT_ARROW}
                    style={{ resizeMode: "contain" }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.button}>
          <CustomButton
            title="Continue"
            ButtonPress={() => props.navigation.navigate("CompleteKyc")}
          />
        </View>

        <View style={styles.button2}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <View
              style={{
                height: height * 0.07,
                width: width * 0.9,
                borderRadius: 7,
                // backgroundColor: "yellow",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "rgb( 100,181,251)",
                borderWidth: 2,
              }}
            >
              <Text style={{ color: "rgb( 100,181,251)" }}>Skip</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyIdentity;

const styles = StyleSheet.create({
  mainConatiner: {
    height: height * 1,
    width: width * 1,
    // backgroundColor: "white",
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
    width: width * 0.71,
    height: height * 0.05,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  accountopennigtxt: {
    width: width * 0.9,
    height: height * 0.24,
    // backgroundColor: "cyan",
    alignSelf: "center",
    // borderWidth:1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt1: {
    width: width * 0.9,
    height: height * 0.04,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tittaltxt: {
    fontFamily: FONTS.PoppinsMedium,
    fontWeight: "400",
    // color:COLOR.SPLASH_TXT,
    color: "#2C2C4E",
    fontSize: width / 21,
  },
  requiredInfo: {
    width: width * 0.9,
    height: height * 0.055,
    // borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  commonV: {
    width: width * 0.9,
    height: height * 0.32,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "space-evenly",
  },
  legalName: {
    width: width * 0.9,
    height: height * 0.08,
    // borderWidth: 1,
    // backgroundColor: "rgb(241,242,252)",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
  },
  userbgimage: {
    width: width * 0.18,
    height: height * 0.07,
    // backgroundColor: "red",
    justifyContent: "center",
  },
  legalNametxt: {
    width: width * 0.6,
    height: height * 0.06,
    // backgroundColor: "blue",
    justifyContent: "center",
  },
  nextArowV: {
    width: width * 0.12,
    height: height * 0.07,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  button: {
    width: width * 0.9,
    height: height * 0.1,
    // backgroundColor: "green",
    alignSelf: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 100,
  },
  button2: {
    width: width * 0.9,
    height: height * 0.1,
    // backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
  },
});
