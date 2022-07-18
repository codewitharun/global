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

const SelectId_type = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.mainConatiner}>
        <View
          style={{
            height: height * 0.3,
            width: width * 1,
            backgroundColor: "#1D6DFD",
          }}
        >
          <ImageBackground
            source={ImagePath.IDHEAD}
            style={{
              height: height * 0.4,
              width: width * 1,
            }}
            resizeMode="stretch"
          >
            <View style={styles.header}>
              <View
                style={{
                  height: height * 0.09,
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
            </View>

            <View style={styles.accountopennigtxt}>
              {/* <View style={styles.textView1}> */}
              <View
                style={{
                  height: height * 0.035,
                  width: width * 0.9,
                  // backgroundColor: "red",
                  // fontFamily: FONTS.PoppinsMedium,
                }}
              >
                <Text
                  style={{
                    color: COLOR.WHITE,
                    fontSize: height / 45,
                    fontFamily: FONTS.PoppinsMedium
                  }}
                >
                  Select the type of document
                </Text>
              </View>
              <View
                style={{
                  height: height * 0.035,
                  width: width * 0.9,
                  // backgroundColor: 'red',
                  fontFamily: FONTS.PoppinsMedium,
                }}
              >
                <Text
                  style={{
                    color: COLOR.WHITE,
                    fontSize: height / 45,
                    fontFamily: FONTS.PoppinsMedium
                  }}
                >
                  you wish to scan
                </Text>
              </View>
              {/* </View> */}
              <View style={styles.textView1}>
                <View
                  style={{
                    height: height * 0.035,
                    width: width * 0.9,
                    // backgroundColor: 'red',
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  <Text
                    style={{
                      color: "rgb(186,168,216)",
                      fontFamily: FONTS.PoppinsMedium,

                      fontSize: height / 50,
                    }}
                  >
                    India has been set as the issuing country
                  </Text>
                </View>
                <View
                  style={{
                    height: height * 0.035,
                    width: width * 0.9,
                    // backgroundColor: "red",
                    // borderWidth: 1,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "rgb(186,168,216)",
                      fontSize: height / 50,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    of your documents.
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: COLOR.WHITE,
                        fontFamily: FONTS.PoppinsMedium,
                        marginLeft: width * 0.01,
                        fontSize: height / 59,
                        textDecorationLine: "underline",
                      }}
                    >
                      {""}Change country
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottom}>
          <View style={styles.commonV}>
            <TouchableOpacity>
              <View style={styles.legalName}>
                <View style={styles.userbgimage}>
                  <Image
                    source={ImagePath.PASSPORT}
                    style={{ resizeMode: "contain", height: 35, width: 35 }}
                  />
                </View>

                <View style={styles.legalNametxt}>
                  <Text
                    style={{
                      fontSize: width / 30,
                      color: COLOR.BLACK,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    Passport
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.legalName}>
                <View style={styles.userbgimage}>
                  <Image
                    source={ImagePath.DRIVING_LICENCE}
                    style={{ resizeMode: "contain", height: 35, width: 35 }}
                  />
                </View>

                <View style={styles.legalNametxt}>
                  <Text
                    style={{
                      fontSize: width / 30,
                      color: COLOR.BLACK,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    Driver License
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.legalName}>
                <View style={styles.userbgimage}>
                  <Image
                    source={ImagePath.ID_CARD_IMAGE}
                    style={{ resizeMode: "contain", height: 35, width: 35 }}
                  />
                </View>

                <View style={styles.legalNametxt}>
                  <Text
                    style={{
                      fontSize: width / 30,
                      color: COLOR.BLACK,
                      fontFamily: FONTS.PoppinsMedium,
                    }}
                  >
                    Identity Card
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <CustomButton
            title="Start Capture"
            ButtonPress={() => props.navigation.navigate("ScanDocument")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectId_type;

const styles = StyleSheet.create({
  mainConatiner: {
    height: height * 1,
    width: width * 1,
    backgroundColor: "white",
    // backgroundColor:'rgb(132,59,217)'
  },
  header: {
    height: height * 0.08,
    width: width * 0.9,
    // backgroundColor: "green",
    // alignItems: "center",
    alignSelf: "center",
  },
  button: {
    width: width * 0.9,
    height: height * 0.1,
    // backgroundColor: "green",
    alignSelf: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 30,
  },

  accountopennigtxt: {
    width: width * 0.9,
    height: height * 0.06,
    // backgroundColor: "cyan",
    alignSelf: "center",
    marginTop: height * 0.02
    // justifyContent:'center'
    // alignItems: "flex-start"
  },
  textView1: {
    width: width * 0.9,
    height: height * 0.06,
    // backgroundColor: "red",
    marginTop: height * 0.04,
    // borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  bottom: {
    width: width * 1,
    height: height * 0.45,
    // backgroundColor: "red",
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 80,
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
    height: height * 0.082,
    // borderWidth: 1,
    backgroundColor: "rgb(241,242,252)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
  },
  userbgimage: {
    width: width * 0.18,
    height: height * 0.07,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  legalNametxt: {
    width: width * 0.6,
    height: height * 0.07,
    // backgroundColor: "blue",
    justifyContent: "center",
  },
});
