import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  Switch,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");
import Header from "../../components/Header/Header";
import { ScrollView } from "react-native-gesture-handler";

const HelpCenter = (props) => {
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
        <TouchableOpacity style={styles.searchIconView}>
          <Image
            source={ImagePath.SEARCH}
            resizeMode="contain"
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderProfile = () => {
    return (
      <View
        style={{
          height: height * 0.7,
          width: width * 1,
          // backgroundColor: "red",
          //   borderWidth: 1,
          marginVertical: 15,
        }}
      >
        <View
          style={{
            height: height * 0.1,
            width: width * 1,
            // borderWidth:1
          }}
        >
          <TouchableOpacity>
            <View style={styles.tital}>
              <View style={styles.Visite}>
                <Image source={ImagePath.VISITE_ICON} />
              </View>
              <View style={styles.requirePasscode}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsSemiBold,
                    fontSize: height / 70,
                    color: "#2C3A4B",
                  }}
                >
                  Go to Base Reward
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.baseReward}>
          <Text
            style={{
              fontFamily: FONTS.PoppinsSemiBold,
              color: "#000000",
              fontSize: height / 44,
            }}
          >
            Base Reward
          </Text>
          <Text
            style={{
              fontFamily: FONTS.PoppinsSemiBold,
              color: "#000000",
              fontSize: height / 60,
            }}
          >
            Welcome to our Help Center
          </Text>
        </View>
        <View style={styles.Search}>{renderSearch()}</View>
        <ScrollView style={{ marginTop: height * 0.03 }} showsVerticalScrollIndicator={false}>
          <View style={styles.baseRewardApp}>
            <View style={styles.moiblie}>
              <Image source={ImagePath.MOBILE_ICONE} resizeMode="contain" />
            </View>
            <View
              style={{
                height: height * 0.05,
                width: width * 0.9,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 55, color: "#000000" }}
              >
                Base Reward App
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 60,
                  color: "#000000",
                }}
              >
                Amet minim mollit non deserunt{"\n"}ullamco est sit aliqua
                dolor do amet{"\n"}sint. Velit officia consequat duis enim
                {"\n"}velit mollit. Exercitation veniam{"\n"}consequat sunt
                nostrud amet.
              </Text>
            </View>

            <View style={styles.brw}>
              <Image
                source={ImagePath.BRW}
                resizeMode="contain"
                style={{ height: 25, width: 25 }}
              />
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 68,
                  color: "black"
                }}
              >
                Amet minim mollit non deserunt ullamco{"\n"}est sit aliqua dolor
                do amet sint.
              </Text>
            </View>
          </View>

          <View style={styles.baseRewardApp}>
            <View style={styles.moiblie}>
              <Image source={ImagePath.MOBILE_ICONE} resizeMode="contain" />
            </View>
            <View
              style={{
                height: height * 0.05,
                width: width * 0.9,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontFamily: FONTS.PoppinsSemiBold, fontSize: height / 55, color: "#000000" }}
              >
                Base Reward App
              </Text>
            </View>

            <View style={styles.brwNew}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 60,
                  color: "#000000",
                }}
              >
                Amet minim mollit non deserunt{"\n"}ullamco est sit aliqua
                dolor do amet{"\n"}sint. Velit officia consequat duis enim
                {"\n"}velit mollit. Exercitation veniam{"\n"}consequat sunt
                nostrud amet.
              </Text>
            </View>

            <View style={styles.brw}>
              <Image
                source={ImagePath.BRW}
                resizeMode="contain"
                style={{ height: 25, width: 25 }}
              />
              <Text
                style={{
                  fontFamily: FONTS.PoppinsMedium,
                  fontSize: height / 70,
                  color: "black"
                }}
              >
                Amet minim mollit non deserunt ullamco{"\n"}est sit aliqua dolor
                do amet sint.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        backIcon={true}
        onBackPress={() => props.navigation.goBack()}
        HeaderTitle={true}
        Title="Help Center"
      />
      {renderProfile()}
    </SafeAreaView>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  requirePasscode: {
    height: height * 0.05,
    width: width * 0.35,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Visite: {
    height: height * 0.05,
    width: width * 0.55,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  tital: {
    height: height * 0.07,
    width: width * 1,
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    // justifyContent:'flex-end'
    justifyContent: "center",
  },

  baseReward: {
    height: height * 0.07,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: "center",
    // justifyContent: "space-between",
  },
  Search: {
    height: height * 0.1,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  searchparent: {
    height: height * 0.08,
    width: width * 0.9,
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
  //
  searchIconView: {
    height: height * 0.07,
    width: width * 0.2,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  baseRewardApp: {
    height: height * 0.33,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: "center",
  },
  moiblie: {
    height: height * 0.042,
    width: width * 0.9,
    // borderWidth: 1,
  },
  brw: {
    height: height * 0.06,
    width: width * 0.8,
    // borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brwNew: {
    height: height * 0.14,
    width: width * 0.9,
    // borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  basetxxtView: {},
});
