import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import WalletHeader from "../../components/Header/WalletHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import Header from "../../components/Header/Header";
import HelpCenter from "../HelpCenter/HelpCenter";
import { COLOR } from "../../utils/Colors";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");

const ContectSupport = (props) => {
  const renderSearch = () => {
    return (
      <View style={styles.searchparent}>
        <View style={[styles.input, styles.shadowProp]}>
          <TextInput
            placeholder="Search for articles..."
            placeholderTextColor={"#B3B4B7"}
            style={{
              fontSize: height / 50,
              color: "black",
            }}
          />
        </View>
        {/* <TouchableOpacity style={styles.searchIconView}>
              <Image
                source={ImagePath.SEARCH}
                resizeMode="contain"
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <View style={styles.HeaderV}>
        <View
          style={{
            height: height * 0.1,
            width: width * 1,
            backgroundColor: "rgb(36,103,251)",
          }}
        >
          <ImageBackground
            source={ImagePath.CONTECT_BG}
            resizeMode="stretch"
            style={styles.HeaderV}
          >
            <View style={styles.header}>
              <View
                style={{
                  height: height * 0.08,
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
                    color: "#FFFFFF",
                    fontFamily: FONTS.PoppinsMedium,
                  }}
                >
                  Base Reward
                </Text>
              </View>
            </View>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.9,
                alignSelf: "center",
                //   borderWidth: 1,
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  color: "#FFFFFF",
                  fontSize: height / 35,
                }}
              >
                Hi
              </Text>
            </View>
            <View style={styles.baseRewardV}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  color: "#FFFFFF",
                  lineHeight: height * 0.027,
                  fontSize: height / 67,
                }}
              >
                Amet minim mollit non deserunt ullamco{"\n"}est sit aliqua dolor
                do amet sint.{"\n"}Velit officia consequat duis enim velit
                mollit.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.Timer1}>
        <ImageBackground
          source={ImagePath.CONVER_BG}
          style={styles.Timer}
          resizeMode="stretch"
        >
          <View style={styles.texttView}>
            <Text
              style={[{
                color: "#000000",
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 50,
              },]}
            >
              Start a Conversation
            </Text>
          </View>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.8,
              alignSelf: "center",
              // borderWidth: 1,
              justifyContent: "flex-end"
            }}
          >
            <Text
              style={{
                color: COLOR.BLACK,
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 65,
              }}
            >
              Our usual reply time
            </Text>
          </View>

          <View
            style={{
              height: height * 0.05,
              width: width * 0.8,
              alignSelf: "center",
              flexDirection: "row",
              // borderWidth: 1,
              alignItems: "center",
            }}
          >
            <View style={{ width: width * 0.1 }}>
              <Image
                source={ImagePath.TIMER}
                style={{ height: 20, width: 20 }}
              />
            </View>

            <Text
              style={{
                color: "#000000",
                fontFamily: FONTS.PoppinsMedium,
                fontSize: height / 65,
              }}
            >
              under 1 hour
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.mainButtonV}>
              <View style={styles.bttn}>
                <ImageBackground resizeMode="contain" source={ImagePath.BTN_BG} style={styles.bttn}>
                  <Image
                    source={ImagePath.TELI}
                    style={{ height: 20, width: 20 }}
                  />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: FONTS.PoppinsMedium,
                      fontSize: height / 65,
                    }}
                  >
                    {"    "}Send us a message
                  </Text>
                </ImageBackground>
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bottomView}>
            <View style={styles.count}>
              <View style={styles.btmMain}>
                <View style={styles.helptxxt}>
                  <Text
                    style={{
                      fontFamily: FONTS.PoppinsMedium,
                      fontSize: height / 56,
                      color: COLOR.BLACK,
                    }}
                  >
                    Search for help
                  </Text>
                </View>

                <View>{renderSearch()}</View>

                <View style={styles.artical}>
                  <Text style={styles.comntxxtstyle}>Suggested articles</Text>
                  <Text style={styles.comntxxtstyle}>Tax Reports</Text>
                </View>
                <View
                  style={{
                    height: height * 0.07,
                    width: width * 0.8,
                    //   borderWidth: 1,
                    alignSelf: "center",
                    borderBottomWidth: 0.5,
                    borderColor: "#EBEEF2",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.comntxxtstyle}>Getting Started</Text>
                </View>
                <View
                  style={{
                    height: height * 0.07,
                    width: width * 0.8,
                    //   borderWidth: 1,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.comntxxtstyle}>Photo Authentication</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ContectSupport;

const styles = StyleSheet.create({
  HeaderV: {
    height: height * 0.35,
    width: width * 1,
  },
  header: {
    height: height * 0.11,
    width: width * 0.9,
    // backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    // justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headerTital: {
    width: width * 0.7,
    height: height * 0.06,
    // backgroundColor: "yellow",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  baseRewardV: {
    height: height * 0.11,
    width: width * 0.9,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "space-evenly",
  },
  Timer: {
    height: height * 0.29,
    width: width * 0.9,
    alignSelf: "center",
    position: "absolute",
    top: 150,
    // backgroundColor: "red"
    // borderWidth
  },
  Timer1: {
    height: height * 0.82,
    width: width * 1,
    alignSelf: "center",
    position: "absolute",
    // backgroundColor: "red",
    top: 90,
    // borderWidth: 1,
  },
  texttView: {
    height: height * 0.07,
    width: width * 0.8,
    alignSelf: "center",
    // borderWidth: 1,
    justifyContent: "flex-end",
  },
  bttn: {
    height: height * 0.07,
    width: width * 0.7,
    // backgroundColor: "grey",
    // borderWidth: 1,
    // borderRadius: 10,
    // alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainButtonV: {
    height: height * 0.1,
    width: width * 0.8,
    // borderWidth: 1,
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  bottomView: {
    height: height * 0.88,
    width: width * 1,
    alignSelf: "center",
    justifyContent: "flex-end",
    // backgroundColor: 'yellow'
  },
  btmMain: {
    height: height * 0.46,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: "center",
    borderRadius: 10,
  },
  count: {
    height: height * 0.36,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "rgb(233,233,233)",
  },
  helptxxt: {
    height: height * 0.06,
    width: width * 0.8,
    justifyContent: "center",
    alignSelf: "center",
  },
  Search: {
    height: height * 0.11,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  searchparent: {
    height: height * 0.08,
    width: width * 0.8,
    alignSelf: "center",
    backgroundColor: "#F4F4F4",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    // marginTop: height * 0.08,
    // borderWidth: 1,
  },
  input: {
    height: height * 0.07,
    width: width * 0.65,
  },
  artical: {
    height: height * 0.1,
    width: width * 0.8,
    alignSelf: "center",
    // borderWidth: 1,
    borderBottomWidth: 0.5,
    borderColor: "#EBEEF2",
    justifyContent: "center",
  },
  comntxxtstyle: {
    fontFamily: FONTS.PoppinsMedium,
    fontSize: height / 58,
    color: "#191919",
  },
});
