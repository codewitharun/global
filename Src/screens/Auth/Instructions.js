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
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomButton from "../../components/Buttons/CustomButton";
import { COLOR } from "../../utils/Colors";
import { FONTS } from "../../utils/FontFamily";
import { ImagePath } from "../../utils/ImagePath";

const { height, width } = Dimensions.get("window");
const Instructions = (props) => {
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
                fontSize: width / 24,
                color: COLOR.SPLASH_TXT,
                fontFamily: FONTS.PoppinsMedium,
              }}
            >
              Instructions
            </Text>
          </View>
        </View>
        <View style={styles.contentImg}>
          <Image source={ImagePath.CONTENT_WRITE} style={{ height: 120, width: 120 }} resizeMode="contain" />
        </View>

        <View style={styles.txtView}>
          <View style={styles.minText}>
            <Text
              style={{
                // fontWeight: "400",
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 44,
                color: "#2C2C4E",
              }}
            >
              Please take a photo of yourself
            </Text>
          </View>
          <View style={styles.minText}>
            <Text
              style={{
                // fontWeight: "400",
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 44,
                color: "#2C2C4E",
              }}
            >
              holding in your hand(s):
            </Text>
          </View>

          <View style={[styles.imgTxt, { marginTop: height * 0.01 }]}>
            <View style={styles.imgPhtoId}>
              <Image
                source={ImagePath.PHOTO_ID}
                resizeMode="contain"
                style={{ height: 32, width: 32 }}
              />
            </View>
            <View style={styles.imageTatal}>
              <View style={styles.txtt}>
                <Text
                  style={{
                    color: "#2C2C4E",
                    fontSize: height / 60,
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  The side of your document with
                </Text>
              </View>
              <View style={styles.txtt}>
                <Text
                  style={{
                    color: "#2C2C4E",
                    fontSize: height / 60,
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  your photo
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imgTxt}>
            <View style={styles.imgPhtoId}>
              <Image
                source={ImagePath.HAND_WRITING}
                resizeMode="contain"
                style={{ height: 30, width: 30 }}
              />
            </View>
            <View style={styles.imageTatal}>
              <View style={styles.txtt}>
                <Text
                  style={{
                    color: "#2C2C4E",
                    fontSize: height / 60,
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  A handwritten note containing
                </Text>
              </View>
              <View style={styles.txtt2}>
                <View>
                  <Text
                    style={{
                      color: "#2C2C4E",
                      fontSize: height / 60,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    this text
                  </Text>
                </View>
                <View >
                  <Text
                    style={{
                      color: "rgb( 146,146,146)",
                      fontSize: height / 58,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    : Base reward 29 Mar 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Bottom}>
          <View style={styles.scannningTipIn}>
            <View style={styles.ScanningTp}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  // fontWeight: "600",
                  fontSize: height / 49,
                  color: "#2C2C4E",
                }}
              >
                Documents Scanning Tips
              </Text>
            </View>
            <View style={styles.EnsureDocument}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontWeight: "600",
                  fontSize: height / 51,
                  color: "rgb(167,169,187)",
                }}
              >
                Please ensure your documents are not:
              </Text>
            </View>
          </View>
          <View style={styles.blurryMain}>
            <View style={styles.Blurry}>
              <View style={styles.blurryImg}>
                <Image source={ImagePath.BLURRY_IMAGE} resizeMode="contain" />
              </View>
              <View style={styles.BlurryTxtt}>
                <Text
                  style={{
                    fontSize: height / 51,
                    color: COLOR.BLACK,
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  Blurry
                </Text>
              </View>
            </View>

            <View style={styles.Blurry}>
              <View style={styles.blurryImg2}>
                <Image source={ImagePath.FOLDED_WRUNKEL} resizeMode="contain" />
              </View>
              <View style={styles.BlurryTxtt2}>
                <Text
                  style={{
                    fontSize: height / 51,
                    color: COLOR.BLACK,
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  Folded or Wrinkled
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <CustomButton
            title="Start Capture"
            ButtonPress={() => props.navigation.navigate("SelectId_type")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Instructions;

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

    justifyContent: "center",
    alignItems: "center",
  },
  contentImg: {
    width: width * 1,
    height: height * 0.25,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  txtView: {
    width: width * 0.9,
    height: height * 0.27,
    // backgroundColor: "red",
    alignSelf: "center"
  },
  minText: {
    width: width * 0.9,
    height: height * 0.036,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignSelf: "center",
  },
  imgTxt: {
    width: width * 0.9,
    height: height * 0.084,
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
    width: width * 0.7,
    height: height * 0.08,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  txtt: {
    width: width * 0.7,
    height: height * 0.03,
    // backgroundColor: "yellow",
    // borderWidth: 1,
    justifyContent: "center",
  },
  txtt2: {
    width: width * 0.7,
    height: height * 0.03,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  Bottom: {
    width: width * 1,
    height: height * 0.24,
    borderRadius: 11,
    backgroundColor: "rgb(242,242,252)",
    alignSelf: "center",
  },
  button: {
    width: width * 0.9,
    height: height * 0.1,
    // backgroundColor: "green",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
  },
  ScanningTp: {
    width: width * 0.9,
    height: height * 0.04,
    // backgroundColor:'red',
    // borderWidth:1,
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  scannningTipIn: {
    width: width * 0.9,
    height: height * 0.1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  EnsureDocument: {
    width: width * 0.9,
    height: height * 0.03,
    // backgroundColor: 'green',
    alignSelf: "center",
    justifyContent: "center",
  },
  Blurry: {
    width: width * 0.9,
    height: height * 0.06,
    // backgroundColor: "green",
    // borderWidth:1,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  blurryImg: {
    width: width * 0.12,
    height: height * 0.05,
    // backgroundColor: "cyan",
    justifyContent: "center",
    // alignItems: "center",
  },
  blurryImg2: {
    width: width * 0.12,
    height: height * 0.05,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  blurryMain: {
    width: width * 1,
    height: height * 0.15,
    // backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
  BlurryTxtt: {
    width: width * 0.7,
    height: height * 0.05,
    // backgroundColor: "blue",
    justifyContent: "center",
    // alignItems: "center",
  },
  BlurryTxtt2: {
    width: width * 0.46,
    height: height * 0.062,
    // backgroundColor: "yellow",
    justifyContent: "center",

  },
});
