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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ImagePath } from "../../utils/ImagePath";
import { FONTS } from "../../utils/FontFamily";
import CustomButton from "../../components/Buttons/CustomButton";
const { height, width } = Dimensions.get("screen");
import Header from "../../components/Header/Header";

const BankDetails = (props) => {
  const renderBank = () => {
    return (
      <View style={styles.bank}>
        <View style={styles.bankContain}>
          <ImageBackground
            source={ImagePath.BNK_BG}
            style={{
              height: height * 0.1,
              width: width * 0.9,
              // borderWidth: 1,
              justifyContent: "center",
            }}
            resizeMode="contain"
          >
            <View style={styles.bankname}>
              <View style={styles.img}>
                <ImageBackground
                  source={ImagePath.HOME_CIRCLE}
                  resizeMode="contain"
                  style={{ height: 45, width: 45 }}
                >
                  <View style={styles.imgbnk}>
                    <Image source={ImagePath.BANK_ICONE} />
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.title}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.ttxt}> Bank Name</Text>
                  <Text
                    style={{
                      color: "#191919",
                      fontFamily: FONTS.PoppinsMedium,
                      fontSize: height / 67,
                    }}
                  >
                    {" "}
                    (Primary Bank)
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#191919",
                    fontFamily: FONTS.PoppinsMedium,
                    fontSize: height / 80,
                  }}
                >
                  {" "}
                  xxxxxx2514
                </Text>
              </View>
              <View style={styles.threedotimg}>
                <TouchableOpacity>
                  <Image source={ImagePath.THREE_DOT} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <ImageBackground
            source={ImagePath.BNK_BG}
            style={{
              height: height * 0.15,
              width: width * 0.9,
              //   borderWidth: 1,
              justifyContent: "center",
            }}
            resizeMode="contain"
          >
            <View style={styles.bankname}>
              <View style={styles.img}>
                <ImageBackground
                  source={ImagePath.HOME_CIRCLE}
                  resizeMode="contain"
                  style={{ height: 45, width: 45 }}
                >
                  <View style={styles.imgbnk}>
                    <Image source={ImagePath.BANK_ICONE} />
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.title}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.ttxt}> Bank Name</Text>
                </View>
                <Text
                  style={{
                    color: "#191919",
                    fontFamily: FONTS.PoppinsMedium,
                    fontSize: height / 80,
                  }}
                >
                  {" "}
                  xxxxxx2514
                </Text>
              </View>
              <View style={styles.threedotimg}>
                <TouchableOpacity>
                  <Image source={ImagePath.THREE_DOT} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header
        backIcon={true}
        onBackPress={() => props.navigation.goBack()}
        HeaderTitle={true}
        Title="Bank Details"
      />
      {/* {renderDetail()} */}
      {renderBank()}
      <View
        style={{
          position: "absolute",
          bottom: 10,
          justifyContent: "center",
          alignItems: "center",
          height: height * 0.1,
          width: width * 1,
        }}
      >
        <CustomButton
          title="Add Another Bank"
          ButtonPress={() => props.navigation.navigate("AddAnotherBank")}
        />
      </View>
    </SafeAreaView>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  bank: {
    height: height * 0.7,
    width: width * 1,
    // backgroundColor: "red",
    // borderWidth: 1,
    justifyContent: "center",
  },
  bankContain: {
    height: height * 0.6,
    width: width * 0.9,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignSelf: "center",
  },
  bankname: {
    height: height * 0.1,
    width: width * 0.9,
    // borderWidth: 1,
    flexDirection: "row",
  },

  img: {
    width: width * 0.16,
    height: height * 0.1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgbnk: {
    width: width * 0.11,
    height: height * 0.05,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    width: width * 0.6,
    height: height * 0.1,
    // borderWidth: 1,
    justifyContent: "center",
  },
  threedotimg: {
    width: width * 0.15,
    height: height * 0.1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ttxt: {
    color: "#474EF0",
    fontFamily: FONTS.PoppinsMedium,
    fontSize: height / 55,
  },
});
